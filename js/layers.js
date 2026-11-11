
//desenha o fundo
function drawBackground(background, context, sprites){ //fundo, canva e sprite a ser desenhado

    //percorrendo os intervalos pra preencher o fundo
    background.ranges.forEach(([x1, x2, y1, y2]) => {
    // (0, coluna, 0, linha) passada pelo json

          //desenhando o fundo
    for (let x = x1 ; x < x2; x++){      //percorre as largura 
        for (let y = y1; y < y2; y++){   //percorre a altura
            sprites.drawTile(background.tile,context, x, y )
        }
    }
    
    }); 

}  

 //desenha o fundo somente uma vez
    //a cada frame redesenha um buffer pronto economizando processamento
export function createBackgroundLayer(backgrounds,sprites){
        const buffer = document.createElement('canvas') //canva invisivel
        buffer.width = 256; //tamanho do canva
        buffer.height = 240; //altura do canva

        backgrounds.forEach(background => { 
            drawBackground(background, buffer.getContext('2d'), sprites) //percorre o ceu e o chao e desenha dentro do buffer
    })
    return function drawBackgroundLayer(context){
         context.drawImage(buffer,0,0)
    };
}
//cria uma layer de entidade
export function createSpriteLayer(entity) { //chama o draw da entidade
    return function drawSpritesLayer(context) { //canva a ser desenhado
        entity.draw(context)
        
    }
} 
