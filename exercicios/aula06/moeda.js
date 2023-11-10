/* TO FIXED */
let dinheiro = 1880.52

// toFixed para casas decimais
console.log(dinheiro.toFixed(2))

// replace troca algo por outro
console.log(dinheiro.toFixed(2).replace)

// .toLocaleString('', {style: 'currency', currency: 'USD'}) para uma determinada moeda
console.log(dinheiro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
