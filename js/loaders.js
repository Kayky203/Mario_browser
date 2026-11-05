
export default function loadImage(url){ // funcao de carregamento de imagem
    return new Promise(resolve =>{ // devolve uma Promise que resolve quando a imagem carregar
        const image = new Image();
        image.addEventListener('load', () =>{ //executa a funcao quando a imagem terminar de carregar
            resolve(image)
        })
        image.src = url //atribui a imagem carregada
    })
}

export function loadLevel(name){
    return fetch(`/levels/${name}.json`) //busca o level baseado na resposta da main
    .then(r => r.json());
}