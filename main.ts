const n: number= 4;
const pilaInicio=1;
const PilaDestino=2;
const pilaAux=3;

Hanoi(n, pilaInicio, PilaDestino, pilaAux);

function Hanoi(n: number, PilaInicio: number, PilaDestino: number, PilaAux: number){

    if(n===1){
        console.log("Disco: " + n + " se mueve desde Pila: " + PilaInicio + " --> Pila: " + PilaDestino)
    }else{
        Hanoi(n-1, PilaInicio, PilaAux, PilaDestino);
        console.log("Disco: " + n + " se mueve desde Pila: " + PilaInicio + " --> " + PilaDestino)

        Hanoi(n-1, PilaAux, PilaDestino, PilaInicio);
    }
}
