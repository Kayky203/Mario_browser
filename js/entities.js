import Entity from "./entity.js"
import Jump from "./traits/Jump.js";
import Velocity from "./traits/Velocity.js";
import { loadMauroSprites } from "./sprites.js";


export function createMauro() {
   return loadMauroSprites()
        .then(sprite => {
            const mauro = new Entity()
            
            //tracos
            mauro.addTrait(new Velocity())
            mauro.addTrait(new Jump())

            //como o mauro se desenha precisa do mauroSprite que so existe depois do carregamento
            mauro.draw = function drawMauro(context) {
                sprite.draw('idle', context, this.pos.x, this.pos.y)  //nomeSprite, canva posicao x, posicao y)
            }

            
            return mauro
        })
    }