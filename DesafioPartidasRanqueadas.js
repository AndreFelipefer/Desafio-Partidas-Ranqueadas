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
