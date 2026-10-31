import SpriteSheet from "./sprite.js"    //import da funcao de sprite
import loadImage from "./loaders.js"

const canvas = document.getElementById('screen'); //pegando o canva no html
const context = canvas.getContext('2d'); //criando contexto para que possa ser desenho

context.fillRect(0,0,50,50); //formato do desenho (x, y, largura, altura)

loadImage('/img/tiles.png').then(image =>{ //enviando a imagem para promise
    const sprites = new SpriteSheet(image,16,16)

    //definindo as sprites
    sprites.define('ground',0,0) // nome do sprite posicao x no tile e altura y no tile
    sprites.define("sky",3,23)
    sprites.draw('sky',context,45,62) //sprite principal a ser desenhado

    // é bem divertido brincar com isso
   // context.drawImage(image,
    //   0, 0, // sourceX, sourceY onde comeca o recorte do tile
    //   16,16, // larguraS, alturaS tamanho do recorte
    //   32,32, // larguraD, alturaD onde desenhar no canva
    //   16,16) // dLargura, dAltura: tamanho no canvas
})


