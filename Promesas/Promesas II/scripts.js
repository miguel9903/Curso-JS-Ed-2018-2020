// Promesas II
(function () {
    var retirarDinero = function (monto) {
        var dineroActual = 1000;
        return new Promise(function (resolve, reject) {
            if (monto > dineroActual) {
                reject('No hay suficientes fondos');
            }
            else {
                dineroActual -= monto;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(4500)
        .then(function (dineroAct) { return console.log("Cantidad de dinero restante: " + dineroAct); })["catch"](function (error) { return console.log(error); });
})();
