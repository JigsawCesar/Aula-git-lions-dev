const prompt = require("prompt-sync");
const idade;

idade = prompt("Digite sua idade: ");

if (idade < 18){
  console.log("Você é de menor!");
} else {
  console.log("Você é de maior!");
};
