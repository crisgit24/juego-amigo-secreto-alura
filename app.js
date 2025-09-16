// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos= [];
function limpiarCampo() {
    document.querySelector('#amigo').value='';}
function agregarAmigo(){
    if(document.querySelector('#amigo').value ==''){
        alert('Por favor ingrese un nombre');
    }else{
        let nombreAmigo = document.getElementById('amigo').value;
        listaAmigos.push(nombreAmigo);
        console.log(listaAmigos);
        limpiarCampo();
        mostrarAmigos()
    }}
function mostrarAmigos(i) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for(let i = 0; i < listaAmigos.length; i++) {
        
        lista.innerHTML += "<li>" + listaAmigos[i] + "</li>";
        
    }
    
}
function nombreAleatorio(lista) {
    let indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}
function mostrarResultado(amigoSorteado) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "<li>El amigo secreto sorteado es: " + amigoSorteado + "</li>";
}
function sortearAmigo() {
    if(listaAmigos.length == 0 ) {
        alert('Por favor ingrese al menos un nombre para realizar el sorteo');

    }else {
        let amigoSorteado = nombreAleatorio(listaAmigos);
        mostrarResultado(amigoSorteado);
    }    
}
