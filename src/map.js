const map = [
    (data, cb) => {
        const l = data.length
        let r = new Array(l);
        let i = 0;
        for (i; i < l; i++) {
            r[i] = cb(data[i]);
        }
        return r;
    },
    (data, cb) => {
        const l = data && data.length || 0;
        const callback = cb || (e => e);
        let r = new Array(l);
        let i = 0;
        for (i; i < l; i++) {
            r[i] = callback(data[i]);
        }
        return r;
    },
]

module.exports = { map }