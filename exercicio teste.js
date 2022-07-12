function teste() {
    var a = "3";
    var b = "8";

    //criando uma nova variavel para que o valor de a seja passado para ela
    var c = a;
    //colocando a variavel a como igual a b
    a = b;
    //colocando b como o valor de c que no caso contem o antigo valor de a
    b = c;

    console.log("a e " + a);
    console.log("b e " + b);
}