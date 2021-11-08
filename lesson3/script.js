// const name = "Igor";
// const age = 25;

// console.log("Пользователь - " + name + ". Возраст - " + age + "!");

// console.log(`Пользователь - ${name}. Возраст - ${age}!`);

const box = document.querySelector(".box");
const btn = document.querySelector(".btn");

// const getDog = () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       box.innerHTML = `<img src="${data.message}" width="400" />`;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const getDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data);
  box.innerHTML = `<img src="${data.message}" width="400" />`;
};

btn.addEventListener("click", getDog);
