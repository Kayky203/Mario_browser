import SpriteSheet from "./sprite.js"    //import da funcao de sprite
import loadImage, {loadLevel} from "./loaders.js"


//pega o fundo de um json e desenha no canva
function drawBackground(background, context, sprites){

    //percorrendo os intervalos pra preencher o fundo
    background.ranges.forEach(([x1, x2, y1, y2]) => {
    // 0, largura, 0, altura passa pelo json

          //desenhando o fundo
    for (let x = x1 ; x < x2; x++){      //percorre as largura 
        for (let y = y1; y < y2; y++){   //percorre a altura
            sprites.drawTile(background.tile,context, x, y )
        }
    }
    
    }); 

}                       
const canvas = document.getElementById('screen'); //pegando o canva no html
const context = canvas.getContext('2d'); //criando contexto para que possa ser desenho



loadImage('/img/tiles.png').then(image =>{ //enviando a imagem para promise
    const sprites = new SpriteSheet(image,16,16)

    //definindo as sprites
    sprites.define('ground',0,0) // nome do sprite posicao x no tile e altura y no tile
    sprites.define("sky",3,23)
    
    loadLevel('1-1') //chama a sprite que precisa ser carregada
    .then(level => {
        console.log("nivel 1")
        level.backgrounds.forEach(background => {

            drawBackground(background, context, sprites)
        });
    })

    

    // é bem divertido brincar com isso
   // context.drawImage(image,
    //   0, 0, // sourceX, sourceY onde comeca o recorte do tile
    //   16,16, // larguraS, alturaS tamanho do recorte
    //   32,32, // larguraD, alturaD onde desenhar no canva
    //   16,16) // dLargura, dAltura: tamanho no canvas
})


