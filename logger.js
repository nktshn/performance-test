/**
 * imports
 */
const mapModule = require('./src/map');

/**
 * initial data
 */
const arrayLength = 5000000;
const numberArray = getNumberArray(arrayLength);
const _map = mapModule.map;

/**
 * logic
 */
const run = () => {
    console.log(`Data size: ${arrayLength}`);
    describe('map', _map, [numberArray, e => e * 2], null);
}

const describe = (message, funcArray, funcArgs, ctx) => {
    let bestResult = { implementation: null, time: null };
    console.log(`--- Function: ${message} ---`);
    funcArray.forEach((implementation, index) => {
        console.log(`Implementation #${index}: ${implementation.description.toString().padEnd(60, ' -')}`);
        let currentResult;
        const startTime = Date.now();
        implementation.func.call(ctx, ...funcArgs);
        currentResult = Date.now() - startTime;
        console.log(`time: ${currentResult.toString().padStart(70)}ms`);
        console.log('\n'.padStart(79, ' -'));
        if (!bestResult.time) {
            bestResult = { implementation: index, time: currentResult }
        } else {
            bestResult = (bestResult.time > currentResult) ? {
                implementation: index,
                time: currentResult
            } : bestResult;
        }
    });
    console.log(`The fastest implementation is #${bestResult.implementation} with time ${bestResult.time}ms`);
}

/**
 * helpers
 */
function getNumberArray(length) {
    return Array(length).fill().map((e, i) => i);
}

module.exports = {
    run,
}

