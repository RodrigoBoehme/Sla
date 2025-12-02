document.addEventListener("DOMContentLoaded",()=>{// Essa linha previne o Javascript rodar antes da pagina carregar completamente, caso o <Link> no html não use/funcione o defer
    const btn_click=document.getElementById("botao-click");
    const paragrafo=document.getElementById("numbas");

    let contador=0;

    btn_click.addEventListener("click",()=>{
        contador++;
        paragrafo.textContent=`Voce clicou ${contador} ${contador > 1 ? "vezes":"vez"}.`;
    });

});