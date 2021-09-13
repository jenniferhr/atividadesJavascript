// 11) Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
// Exemplos:
// receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
// receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

function receberPrimeiroEUltimoElemento(arr) {
	listaPrimeiroEUltimo = [];
	listaPrimeiroEUltimo.unshift(arr.shift());
	listaPrimeiroEUltimo.push(arr.pop());
	return listaPrimeiroEUltimo;
}

// 12) Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
// apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
// mesma.
// Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias
// de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas
// situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
// de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade
// especificada no segundo parâmetro.
// Exemplos:
// removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
// removerPropriedade({
//                 id: 20,
//                 nome: "caneta",
//                 descricao: "Não preenchido"
//             }, "descricao") // retornará {id: 20, nome: "caneta"}

// 💡 A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
// removerPropriedade, você poderá usar a função Object.is(), por exemplo:
// Object.is(removerPropriedade(objeto, "descricao"), objeto)
// Retornará false se o objeto não for o mesmo.

function removerPropriedade(obj, prop) {
	delete obj[prop];
	console.log(obj);
}

// 13) Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.
// Exemplos:
// filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
// filtrarNumeros(["a", "c"]) // retornará []

function filtrarNumeros(arr) {
	let arrayDeNumeros = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			arrayDeNumeros.push(arr[i]);
		}
	}
	return arrayDeNumeros;
}

// 14) Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:
// Exemplos:
// objetoParaArray({
//             nome: "Maria",
//             profissao: "Desenvolvedora de software"
//             }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
// objetoParaArray({
//             codigo: 11111,
//             preco: 12000
//             }) // irá retornar [["codigo", 11111], ["preco", 12000]]

function objetoParaArray(obj) {
	let arraysDeObjeto = Object.entries(obj);
	return arraysDeObjeto;
}

// 15) Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.
// 💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por
// 2 é zero.
// Exemplos:
// receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
// receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]

function receberSomenteOsParesDeIndicesPares (arr) {
	numerosParesDeIndicesPares = [];
	for (let i = 0; i < arr.length -1; i+= 2) {
		if (arr[i] % 2 === 0) {
			numerosParesDeIndicesPares.push(arr[i]);
		}
	}
	return numerosParesDeIndicesPares;
}

// 16) A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é
// bissexto ou não.
// Exemplos:
// checarAnoBissexto(2020) // retornará true
// checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400

function checarAnoBissexto(ano) {
	if (ano % 4 === 0 && !(ano % 100 === 0)) {
		return true;
	} else if (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0) {
		return true;
	} else {
		return false;
	}
}

// 17) Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
// Exemplos:
// somarNumeros([10, 10, 10]) // retornará 30
// somarNumeros([15, 15, 15, 15]) // retornará 60

function somarNumeros(arr) {
	let somaDosNumeros = 0;
	for (let i = 0; i < arr.length; i++) {
		let valorAtual = arr[i];
		somaDosNumeros += valorAtual;
	}
	return somaDosNumeros;
}

// 18) Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.
// Exemplos:
// despesasTotais([
//         {nome: "Jornal online", categoria: "Informação", preco: 89.99},
//         {nome: "Cinema", categoria: "Entretenimento", preco: 150}
//         ]) // retornará 239.99
// despesasTotais([
//         {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
//         {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
//         ]) // retornará 34599.89

function despesasTotais(arrDeObjetos) {
	//console.log(arrDeObjetos[1]["preco"]);
	let totalDasDespesas = 0;
	for (var i = 0; i < arrDeObjetos.length; i++) {
		valorAtualDasDespesas = arrDeObjetos[i]["preco"];
		totalDasDespesas += valorAtualDasDespesas;
	}
	return totalDasDespesas;
}

// 19) Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretendese adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
// de números e retorne a média simples desses números.
// 💡 A média simples é o resultado da soma de todos os números dividido pela quantidade de números.
// Exemplos:
// calcularMedia([0, 10]) // retornará 5
// calcularMedia([1, 2, 3, 4, 5]) // retornará 3

function calcularMedia(arr) {
	let somaDeNumeros = 0;
	for (var i = 0; i < arr.length; i++) {
		numeroAtual = arr[i];
		somaDeNumeros += numeroAtual;
	}
	return somaDeNumeros/arr.length;
}

// 20) Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário.
// 📕 Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
// Exemplos:
// areaDoTriangulo(10, 15) // retornará "75,00"
// areaDoTriangulo(7, 9) // retornará "31,50"
// areaDoTriangulo(9.25, 13.1) // retornará "60.59"

function areaDoTriangulo(base, altura) {
	let area = (base*altura)/2;
	return area.toFixed(2);
}