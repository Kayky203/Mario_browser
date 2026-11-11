import { loadLevel } from "./loaders.js"
import {loadBackgroundSprites } from "./sprites.js";
import Compositor from "./Compositor.js";
import { createBackgroundLayer, createSpriteLayer } from "./layers.js";
import entity from "./entity.js";
import { createMauro } from "./entities.js";

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

        const gravity = 0.5
        
        const spriteLayer = createSpriteLayer(mauro) //criando a layer do mauro
        comp.layers.push(spriteLayer) //inserindo a layer no array (camada 2)

        function update() { //loop de animacao
            comp.draw(context); //desenha as camadas
            mauro.update() //move o mauro
            mauro.vel.y += gravity
            requestAnimationFrame(update);
        }
        update()
    })






// é bem divertido brincar com isso
// context.drawImage(image,
//   0, 0, // sourceX, sourceY onde comeca o recorte do tile
//   16,16, // larguraS, alturaS tamanho do recorte
//   32,32, // larguraD, alturaD onde desenhar no canva
//   16,16) // dLargura, dAltura: tamanho no canvas



