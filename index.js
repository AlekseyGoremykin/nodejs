const inp = document.getElementsByClassName('password')[0];

const serverRequest = () => {
  console.log(inp.value)
  fetch('http://localhost:3000/', {
    method: 'POST',
    body: JSON.stringify({
      password: inp.value
    })
    })
}
