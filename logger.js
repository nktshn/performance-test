/**
 * imports
 */
const mapModule = require('./src/map');

/**
 * initial data
 */
const longArrayLength = 5000000;
const shortArrayLength = 50000;
const resultCheckLength = 15;
const longNumberArray = getlongNumberArray(longArrayLength);
const shortNumberArray = getlongNumberArray(shortArrayLength);
const _map = mapModule.map;

/**
 * logic
 */
const run = () => {
    describe('map', _map, [longNumberArray, e => e * 2], null);
    describe('map', _map, [shortNumberArray, e => e * 2], null);
}

const describe = (message, funcArray, funcArgs, ctx) => {
    let bestResult = { implementation: null, time: null };
    console.log(`--- Function: ${message} ---`);
    console.log(`Data size: ${funcArgs[0].length}`);
    funcArray.forEach((implementation, index) => {
        console.log(`Implementation #${index}: ${implementation.description}`.padEnd(80, ' -'));
        let currentResult;
        const startTime = Date.now();
        const functionResult = implementation.func.call(ctx, ...funcArgs);
        currentResult = Date.now() - startTime;
        console.log(`time: ${currentResult.toString().padStart(70)} ms`);
        console.log(`result check: ${functionResult.filter((e, i) => i < resultCheckLength)}`);
        console.log('\n'.padStart(80, ' -'));
        if (!bestResult.time) {
            bestResult = { implementation: index, time: currentResult }
        } else {
            bestResult = (bestResult.time > currentResult) ? {
                implementation: index,
                time: currentResult
            } : bestResult;
        }
    });
    console.log(`The fastest implementation is #${bestResult.implementation} with time ${bestResult.time} ms`);
}

/**
 * helpers
 */
function getlongNumberArray(length, mapCb) {
    let cb = mapCb || ((e, i) => i);
    return Array(length).fill().map(cb);
}

module.exports = {
    run,
}

