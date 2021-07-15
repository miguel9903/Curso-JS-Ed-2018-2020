// Promesas II

(() => {
    
    const retirarDinero = (monto: number): Promise<number> => {

        let dineroActual = 1000;

        return new Promise((resolve, reject) => {
            if(monto > dineroActual) {
                reject('No hay suficientes fondos');
            } else {
                dineroActual -= monto;
                resolve(dineroActual);
            }
        });
    }

    retirarDinero(4500)
        .then(dineroAct => console.log(`Cantidad de dinero restante: ${dineroAct}`))
        .catch(error => console.log(error));

})();