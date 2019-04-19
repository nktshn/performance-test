const map = [
    {
        func: (data, cb) => {
            return data.map(cb);
        }, description: 'native'
    },
    {
        func: (data, cb) => {
            const l = data.length
            let r = new Array(l);
            let i = 0;
            for (i; i < l; i++) {
                r[i] = cb(data[i]);
            }
            return r;
        }, description: 'once refs to length, instant initialization'
    },
    {
        func: (data, cb) => {
            const l = data && data.length || 0;
            const callback = cb || (e => e);
            let r = new Array(l);
            let i = 0;
            for (i; i < l; i++) {
                r[i] = callback(data[i]);
            }
            return r;
        }, description: 'does null-checking matters?'
    },
    {
        func: (data, cb) => {
            const l = data && data.length || 0;
            const callback = cb || (e => e);
            let r = [];
            let i = 0;
            for (i; i < l; i++) {
                r[i] = callback(data[i]);
            }
            return r;
        }, description: 'empty array without length initialization'
    },
]

module.exports = { map }