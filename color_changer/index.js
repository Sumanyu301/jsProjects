let mainText = document.querySelector("h1");
let mainBody = document.querySelector("body");
let mainBtn = document.querySelector(".btn");

function changeColor() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(Math.floor(Math.random() * 256));
    }

    // Set the text color of mainText
    mainText.innerText = `Background color :- rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    mainText.style.color = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;

    // Set the text color of mainBody
    mainBody.style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    mainBtn.style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}

// Call the function to change the color
changeColor();
