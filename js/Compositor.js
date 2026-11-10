
//organiza as layers
export default class Compositor{
        constructor(){ 
            this.layers = [] //array de layers

        }
        draw(context){ //percorre e desenha as layers guarda no array
            this.layers.forEach(layer =>{
                layer(context)
            })
        }
    }