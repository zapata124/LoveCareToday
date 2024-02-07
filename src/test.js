import fs from 'fs'

const code = fs.readFileSync('./test.tx', 'utf8');
const codeArray = code.split(/\r?\n/)

const message = fs.readFileSync('./code.tx', 'utf8');
const messageArr = message.split(/\r?\n/);

const deCode = (code, message) => {
    const codeMessage = new Map();
    code.forEach(code => {
        const splitCode = code.split(' ');
        codeMessage.set(splitCode[0], splitCode[1])
    });
    console.log(codeMessage)
    let decodedMessage = '';

    message.forEach(mes => {
        const lastValue = mes[mes.length - 1];
        
        if (decodedMessage === '') {
           decodedMessage = decodedMessage.concat(codeMessage.get(lastValue))
        } else {
           decodedMessage = decodedMessage.concat(' ', codeMessage.get(lastValue))
        }

    })
    return decodedMessage.replace(/^"(.*)"$/, '$1')
}

console.log(deCode(codeArray, messageArr))


