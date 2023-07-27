/* Vowel versus Consonant */
let vowels = 0;
let consonants = 0;
s = "onomonopia";

for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
        vowels++;
    } else { // Because the string consists only of lowercase letters.
        consonants++;
    }
}
let result = `\"${s}\" has ${consonants} consonants and ${vowels} vowels.`;

console.log(result);