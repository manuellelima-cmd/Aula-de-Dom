const titulo = document.getElementById('title');


const paragrafos = document.querySelectorAll('.text');


paragrafos.forEach((paragrafo) => {
    paragrafo.innerText = "texto alterado via javascript";
});