import { loadLevel } from "./loaders.js"
import Timer from "./Timer.js";
import {loadBackgroundSprites } from "./sprites.js";
import Compositor from "./Compositor.js";
import { createBackgroundLayer, createSpriteLayer } from "./layers.js";
import entity from "./entity.js";
import { createMauro } from "./entities.js";
import Keyboard from "./keyboardState.js";


//pega o fundo de um json e desenha no canva
function drawBackground(background, context, sprites) {

    //percorrendo os intervalos pra preencher o fundo
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        // 0, coluna, 0, linha passa pelo json

        //desenhando o fundo
        for (let x = x1; x < x2; x++) {      //percorre as largura 
            for (let y = y1; y < y2; y++) {   //percorre a altura
                sprites.drawTile(background.tile, context, x, y)
            }
        }

    });

}

const canvas = document.getElementById('screen'); //pegando o canva no html
const context = canvas.getContext('2d'); //criando contexto para que possa ser desenho

Promise.all([ //carrega as tres coisas em pararelo
    createMauro(),
    loadBackgroundSprites(),
    loadLevel('1-1')])

    .then(([mauro, backgroundSprites, level]) => { //roda quando termina de carregar
        const comp = new Compositor()
        const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites)//criando um background layer
        comp.layers.push(backgroundLayer); //inserindo a layer no array de camadas(camada 1)


        const gravity = 2000
        mauro.pos.set(64,180)
        mauro.vel.set(200,-600)

        const SPACE = 32
        const input = new Keyboard()
        input.addMapping(SPACE,keyState =>{
            if (keyState){
                mauro.jump.start()
            } else{
                mauro.jump.cancel()
            }
        })
        input.listenTo(window)
        console.log
        
        const spriteLayer = createSpriteLayer(mauro) //criando a layer do mauro
        comp.layers.push(spriteLayer) //inserindo a layer no array (camada 2)

        const timer = new Timer(1/60) 

        timer.update = function update(deltaTime) { //loop de animacao

           
            mauro.update(deltaTime) //move o mauro
            comp.draw(context); //desenha as camadas
            mauro.vel.y += gravity * deltaTime
            //requestAnimationFrame(update);
        }
        timer.start()
    })






// é bem divertido brincar com isso
// context.drawImage(image,
//   0, 0, // sourceX, sourceY onde comeca o recorte do tile
//   16,16, // larguraS, alturaS tamanho do recorte
//   32,32, // larguraD, alturaD onde desenhar no canva
//   16,16) // dLargura, dAltura: tamanho no canvas



