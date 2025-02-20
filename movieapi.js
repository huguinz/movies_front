'use strict'

async function pesquisarFilme(filme) {
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${filme}`
    const response = await fetch(url)
    const data = await response.json()
    const dataDesc = data.description
    const imgEncontrada = []

    dataDesc.forEach(function(item){
        imgEncontrada.push(item['#IMG_POSTER'])
    })
    return imgEncontrada
}

function criarFilmes(link) {
    const info = document.getElementById('info')
    const novoFilme = document.createElement('img')
    novoFilme.src = link
    info.appendChild(novoFilme)
}

async function preencherFilmes() {
    const filme = document.getElementById('filme').value
    const informações = await pesquisarFilme(filme)
    const info = document.getElementById('info')

    info.replaceChildren('')
    informações.forEach(criarFilmes)
}

document.getElementById('pesquisar').addEventListener('click', preencherFilmes)