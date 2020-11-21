function string2Number(str){
    return Number(str);
}

function number2String(num, radix){
    const radixMap = {
        2: 'ob',
        8: '0o',
        10: '',
        16: '0x'
    };
    let sign = num < 0 ? '-' :'';
    return sign + (radix ? radixMap[radix] + Math.abs(num).toString(radix) : Math.abs(num).toString(radix));
}

console.log(string2Number('0b10'))
console.log(string2Number('0o10'))
console.log(string2Number('0x10'))

console.log(number2String(11,2))
console.log(number2String(-11,8))
console.log(number2String(-11))
console.log(number2String(11,16))