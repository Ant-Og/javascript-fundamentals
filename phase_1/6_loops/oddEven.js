const oddEven = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i + ' is positive');
        } else {
            console.log(i + ' is odd');
        }
    }
}

module.exports = oddEven