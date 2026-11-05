 export default class SpriteSheet{ // exportando a classe

    // o constructor vai rodar somente uma vez pra preparar o objeto do tile
    constructor(image,width,height){
        this.image = image      //armazenando o valor do tile inteiro
        this.width = width      //armazenando a largura do sprite (16x)
        this.height = height    //armazenando a altura do sprite (16x)
        this.tiles = new Map()  //mapeando os nomes dos tiles recortados
    }
    define(name,x,y){ //nome e posicao do tile na grade

        //criando um canva vazio para depois ser preenchido
        const buffer = document.createElement('canvas')
        buffer.width = this.width // 16 largura
        buffer.height = this.height // 16 altura
        buffer.getContext('2d').drawImage(this.image, 
            x * this.width, //multiplicando a posicao por 16 assim ele cobre uma area de 16 pixeis
            y * this.height, // e faz o recorte da maneira correta
        this.width, // quanto recortar na horizontal
        this.height,// vertical
        0,0,        //onde colocar no buffer no caso canto superior esquerdo
        this.width, //largura da colagem
        this.height //altura da colagem
    )
        this.tiles.set(name,buffer) //guarda o nome do tile recortado no map
    }
    draw (name,context, x,y){ //desenha o o tile com a largura e altura correta
        const buffer = this.tiles.get(name) //busca o tile guardado pelo nome
        context.drawImage(buffer,x,y); // copia o tile para o canva na tela
    }

    drawTile(name,context,x,y){
        this.draw(name,context, x * this.width, y * this.height)
        //desenha o tile usando a posicao na grade coluna e linha 
    }
}
