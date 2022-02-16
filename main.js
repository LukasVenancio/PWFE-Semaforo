'use strict'

const semaforo = document.getElementById('semaforo')
const verde = document.getElementById('verde')
const amarelo = document.getElementById('amarelo')
const vermelho = document.getElementById('vermelho')
const automatico = document.getElementById('automatico')
let idAutomatico = null

// Funções para determinar em qual estado esta o semáforo
const semaforoDesligado = () =>{
    return semaforo.src.includes('desligado')
}

const semaforoVerde = () =>{
    return semaforo.src.includes('verde')
}

const semaforoAmarelo = () =>{
    return semaforo.src.includes('amarelo')
}

const semaforoVermelho = () =>{
    return semaforo.src.includes('vermelho')
}

//Funções para ativar os botões
const ligarVerde = () =>{
    if(!semaforoDesligado())
        semaforo.src = './img/verde.png'
}

const ligarAmarelo = () =>{
    if(!semaforoDesligado())
        semaforo.src = './img/amarelo.png'
}

const ligarVermelho = () =>{
    if(!semaforoDesligado())
        semaforo.src = './img/vermelho.png'
}

const desligar = () =>{
    if(!semaforoDesligado()){
        semaforo.src = './img/desligado.png'
        automatico.disabled = true
        verde.disabled = true
        amarelo.disabled = true
        vermelho.disabled = true
    }else{
        semaforo.src = './img/verde.png'
        automatico.disabled = false
        verde.disabled = false
        amarelo.disabled = false
        vermelho.disabled = false
    }
}

const alternarCores = () => {
    if(semaforoVerde())
        ligarAmarelo()
    else if(semaforoAmarelo())
         ligarVermelho()     
    else
        ligarVerde()     
}

const ligarAutomatico = () =>{
    if(idAutomatico == null){
        idAutomatico = setInterval(alternarCores, 1000)
        automatico.textContent = 'Parar'
        verde.disabled = true
        amarelo.disabled = true
        vermelho.disabled = true

    }else{
        clearInterval(idAutomatico)
        automatico.textContent = 'Automático'
        idAutomatico = null
        verde.disabled = false
        amarelo.disabled = false
        vermelho.disabled = false
    }
    
}

verde.addEventListener('click', ligarVerde)
amarelo.addEventListener('click', ligarAmarelo)
vermelho.addEventListener('click', ligarVermelho)
semaforo.addEventListener('dblclick', desligar)
automatico.addEventListener('click', ligarAutomatico)
