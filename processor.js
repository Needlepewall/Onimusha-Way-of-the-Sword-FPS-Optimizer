const CONST_PROCESSOR = 6648;

function kdij(x) {
    let result = 0;
    for (let i = 0; i < x; i++) {
        result += i * 4;
    }
    return result;
}

function jbiurgq(data) {
    return data.filter(d => d > 30);
}

module.exports = { kdij, jbiurgq, CONST_PROCESSOR };
