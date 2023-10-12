let pwd 
let k = 0
do {
pwd = +prompt(`Введите пароль`) 
   k++

} while (pwd !== 7777 && k < 3);

console.log(pwd);

