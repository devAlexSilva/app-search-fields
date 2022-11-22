export function exec() {
  const api = async (orderId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${orderId}`)
      .then((response) => response.json())

    console.log(response)
    return response.title
  };

  const inputOrderId = document.querySelector("#orderId");
  const inputResultado = document.querySelector("#result");
  const btnSearch = document.querySelector("#btn-search");
  const btnCopy = document.querySelector("#btn-copy");
  const popup = document.getElementById("myPopup");
  
  inputOrderId.addEventListener("keydown", async (e) => {
    if(e.keyCode !== 13) return
    
    inputResultado.value = await api(e.target.value)
  });
  
  btnSearch.addEventListener("click", async () => {
    inputResultado.value = await api(inputOrderId.value)
  });

  btnCopy.addEventListener("click", async () => {
    let text = inputResultado.value
    await navigator.clipboard.writeText(text)

    popup.classList.toggle("show");
  });
}
