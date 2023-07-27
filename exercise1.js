/* Only Odds */

num = [2, 4, 6, 8, 10, 11, 12] 
const oddNumbers = []

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) {
        oddNumbers.push(num[i])
    }
}

console.log(oddNumbers);