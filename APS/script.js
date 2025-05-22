// chart.js - Graphic
const ctx = document.getElementById("graficoEmpregos");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "São José dos Campos",
      "Taubaté",
      "Jacareí",
      "Pindamonhangaba",
      "Guaratinguetá",
    ],
    datasets: [
      {
        label: "Empregos Criados 2023",
        data: [5200, 2750, 1980, 1230, 900],
        backgroundColor: "rgba(0, 102, 204, 0.7)", // cor da bolinha
        borderColor: "rgba(0, 102, 204, 1)", // cor da linha
        borderWidth: 3, // espessura da linha
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// carousel img
// seta o valor de index como 0
let index = 0;
// guarda um array com as fotos
const imgs = document.querySelectorAll(".carousel img");
// busca o elemento pelo id
const photoRef = document.getElementById("photo-ref");
// guarda os valores das referencias das fotos
const photoRefValues = [
  "Anel Viário em São José dos Campos - <a href='https://www.cbnvale.com.br/obras-no-anel-viario-em-sao-jose-sao-adiadas-devido-as-chuvas/' target='_blank'><i>https://www.cbnvale.com.br</i></a>",
  "Minha Casa, Minha Vida em Jacareí - <a href='https://www.jacarei.sp.gov.br/jacarei-e-contemplada-com-200-novas-unidades-habitacionais-da-cdhu/' target='_blank'><i>https://www.jacarei.sp.gov.br</i></a>",
  "Aeroporto de Guaratinguetá - <a href='https://redevoa.com.br/nossos-aeroportos/aeroporto-edu-chaves-vale-da-fe-guaratingueta-sp/' target='_blank'><i>https://redevoa.com.br</i>",
];

// seta o valor da ref da foto com o valor de indice[0] do array de valores
photoRef.innerHTML = photoRefValues[0];

// serve para setar um intervalo para realiar as operações dentro dele
setInterval(() => {
  /* pega a imagem de indice[index] (começa com 0) do array de imagens
   * e remove a classe "active" dela, fazendo com que ela suma
   */
  imgs[index].classList.remove("active");
  // itera o valor de index com o resultado do resto da divisão entre index + 1 / pelo tamanho do array de imagens (no caso 3 (0, 1 e 2))
  index = (index + 1) % imgs.length;
  // pega a imagem de posição do novo valor de index e adiciona a classe "active", fazendo com que ela apareça na tela
  imgs[index].classList.add("active");
  // altera o valor da referencia da foto para o valor do array de referencias com o mesmo index da foto
  // fazendo a foto e a referencia se coincidirem
  photoRef.innerHTML = photoRefValues[index];
  // esse numero 4000 é o tempo que cada foto ficará aparente ate ser trocada
  // no caso são 4000ms ou seja 4s
}, 4000);

// animation
const sections = document.querySelectorAll("section");

function reveal() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
