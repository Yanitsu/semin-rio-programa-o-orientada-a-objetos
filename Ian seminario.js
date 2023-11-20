// Definição da classe Pessoa
class Pessoa {
    // Construtor da classe Pessoa
    constructor(nome, idade) {
        // Atributos da classe Pessoa
        this.nome = nome;
        this.idade = idade;
        this._numeromatricula = 0;
    }

    // Método para definir o número de matrícula
    setarNumeromatricula(novonumeromatricula) {
        // Verifica se o novo número de matrícula é do tipo number
        if (typeof novonumeromatricula === "number") {
            this.numeromatricula = novonumeromatricula;
        }
    }

    // Método para obter o número de matrícula
    get numeromatricula() {
        return this._numeromatricula;
    }

    // Método para definir o número de matrícula
    set numeromatricula(x) {
        // Verifica se o número passado é do tipo number
        if (typeof x === "number") {
            this._numeromatricula = x;
        }
    }
}

// Definição da classe Aluno, que herda de Pessoa
class Aluno extends Pessoa {
    // Construtor da classe Aluno
    constructor(nome, idade, matricula) {
        // Chama o construtor da classe pai (Pessoa)
        super(nome, idade);
        // Atributos específicos da classe Aluno
        this.matricula = matricula;
        this.turma = null; // Adicionando uma propriedade turma para armazenar a turma do aluno
    }

    // Método para mostrar informações do aluno
    mostrarInfo() {
        console.log(`Aluno - Nome: ${this.nome}, Idade: ${this.idade}, Matrícula: ${this.matricula}, Turma: ${this.turma ? this.turma.materia : "Não está em nenhuma turma"}`);
    }

    // Método para emitir aviso ao aluno
    aviso () {
        alert (`${this.nome} Voce entrou na seleção de cursos selecione o curso desejado `)
    }
    
    // Método para emitir aviso chamando o aviso da classe pai
    aviso2 (){
        super.aviso ();
    }
}

// Definição da classe Professor, que herda de Pessoa
class Professor extends Pessoa {
    // Construtor da classe Professor
    constructor(nome, idade, disciplina) {
        // Chama o construtor da classe pai (Pessoa)
        super(nome, idade);
        // Atributos específicos da classe Professor
        this.disciplina = disciplina;
    }

    // Método para mostrar informações do professor
    mostrarInfo() {
        console.log(`Professor - Nome: ${this.nome}, Idade: ${this.idade}, Disciplina: ${this.disciplina}`);
    }
}

// Definição da classe Turma
class Turma {
    // Construtor da classe Turma
    constructor(professor, materia, alunos) {
        // Atributos da classe Turma
        this.professor = professor;
        this.materia = materia;
        this.alunos = alunos;

        // Configurando a propriedade turma para cada aluno na turma
        for (let aluno of alunos) {
            aluno.turma = this;
        }
    }

    // Método para mostrar informações da turma
    mostrarInfo() {
        console.log(`Turma de ${this.materia} ministrada por ${this.professor.nome}`);
        console.log("Alunos na turma:");
        for (let aluno of this.alunos) {
            console.log(`- ${aluno.nome}`);
        }
    }
}

// Criação de instâncias das classes Aluno, Professor e Turma
let aluno1 = new Aluno("João", 18, "12345");
let aluno2 = new Aluno("Maria", 20, "67890");
let aluno3 = new Aluno("Pedro", 19, "54321");

let professor1 = new Professor("Dr. Silva", 35, "Matemática");
let professor2 = new Professor("Dra. Souza", 40, "História");
let professor3 = new Professor("Dr. Oliveira", 38, "Ciências");

let turma1 = new Turma(professor1, "Matemática", [aluno1, aluno2]);
let turma2 = new Turma(professor2, "História", [aluno2, aluno3]);
let turma3 = new Turma(professor3, "Ciências", [aluno1, aluno3]);

// Adicionando alunos às turmas
aluno1.mostrarInfo();
aluno2.mostrarInfo();
aluno3.mostrarInfo();

// Adicionando professores às turmas
professor1.mostrarInfo();
professor2.mostrarInfo();
professor3.mostrarInfo();

// Adicionando informações sobre as turmas
turma1.mostrarInfo();
turma2.mostrarInfo();
turma3.mostrarInfo();

// Chamadas de métodos de aviso
p1.aviso();
p1.aviso();

// Função de divisão com bloco try-catch-finally
function divisao(a, b) {
    try {
        // Verifica se o denominador é zero antes de realizar a divisão
        if (b == 0) {
            throw new Error ("Nao e permitido dividir por zero.");
        }
        // Realiza a divisão e retorna o resultado
        const resultado = a / b;
        return resultado;
    } 
    catch (erro) {
        // Captura e trata a exceção, exibindo a mensagem de erro
        console.log("ocorreu um errro:" + erro.message);
    }
    finally {
        // Bloco que é sempre executado, independentemente de exceções
        console.log ("Bloco finally sempre e executado, independentemente");
    }
}

// Chamadas da função de divisão
console.log(divisao(10, 2));
console.log(divisao(0, 0));