const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arrSymbols = [];

    function decodeRecursion(expr) {
        while (expr.length !== 0) {
            arrSymbols.push(expr.slice(0, 10));
            let sliceExpr = expr.slice(10);
            return decodeRecursion(sliceExpr);
        }
    }

    decodeRecursion(expr);

    return arrSymbols.map((item) => {
        return item
            .replace(/10/g, '.')
            .replace(/11/g, '-')
            .replace(/0/g, '');
    })
        .map((item) => {
            return (Object.keys(MORSE_TABLE).includes(item)) ? MORSE_TABLE[item] : ' ';
        })
        .join('');

}

module.exports = {
    decode
}