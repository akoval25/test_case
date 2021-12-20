

const form = document.querySelector(".form__btm");
const select = document.querySelector('.form__select');
  
select.addEventListener('change', function () {
    
  arr = {
    'plus': '+',
    'minus': '-',
    'multiplication': '*',
    'division': '/',
   };
    let key = this.value;
    array = arr[key];

  
form.addEventListener("click", (event) => {

  event.preventDefault();

  
  const firstNum = document.querySelector('.js-input__first');
  const secondNum = document.querySelector('.js-input__second');
  const result = document.querySelector('.js-result');

  switch (array) {
  case "+":
    return result.innerHTML = `<p class="js-result">Результат: ${Math.floor(+firstNum.value + +secondNum.value)}</p>`;
  case "-":
    return result.innerHTML = `<p class="js-result">Результат: ${Math.floor(+firstNum.value - +secondNum.value)}</p>`;
  case "*":
    return result.innerHTML = `<p class="js-result">Результат: ${Math.floor(+firstNum.value * +secondNum.value)}</p>`;
  case "/":
    return result.innerHTML = `<p class="js-result">Результат: ${Math.floor(+firstNum.value / +secondNum.value)}</p>`;
  default:
    return result.innerHTML = `<p class="js-result">Щось пішло не так</p>`;
}
});
  });






