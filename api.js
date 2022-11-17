export function exec() {
  const api = async (orderId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${orderId}`)
      .then((response) => response.json())

    console.log(response)
  };

  const inputOrderId = document.querySelector("#orderId");
  const inputResultado = document.querySelector("#result");
  const btn = document.querySelector("#btn");
  
  let inputValue = "";

  inputOrderId.addEventListener("change", (e) => inputValue = (e.target.value));
  
  btn.addEventListener("click", async () => inputResultado.value = await api(inputValue));
}