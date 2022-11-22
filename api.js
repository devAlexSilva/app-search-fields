export function exec() {
  const api = async (orderId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${orderId}`)
      .then((response) => response.json())

    console.log(response)
    return response.title
  };

  const inputOrderId = document.querySelector("#orderId");
  const inputResultado = document.querySelector("#result");
  const btn = document.querySelector("#btn");
  
  inputOrderId.addEventListener("keydown", async (e) => {
    if(e.keyCode !== 13) return
    
    inputResultado.value = await api(e.target.value)
  });
  
  btn.addEventListener("click", async () => {
    inputResultado.value = await api(inputOrderId.value)
  });
}