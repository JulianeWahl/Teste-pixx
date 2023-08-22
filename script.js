function sim(){
    alert("Você aceitou, agora esta me devendo 100 reais!!")
}       

function naum(){
    var btn = document.getElementById("btn");
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("Sai pra lá");
}

function geraPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}