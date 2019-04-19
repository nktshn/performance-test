/**
 * imports
 */
const mapModule = require('./src/map');

/**
 * initial data
 */
const arrayLength = 1000000;
const numberArray = getNumberArray(arrayLength);
const _map = mapModule.map;

/**
 * logic
 */
const run = () => {
    console.log(`Data size: ${arrayLength}`);
    describe('native map', [[].map], [e => e * 2], numberArray);
    describe('map', _map, [numberArray, e => e * 2], null);
}

const describe = (message, funcArray, funcArgs, ctx) => {
    console.log(`--- Function: ${message} ---`);
    funcArray.forEach((func, index) => {
        console.time(`#${index} timing: `.padEnd(40));
        func.call(ctx, ...funcArgs);
        console.timeEnd(`#${index} timing: `.padEnd(40));
    });
}

function getNumberArray(length) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res[i] = i;
    }
    return res;
}

module.exports = {
    run,
}

