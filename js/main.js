function loadImage(url){ // funcao de carregamento de imagem
    return new Promise(resolve =>{ // devolve uma Promise que resolve quando a imagem carregar
        const image = new Image();
        image.addEventListener('load', () =>{ //executa a funcao quando a imagem terminar de carregar
            resolve(image)
        })
        image.src = url //atribui a imagem carregada
    })
}


class SpriteSheet{
    constructor(image,width,height){
        this.image = image
        this.width = width
        this.height = height
        this.tiles = new Map()
    }
    define(name,x,y){
        const buffer = document.createElement('canvas')
        buffer.width = this.width
        buffer.height = this.height
        buffer.getContext('2d').drawImage(this.image, 
            x * this.width,
            y * this.height,
        this.width, 
        this.height,
        0,0,
        this,width,
        this.height
    )
        this.tiles.set(name,buffer)
    }
    draw (name,context, x,y)
}

const canvas = document.getElementById('screen'); //pegando o canva no html
const context = canvas.getContext('2d'); //criando contexto para que possa ser desenho

context.fillRect(0,0,50,50); //formato do desenho (x, y, largura, altura)




loadImage('/img/tiles.png').then(image =>{ //enviando a imagem para promise
    const sprites = new SpriteSheet(image,16,16)
    sprites.define('ground',0,0)
    sprites.draw('ground',context,45,62)

    // é bem divertido brincar com isso
    context.drawImage(image,
        0, 0, // sourceX, sourceY onde comeca o recorte do tile
        16,16, // larguraS, alturaS tamanho do recorte
        32,32, // larguraD, alturaD onde desenhar no canva
        16,16) // dLargura, dAltura: tamanho no canvas
})


