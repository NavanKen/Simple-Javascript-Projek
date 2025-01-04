let submit = document.getElementById("submit");

let init = 0;

function startBot() {
  return `Halo Aku hanya bot sederhana siapa namamu ?`;
}

document.getElementById("mulai").addEventListener("click", () => {
  let bot = document.getElementById("bot-chat");
  bot.innerHTML = startBot();
  document.getElementById("mulaibtn").style.display = "none";
  document.getElementById("simple-bot").style.display = "block";
});

submit.addEventListener("click", () => {
  init++;
  console.log(init);

  let bot = document.getElementById("bot-chat");
  let username = document.querySelector(".username").value;
  let user = document.getElementById("user-chat").value;
  const proses = (bot.innerHTML = "Sedang di Proses");

  if (init == 1) {
    proses;
    setTimeout(() => {
      bot.innerHTML = `ooo ${username}, btw kamu umur berapa ?`;
      clearFields();
    }, 1000);
  } else if (init == 2) {
    proses;
    setTimeout(() => {
      bot.innerHTML = `Wah udah umur ${user} keren keren, sekarang tinggal dimana ?`;
      clearFields();
    }, 1000);
  } else if (init == 3) {
    proses;
    setTimeout(() => {
      bot.innerHTML = `oo di ${user}, hobi kamu apa ?`;
      clearFields();
    }, 1000);
  } else if (init == 4) {
    proses;
    setTimeout(() => {
      bot.innerHTML = `wih sama dong hobi ku juga ${user}, eh udah dulu ya ${username} `;
      document.getElementById("user-chat").style.display = "none";
      document.getElementById("submit").innerHTML = "ok";
      clearFields();
    }, 1000);
  } else {
    proses;
    setTimeout(() => {
      document.getElementById("simple-bot").style.display = "none";
      document.getElementById("mulaibtn").style.display = "block";
    }, 1000);
  }
});

function clearFields() {
  document.getElementById("user-chat").value = null;
}
