import { Trait } from "../entity.js"


export default class Velocity extends Trait{ //herdando a classe Trait
    constructor(){
        super('velocity')
    }
    update(entity,deltaTime){
        
            entity.pos.x += entity.vel.x * deltaTime //anda na horizontal
            entity.pos.y += entity.vel.y * deltaTime //anda na vertical
    }
}