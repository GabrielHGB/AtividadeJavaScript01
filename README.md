# Atividades-JS-1

Atividade introdutória de JavaScript sobre tipos de saída, declarações, sintaxe, comentários, variáveis e operadores.


## 1. Tipos de saída

**1. O que é um tipo de saída em JavaScript?**

É uma maneira de mostrar informações ou resultados da execução do código ao usuário ou desenvolvedor.

**2. Cite e explique três tipos de saída.**

- `console.log()`: mostra mensagens no console do navegador; é útil para testes e depuração.
- `alert()`: abre uma caixa de alerta no navegador com uma mensagem.
- `document.write()`: escreve conteúdo diretamente no documento HTML. É adequado aqui como exemplo didático, mas geralmente não é recomendado em aplicações modernas, pois pode substituir o conteúdo da página quando usado após o carregamento.


## 2. Declarações, sintaxe e comentários

**1. O que significa uma declaração em JavaScript?**

É uma instrução do código, como criar uma variável ou executar uma ação. Por exemplo, `let idade = 25;` declara uma variável e atribui um valor a ela.

**2. Qual a importância dos comentários?**

Comentários explicam o funcionamento do código, facilitam a leitura e a manutenção e não são executados pelo JavaScript. `//` indica comentário de uma linha e `/* ... */` permite comentários de várias linhas.

**3. Código comentado.**

```js
// Declara uma variável chamada idade e atribui o valor 25.
let idade = 25;
// Exibe o valor da variável no console.
console.log(idade);
```

**4. Correção dos erros de sintaxe.**

```js
let nome = "Ana";
console.log(nome);
```

No código original, faltavam as aspas de fechamento da string e o parêntese de fechamento da chamada `console.log()`.

## 3. Variáveis

**1. Qual a diferença entre `let`, `const` e `var`?**

- `let`: declara uma variável cujo valor pode ser alterado; tem escopo de bloco.
- `const`: declara uma variável que não pode receber uma nova atribuição; também tem escopo de bloco. Se o valor for um objeto, suas propriedades ainda podem ser modificadas.
- `var`: forma mais antiga de declarar variáveis; tem escopo de função ou global e permite redeclaração no mesmo escopo.

**2. Quando usar cada uma?**

Prefira `const` quando não precisar reatribuir a variável e `let` quando precisar alterar seu valor. Evite `var` em código novo, mas saiba reconhecê-lo em projetos antigos.

**3 e 4. Criar e exibir variáveis.**

```js
const nomeCompleto = "Gabriel Henrique Bramante Guimarães";
let minhaIdade = 21;
let cidade = "Contagem";

console.log("Nome:", nomeCompleto);
console.log("Idade:", minhaIdade);
console.log("Cidade:", cidade);
```

## 4. Operadores

**1. O que são operadores aritméticos? Dê três exemplos.**

São símbolos usados para realizar cálculos matemáticos, como `+` (soma), `-` (subtração) e `*` (multiplicação). Também usamos `/` (divisão) e `%` (resto da divisão).

**2. O que são operadores de comparação?**

Comparam valores e retornam `true` (verdadeiro) ou `false` (falso). Exemplos:

```js
5 > 3;     // true
5 < 3;     // false
5 === 5;   // true (igualdade estrita)
5 !== 3;   // true (diferença estrita)
```

O operador `===` compara valor e tipo; já `==` pode converter tipos antes da comparação. Por isso, geralmente é melhor usar `===`.

**3. Calcular as operações.**

Com `numero1 = 20` e `numero2 = 6`, o programa calcula:

| Operação | Expressão | Resultado |
| --- | --- | --- |
| Soma | `20 + 6` | 26 |
| Subtração | `20 - 6` | 14 |
| Multiplicação | `20 * 6` | 120 |
| Divisão | `20 / 6` | 3,333... |
| Resto | `20 % 6` | 2 |

**4. Comparar duas variáveis.**

```js
console.log(numero1 === numero2); // false
console.log(numero1 !== numero2); // true
```

Como 20 é diferente de 6, o programa mostra **Os números são diferentes.**

**5. Usar operadores lógicos.**

- `&&` significa **E**: todas as condições precisam ser verdadeiras.
- `||` significa **OU**: pelo menos uma condição precisa ser verdadeira.
- `!` significa **NÃO**: inverte o valor lógico.

Com `numero = 25`:

```js
numero > 10 && numero < 50; // true
numero < 5 || numero > 20;  // true
```

Na primeira expressão, 25 é maior que 10 **e** menor que 50. Na segunda, 25 não é menor que 5, mas é maior que 20; por isso o resultado também é verdadeiro.

## Arquivos do projeto

- `index.html`: página HTML que carrega o JavaScript.
- `saida.js`: código com todos os exercícios práticos.
- `README.md`: respostas teóricas e explicações.
