
# Desafio: Calculadora de Partidas Ranqueadas

Este projeto foi desenvolvido como parte de um desafio da DIO para praticar o uso de variáveis, operadores, laços de repetição, estruturas de decisão e funções em JavaScript.

## 📋 Objetivo

A calculadora de partidas ranqueadas recebe a quantidade de vitórias e derrotas de um jogador e calcula o saldo de partidas com base na fórmula:

Saldo = Vitórias - Derrotas



Com base no saldo de vitórias, o jogador é classificado em um dos seguintes níveis:

- **Ferro**: Menos de 10 vitórias
- **Bronze**: Entre 11 e 20 vitórias
- **Prata**: Entre 21 e 50 vitórias
- **Ouro**: Entre 51 e 80 vitórias
- **Diamante**: Entre 81 e 90 vitórias
- **Lendário**: Entre 91 e 100 vitórias
- **Imortal**: 101 ou mais vitórias

## 🚀 Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada para a lógica do projeto.
- **Git/GitHub**: Controle de versão e repositório remoto.

## 📦 Como Utilizar

1. Clone este repositório para sua máquina local:

```bash
git clone git@github.com:AndreFelipefer/Desafio-Partidas-Ranqueadas.git
```

Navegue até o diretório do projeto:
```bash
cd Desafio-Partidas-Ranqueadas
```

Abra o arquivo DesafioPartidasRanqueadas.js em seu editor de código de preferência e execute o código utilizando o Node.js ou outro ambiente de execução JavaScript.


Modifique os valores de vitórias e derrotas diretamente no código para calcular o saldo e o nível do jogador.

🔧 Exemplo de Uso
Aqui está um exemplo de como o código funciona:

```javascript
function statistics(wins, losses) {
    let winLossBalance = wins - losses;
    return winLossBalance;
}

let balance = statistics(60, 14);
let level = '';

if (wins < 10) {
    level = 'Ferro';
} else if (wins >= 11 && wins <= 20) {
    level = 'Bronze';
} else if (wins >= 21 && wins <= 50) {
    level = 'Prata';
} else if (wins >= 51 && wins <= 80) {
    level = 'Ouro';
} else if (wins >= 81 && wins <= 90) {
    level = 'Diamante';
} else if (wins >= 91 && wins <= 100) {
    level = 'Lendario';
} else if (wins >= 101) {
    level = 'Imortal';
}

console.log(`The hero has a balance of ${balance} and is at the ${level} level.`);

```

🧑‍💻 Autor
Desenvolvido por André Felipe Ferreira.
