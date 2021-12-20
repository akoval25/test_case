
const calcAction = document.querySelector('#action');
const form = document.querySelector(".form__btm");

// console.log(calcAction[0].dataset.action);

form.addEventListener("click", (event) => {

event.preventDefault();
  const firstNum = document.querySelector('.js-input__first');
  const secondNum = document.querySelector('.js-input__second');
  const result = document.querySelector('.js-result');

  switch (calcAction[0].dataset.action) {
  // const formData = new FormData(event.currentTarget);
  // console.log(formData); 
  // switch (event.currentTarget.elements.action.value) {
  case "plus":
    // return form.insertAdjacentHTML("afterend", `<p>Результат: ${Math.round(+firstNum.value + +secondNum.value)}</p>`);
    return result.innerHTML = `<p class="js-result">Результат: ${Math.round(+firstNum.value + +secondNum.value)}</p>`;
  case "minus":
    return result.innerHTML = `<p class="js-result">Результат: ${Math.round(+firstNum.value - +secondNum.value)}</p>`;
  case "multiplication":
    return result.innerHTML = `<p class="js-result">Результат: ${Math.round(+firstNum.value * +secondNum.value)}</p>`;
  case "division":
    return result.innerHTML = `<p class="js-result">Результат: ${Math.round(+firstNum.value / +secondNum.value)}</p>`;
  default:
    return result.innerHTML = `<p class="js-result">Щось пішло не так</p>`;
}

});






