import { Vec2 } from "./math.js"

//traços das entidades

export class Trait { //traco
    constructor(name){
        this.NAME = name  //nome da trait como 'jump' por exemplo
    }
        update(){
            console.warn('atualizar chamada no trait')
        }
}

//base para qualquer coisa que se mova no jogo
export default class Entity{
    constructor(){
        this.pos = new Vec2(0,0) //posicao
        this.vel = new Vec2(0,0) //velocidade

        this.traits =[] //lista onde as traits vao ficar guardadas
    }
    addTrait(trait){
        this.traits.push(trait) //inserindo trait
        this[trait.NAME] = trait // vincula o trait a entidade
        
    }

    //chama o evento da trait
    update(deltaTime){ //roda o update de cada trait  
        this.traits.forEach(trait =>{
            trait.update(this, deltaTime)
        })
    }
}