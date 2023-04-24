const inputName = document.querySelector("#氏名");
let inputWork = document.querySelector("#仕事");
let inputMessage = document.querySelector("#メッセージ");
const 送る = document.querySelector(".送る");

let Name = document.querySelector(".newName");
const shigoto = document.querySelector(".newShigoto");
const message = document.querySelector(".newMessage");
let foto = document.querySelector(".foto");

let people = document.querySelector(".people");

送る.addEventListener("click", () => {
  if (inputName.value === "" || inputWork.value === "" || inputMessage.value === "") {
    alert("データを入力されていませんでした。");
  } else {
    foto.style.display = "block";
    Name.textContent = inputName.value;
    shigoto.textContent = inputWork.value;
    message.textContent = inputMessage.value;
    alert("データを入力しました！！");

    people.classList.add("comments");
    inputName.value = "";
    inputWork.value = "";
    inputMessage.value = "";
  }
});
