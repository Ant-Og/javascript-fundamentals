const printHello = () => {
    console.log('Hello mate');
}

const executeAfterDelay = (delayedFunction, seconds) => {
    miliseconds = seconds * 1000 
    setTimeout(delayedFunction, miliseconds)
}

module.exports = { printHello, executeAfterDelay }
