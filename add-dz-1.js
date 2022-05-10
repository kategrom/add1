'use strict';

const username = prompt("Введіть своє username");
const password = prompt("Введіть свій password");

const adminUsername = "Kattya";
const adminPassword = "ekaterina_gr";

if(username === adminUsername && password === adminPassword){
  alert("Вітаю адміна!");
}else{
  alert("Невірні дані для входу");
}