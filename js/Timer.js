//timer: roda o loop de fixed timestep e chama o this.update a cada passo

export default class Timer {
    constructor (deltaTime = 1/60) { //tamanho do passo, 1 segundo pra 60 frames

        let accumulatedTime = 0 //tempo acumulado
        let lastTime = 0 //tempo anterior

        this.updateProxy = (time) => { //loop de animacao
            accumulatedTime += (time - lastTime) / 1000 //converte em segundos
            while(accumulatedTime > deltaTime){ //enquanto couber um passo inteiro
            this.update(deltaTime) //da um passo

            accumulatedTime -= deltaTime //desconta o passo do tempo acumulado
            }

            lastTime = time 
            this.enqueue()        } //agenda proximo frame
    }
    //coloca proxy na fila do navegador pra rodar no proximo frame
    enqueue() {
         requestAnimationFrame(this.updateProxy);

    }
    start(){
        this.enqueue()   }
}