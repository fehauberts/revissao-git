// Criar algoritimo que verifica a idade e valide a necessidade de uma pessoa de votar:
// Não possui idade
// Obrigatório
// Facultativo

// Declarações

const nome = "Fernanda";
let idade = 17;

if(idade < 16){
    console.log(nome + " não pode votar")
}else if(idade >= 16 && idade < 18 || idade > 65){
    console.log(nome + " pode votar, porém não é obrigatório")
}else if(idade >= 18 && idade <= 65){
    console.log(nome + "é obrigatório votar")
}

// Desenvolvimento 


// Informar o nome e a classificação de obrigatoriedade de votar