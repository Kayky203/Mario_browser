// armazena posicao e velocidade de entidadee
export class Vec2 {
    constructor(x, y) {   //roda uma vez quando faz new Vec2(x, y)
        this.x = x;       //guarda o x dentro do objeto
        this.y = y;       //guarda o y dentro do objeto
    }

    // seta os valores em uma entidade existente
    set(x, y) {
        this.x = x
        this.y = y
    }
}