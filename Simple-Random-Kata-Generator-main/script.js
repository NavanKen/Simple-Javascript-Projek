const kataKata = [
  {
    text: `Jangan berharap pada manusia, berharaplah pada Allah. Karena hanya Allah yang dapat memberikan segalanya.`,
  },
  {
    text: `Setiap hari adalah hari baru untuk mendekatkan diri kepada Allah.`,
  },
  {
    text: `Tersenyumlah, karena senyumanmu adalah sedekah yang paling indah`,
  },
  {
    text: `Berbuat baiklah tanpa mengharapkan balasan dari manusia. Karena Allah akan memberikan pahala yang berlipat ganda.`,
  },
  {
    text: `"Jadilah seseorang yang berusaha menjadi lebih baik dari hari ke hari, dan tidak hanya menjadi orang yang baik di hari kemarin."`,
  },
  {
    text: `"Tegakkan keadilan, meski dengan sedekah yang sekecil apapun. Karena sedekah terkecil dapat mengubah dunia."`,
  },
  {
    text: `"Allah tidak pernah memberikan ujian yang melebihi kemampuan hamba-Nya. Jadilah kuat dan yakin, bahwa kamu mampu menghadapinya."`,
  },
  {
    text: `"Tetaplah berdoa dan berusaha, karena kesuksesan datang dari usaha yang tak pernah berhenti."`,
  },
  {
    text: `"Sesungguhnya, setiap urusan yang dimulai dengan doa pasti akan menjadi berkat bagi kehidupanmu."`,
  },
  {
    text: `"Allah lebih tahu apa yang baik untukmu. Terimalah dan syukuri setiap takdir-Nya."`,
  },
  {
    text: `"Jangan biarkan kesulitan mengalahkanmu, karena Allah tidak akan memberikan ujian di luar batas kemampuan hamba-Nya."`,
  },
];

const kata = document.getElementById("kata");
const button = document.getElementById("btn");
const boxButton = document.getElementById("box");

generateKata = () => {
  const random = Math.floor(Math.random() * kataKata.length);
  const randomKata = kataKata[random];
  kata.textContent = `"${randomKata.text}"`;
};

button.addEventListener("click", generateKata);

boxButton.addEventListener("click", () => {
  window.location.href =
    "https://www.detik.com/sulsel/berita/d-7568808/100-kata-kata-mutiara-islami-yang-menyentuh-hati-dan-menginspirasi";
});

generateKata();
