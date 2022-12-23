const myFunction = () => {
   let button = document.querySelector("button")
    button.classList.add("error-message");
}

document.querySelector("button").addEventListener("click", myFunction);