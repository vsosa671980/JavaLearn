

//Create class Neumaticos 

class Neumaticos {
    constructor(marca,modelo,dureza,dibujo){
        this.marca = marca;
        this.modelo = modelo;
        this.dureza = dureza;
        this.dibujo = dibujo;
    }
    
}

//Create the child NeumaticospPista from Neumaticos

class NeumaticosPista extends Neumaticos{
    constructor(marca,modelo,dureza,dibujo,temperaturaMax){
        super(marca,modelo,dureza,dibujo)

        this.temperaturaMax= temperaturaMax;
    }
}

//Create the child NeumaticosRally from Neumaticos

class NeumaticosRally extends Neumaticos{
    constructor(marca,modelo,dureza,dibujo,temperaturaMax,superficie){
        super(marca,modelo,dureza,dibujo)

        this.temperaturaMax= temperaturaMax;
        this.superficie=superficie;
    }
}


//Create the child Neumaticos Karts from Neumaticos

class NeumaticosKarts extends Neumaticos{
    constructor(marca,modelo,dureza,dibujo,temperaturaMax,tamañaKart){
        super(marca,modelo,dureza,dibujo)

        this.temperaturaMax= temperaturaMax;
        this.tamañoKart = tamañaKart;
    }
}

//Create objects neumaticos from diferents tipes

const neumaticosPista = [

    new NeumaticosRally("Firestone","FX5655",50,"Liso",45,"Mojado"),
    new NeumaticosRally("Firestone","FX5655",50,"Liso",45,"Mojado"),
    new NeumaticosRally("Firestone","FX5655",50,"Liso",45,"Mojado"),
    new NeumaticosRally("Firestone","FX5655",50,"Liso",45,"Mojado"),

]

const neumaticosRally = [

    new NeumaticosRally("Firestone","FX5655",50,"Liso",45,"Mojado"),
    new NeumaticosRally("Firestone","FX5655",60,"Liso",45,"Mojado"),
    new NeumaticosRally("Firestone","FX5655",30,"Liso",45,"Mojado"),
    new NeumaticosRally("Firestone","FX5655",20,"Liso",45,"Mojado"),

]

const neumaticosKarts = [

    new NeumaticosKarts("Firestone","FX5655",50,"Liso",45,"Mojado"),
    new NeumaticosKarts("Firestone","FX5655",50,"Liso",45,"Mojado"),
    new NeumaticosKarts("Firestone","FX5655",50,"Liso",45,"Mojado"),
    new NeumaticosKarts("Firestone","FX5655",50,"Liso",45,"Mojado"),
]


for (const neumaticos of neumaticosRally ) {

    console.log(neumaticos.dureza);
    
}