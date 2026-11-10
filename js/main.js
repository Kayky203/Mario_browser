import {loadLevel} from "./loaders.js"
import { loadMauroSprites, loadBackgroundSprites } from "./sprites.js";
import Compositor from "./Compositor.js";
import { createBackgroundLayer } from "./layers.js";

//pega o fundo de um json e desenha no canva
function drawBackground(background, context, sprites){

    //percorrendo os intervalos pra preencher o fundo
    background.ranges.forEach(([x1, x2, y1, y2]) => {
    // 0, coluna, 0, linha passa pelo json

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


    //compositor: lista de camadas - guarda uma lista de funcoes e chama em ordem\


   
    function createSpriteLayer(sprite,pos){ // (nomeSprite, posicao)
        return function drawSpritesLayer(context){ //canva a ser desenhado
            for(let i = 0; i <20; i++){
            sprite.draw('idle',context,pos.x + i * 16 ,pos.y)  //nomeSprite, canva posicao x, posicao y)
            }
        }
    }

   Promise.all([ //carrega as tres coisas em pararelo
    loadMauroSprites(),
    loadBackgroundSprites(),
    loadLevel('1-1')])

    .then(([mauroSprite,backgroundSprites,level]) => { //roda quando termina de carregar
        const comp = new Compositor()
        const backgroundLayer = createBackgroundLayer(level.backgrounds,backgroundSprites)//criando um background layer
        comp.layers.push(backgroundLayer); //inserindo a layer no array de camadas
        
        const pos = {
            x: 0,
            y: 0,
        };

        const spriteLayer = createSpriteLayer(mauroSprite,pos) //criando a layer do mauro
        comp.layers.push(spriteLayer) //inserindo a layer no array

        function update(){ //loop de animacao
            comp.draw(context);
           
            
            pos.x += 2
            pos.y += 2
            requestAnimationFrame(update);
        }
        update()
   } )




    

    // é bem divertido brincar com isso
   // context.drawImage(image,
    //   0, 0, // sourceX, sourceY onde comeca o recorte do tile
    //   16,16, // larguraS, alturaS tamanho do recorte
    //   32,32, // larguraD, alturaD onde desenhar no canva
    //   16,16) // dLargura, dAltura: tamanho no canvas



