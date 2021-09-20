// 21) Criar uma função que receba um array de números e retorne o menor número desse array.
// Exemplos:
// menorNumero([10, 5, 35, 65]) // retornará 5
// menorNumero([5, -15, 50, 3]) // retornará -15

function menorNumero(arr) {
	return Math.min(...arr);
}


// 22) Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado
// um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
// Exemplos:
// funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
// funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
// funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
function funcaoDaSorte(num) {
	let numeroAleatorio = Math.round(Math.random()*10)+1;
	if (num === numeroAleatorio) {
		return `Parabéns! O número sorteado foi o ${numeroAleatorio}`;
	} else {
		return `Que pena! O número sorteado foi o ${numeroAleatorio}`
	}

}


// 23) Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
// 📕 Considere que todas as palavras só são separadas por um espaço.
// Exemplos:
// contarPalavras("Sou uma frase") // retornará 3
// contarPalavras("Me divirto aprendendo a programar") // retornará 5

function contarPalavras(frase) {
	let palavras = frase.split(" ");
	return palavras.length;
}

// 24) Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.
// Exemplos:
// contarCaractere("r", "A sorte favorece os audazes") // retornará 2
// contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1

function contarCaractere(caractere, str) {
	let caractereNaString = [];
	let frase = str;
	for (let i = 0; i < frase.length; i++) {
		if (frase[i] === caractere) {
			caractereNaString.push(frase[i]);
		}
	}
	return caractereNaString.length;
}

// 25) A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
// strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
// Exemplos:
// buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
// buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]) // retornará ["javascript", "java"]

function buscarPalavrasSemelhantes(palavra, arrayDeStrings) {
	let palavrasComAString = [];

	for(let item of arrayDeStrings) {
		if (item.includes(palavra)) {
			palavrasComAString.push(item);
		}
	}
	return palavrasComAString;
}

// 26) Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.
// Exemplos:
// removerVogais("Cod3r") // retornará "Cd3r"
// removerVogais("Fundamentos") // retornará "Fndmnts"

function removerVogais(frase) {
	let fraseSemConsoantes = [];
	for (let i = 0; i < frase.length; i++) {
		if (!(frase[i] === "a" || frase[i] === "e" || frase[i] === "i" || frase[i] === "o" || frase[i] === "u")) {
			fraseSemConsoantes.push(frase[i]);
		}
	}
	return fraseSemConsoantes.join("");
}

// 27) Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao
// objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a
// seguir:
// Exemplo:
// inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}

function inverter(objeto) {
	let objetoInvertido = {}

	Object.entries(objeto).forEach(parChaveValor => {
		const chave = 0;
		valor = 1;
		objetoInvertido[parChaveValor[valor]] = parChaveValor[chave];
	})
	return objetoInvertido;
}



// 28) Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
// que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
// têm a quantidade de dígitos indicada pelo segundo parâmetro.
// Exemplos:
// filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
// filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]

function filtrarPorQuantidadeDeDigitos(arrayDeNumeros, digitos) {
	return arrayDeNumeros.filter(numero => {
		const quantidadeDeDigitos = String(numero).length
		return quantidadeDeDigitos === digitos;
	})
}



// 29) Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
// Exemplos:
// segundoMaior([12, 16, 1, 5]) // retornará 12
// segundoMaior([8, 4, 5, 6]) // retornará 6

function segundoMaior(numeros) {
	const maiorNumero = Math.max(...numeros)
	numeros = numeros.filter(numero => numero != maiorNumero)
	const segundoMaior = Math.max(...numeros)
	return segundoMaior
}



// 30) Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
// Exemplo:
// receberMelhorEstudante({
// Joao: [8, 7.6, 8.9, 6], // média 7.625
// Mariana: [9, 6.6, 7.9, 8], // média 7.875
// Carla: [7, 7, 8, 9] // média 7.75
// }) // retornará { nome: "Mariana", media: 7.875 }

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length

function receberMelhorEstudante(estudantes) {
	const estudantesComMedias = Object.entries(estudantes).map(estudante => {
		const chave = 0,
		valor = 1
		return {nome: estudante[chave], media: media(estudante[valor])}
	})
	const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
	const melhorEstudante = estudantesOrdenados[0]
	return melhorEstudante
}