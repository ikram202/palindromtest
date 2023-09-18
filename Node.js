function Palindrom (mot){
    mot=mot.toLowerCase();
    let motreverse=mot.split('').reverse().join('');
    return mot === motreverse;
}
console.log(Palindrom('HELLO WORLD'));
console.log(Palindrom('MAMA'));
console.log(Palindrom('TIHIHIT'));
console.log(Palindrom('MANAM'));