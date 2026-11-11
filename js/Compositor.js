
//organiza as layers
export default class Compositor{ //compositor: lista de camadas - guarda uma lista de funcoes e chama em ordem\
        constructor(){ 
            this.layers = [] //array de layers

        }
        draw(context){ //percorre e desenha as layers guarda no array
            this.layers.forEach(layer =>{
                layer(context)
                
            
            })
        }
    }