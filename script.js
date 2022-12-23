const myFunction = async() => {
   let button = document.querySelector("button")
    button.classList.add("error-message");

    let div = document.getElementById("main-div")
    div.classList.add("pyro");
}

document.querySelector("button").addEventListener("click", myFunction);