// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

function clickMe() {
    console.log("Has hecho click!");
}

document.getElementById("btnToClick").onclick = clickMe;

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.


const inputOne$$ = document.querySelector(".focus");
function focusMe() {

    
    const text$$ = inputOne$$.value;
    console.log(text$$);
}
inputOne$$.addEventListener("focus", focusMe);


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input

const inputValue$$ = document.querySelector(".value");

function inputValue(){

    const textTwo$$ = inputValue$$.value;
    console.log(textTwo$$);

}

inputValue$$.addEventListener("input", inputValue);