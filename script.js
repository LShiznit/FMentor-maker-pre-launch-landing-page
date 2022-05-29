const email = document.querySelector('form input')
const form = document.querySelector('form')
const errorEl = document.getElementById('error-msg')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(email.value)

  if (email.value === '') {
    highlightError()
    errorEl.innerText = 'Oops! Please add your email'
    errorTimeOut()
  } else if (email.value.length > 0 && email.value.length < 5) {
    highlightError()
    errorEl.innerText = 'Oops! Email is too short'
    eraseError()
  } else if (email.value.length > 25) {
    highlightError()
    errorEl.innerText = 'Oops! Email is too long'
    eraseError()
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
  ) {
    highlightSuccess()
    errorEl.style.color = '#3ee9e5'
    eraseError()
    // setTimeout(()=> {
    //   errorEl.style.color = ''
    // })
    errorEl.innerText = 'Thank you for submission!!!'
  } else {
    highlightError()
    errorEl.innerText = 'Oops! That doesn’t look like an email address'
    eraseError()
  }

  function eraseError() {
    setTimeout(() => {
      errorEl.innerText = ''
      errorEl.style.color = '#ff2965'
    }, '3000')
  }
  function highlightError() {
    const c = document.querySelector('#form-email form input')
    c.style.outlineColor = '#ff2965'
    c.style.outlineStyle = 'solid'
    c.style.outlineWidth = '2px'

    setTimeout(() => {
      c.style.outlineColor = 'revert'
      c.style.outlineStyle = 'revert'
      c.style.outlineWidth = 'revert'
    }, '3000')
  }
  function highlightSuccess() {
    const c = document.querySelector('#form-email form input')
    c.style.outlineColor = '#3ee9e5'
    c.style.outlineStyle = 'solid'
    c.style.outlineWidth = '2px'

    setTimeout(() => {
      c.style.outlineColor = 'revert'
      c.style.outlineStyle = 'revert'
      c.style.outlineWidth = 'revert'
    }, '3000')
  }
})
