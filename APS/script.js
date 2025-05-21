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
        label: "Empregos Criados (2023-2024)",
        data: [5200, 2750, 1980, 1230, 900],
        backgroundColor: "rgba(0, 102, 204, 0.7)",
        borderColor: "rgba(0, 102, 204, 1)",
        borderWidth: 1,
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
let index = 0;
const imgs = document.querySelectorAll(".carousel img");
const photoRef = document.getElementById("photo-ref");
const photoRefValues = [
  "Anel Viário em São José dos Campos - <a href='https://www.cbnvale.com.br/obras-no-anel-viario-em-sao-jose-sao-adiadas-devido-as-chuvas/' target='_blank'><i>https://www.cbnvale.com.br</i></a>",
  "Minha Casa, Minha Vida em Jacareí - <a href='https://www.jacarei.sp.gov.br/jacarei-e-contemplada-com-200-novas-unidades-habitacionais-da-cdhu/' target='_blank'><i>https://www.jacarei.sp.gov.br</i></a>",
  "Aeroporto de Guaratinguetá - <a href='https://redevoa.com.br/nossos-aeroportos/aeroporto-edu-chaves-vale-da-fe-guaratingueta-sp/' target='_blank'><i>https://redevoa.com.br</i>",
];
photoRef.innerHTML = photoRefValues[0];

setInterval(() => {
  imgs[index].classList.remove("active");
  index = (index + 1) % imgs.length;
  imgs[index].classList.add("active");
  photoRef.innerHTML = photoRefValues[index];
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
