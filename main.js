class Medicamento{      /* Os medicamentos são um conjunto de objetos, então a melhor forma da gente manusear é criar uma classe */
    constructor(){
        this.id = 1;                /* Aqui deixamos os parâmetros vazios, porque vamos coletar as informações vindas dos inputs */
    }

    Cadastrar(){
        this.lerDados()
    }

    lerDados(){
        console.log('oi');
    }
}

var medicamento = new Medicamento();
