import loadImage, {loadLevel} from "./loaders.js"
import SpriteSheet from "./spriteSheet.js"


export function loadMauroSprites(){
    
   return loadImage('/img/sprites.png').then(image =>{ //enviando a imagem para promise
    const sprites = new SpriteSheet(image,16,16)

    //definindo as sprites
    sprites.define('idle',0,88,16,16) // 14 de largura, 16 de altura, a partir do pixel 0, 88

    return sprites; //retornando a instancia de sprites
   })
}


export function loadBackgroundSprites(){
    
   return loadImage('/img/tiles.png').then(image =>{ //enviando a imagem para promise
    const sprites = new SpriteSheet(image,16,16)

    //definindo as sprites
    sprites.defineTile('ground',0,0) // nome do sprite posicao x no tile e altura y no tile
    sprites.defineTile("sky",3,23)

    return sprites; //retornando a instancia de sprites
   })
}