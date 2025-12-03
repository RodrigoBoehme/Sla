document.addEventListener("DOMContentLoaded", () => {// Essa linha previne o Javascript rodar antes da pagina carregar completamente, caso o <Link> no html não use/funcione o defer
    const btn_click = document.getElementById("botao-click");
    const btnP = document.getElementById("btn-novo-paragrafo")
    const body = document.querySelector("body");
    const btnR = document.getElementById("btn-remove");
    const btnTema = document.getElementById("tema");
    const paragrafo = document.getElementById("numbas");

    let contador = 0;

    btn_click.addEventListener("click", () => {
        if (contador < 2) {
            contador++
        } else {
            contador = contador * contador;
        }
        paragrafo.textContent = `Voce clicou ${contador} ${contador > 1 ? "vezes" : "vez"}.`;
    });
    btnP.addEventListener("click", () => {
        const p = document.createElement("p");
        p.textContent = `Novo botão gerado pelo paragrafo`;
        body.appendChild(p);
    })
    btnR.addEventListener("click", () => {
        body.lastChild.remove()
    })
    btnTema.addEventListener("click", () => {
        let r=Math.floor(Math.random()*255);
        let g=Math.floor(Math.random()*255);
        let b=Math.floor(Math.random()*255);

        if (contador===16){body.style.backgroundColor=`rgb(${r},${g},${b})`;}
        body.classList.toggle("dark");
        body.classList.toggle("light");
    })

});