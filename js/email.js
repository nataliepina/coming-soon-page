function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
// grab elements
let form = document.querySelector("form.email")
let button = document.querySelector("form.email > button")
let input = document.querySelector("form.email > input")
let errorMessage = document.querySelector("h5#error-message")

// on change event handler
button.addEventListener("click", e => {
  e.preventDefault();
  form.classList.remove("error-form")
  input.classList.remove("icon-error")
  errorMessage.classList.remove("error-message")
  if (!validateEmail(input.value)) {
    form.classList.add("error-form")
    input.classList.add("icon-error")
    errorMessage.classList.add("error-message")
  }
})