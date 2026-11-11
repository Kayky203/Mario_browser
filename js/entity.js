import { Vec2 } from "./math.js"


//base para qualquer coisa que se mova no jogo
export default class Entity{
    constructor(){
        this.pos = new Vec2(0,0) //posicao
        this.vel = new Vec2(0,0) //velocidade
    }
}