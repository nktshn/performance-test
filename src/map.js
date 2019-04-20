const map = [
    {
        func: (data, cb) => {
            return data.map(cb);
        }, description: 'native'
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
            let r = (l > 64000 && new Array(l)) || [0];
            let i = 0;
            for (i; i < l; i++) {
                r[i] = callback(data[i]);
            }
            return r;
        }, description: 'no array initialization if length is not big'
    },

    {
        func: (data, cb) => {
            const l = data && data.length || 0;
            const callback = cb || (e => e);
            let r = new Array(l);
            let i = 0;
            while (i < l) {
                r[i] = callback(data[i]);
                i++;
            }
            return r;
        }, description: 'while instead of for with length init'
    },
]

module.exports = { map }