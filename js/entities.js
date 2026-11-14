import Entity from "./entity.js"
import { loadMauroSprites } from "./sprites.js";


export function createMauro() {
   return loadMauroSprites()
        .then(sprite => {


            const mauro = new Entity()
         

            //como o mauro se desenha precisa do mauroSprite que so existe depois do carregamento
            mauro.draw = function drawMauro(context) {
                sprite.draw('idle', context, this.pos.x, this.pos.y)  //nomeSprite, canva posicao x, posicao y)
            }

            mauro.update = function updateMauro(deltaTime) {
                this.pos.x += this.vel.x * deltaTime
                this.pos.y += this.vel.y * deltaTime
            }
            return mauro
        })
    }