//mapeamento do teclado

const PRESSED = 1 
const RELEASED = 0  

export default class keyboardState{

    constructor(){
        //O keystate anota a tecla apertada e busca no keymap a funcao o que aquela tecla deve fazer
        
        //estado atual da tecla que foi apertada 0 ou 1
        this.keyState = new Map()

        //funcao a ser chamada na tecla apertada 
        this.keyMap = new Map()
    }
    //registra uma tecla
    addMapping(keyCode,callback){ //(codigo da tecla, funcao a ser chamada),
        this.keyMap.set(keyCode, callback)
    }
    handleEvent(event){
        const {keyCode} = event; //pega o codigo da tecla

        if (!this.keyMap.has(keyCode)){  //ignora teclas desconhecidas
            return 
        }
        event.preventDefault()  //cancela comportamento do navegador

        //se a tecla for pressionada igual a 1 se solta igual a 0
        const keyState = event.type === 'keydown' ? PRESSED : RELEASED; 

        if (this.keyState.get(keyCode) === keyState) { //
            return
        }
        this.keyState.set(keyCode, keyState) //anota o novo estado
        console.log(this.keyState)
        this.keyMap.get(keyCode)(keyState) //chama a funcao
        
    }
    //atribui as classes nas teclas
    listenTo(window) {
        ['keydown','keyup'].forEach(eventName =>{ //evita repeticao
        window.addEventListener(eventName,event =>{
            this.handleEvent(event);
        })
    })
    }
}