function merge(to, from) {
    for (var key in from) {
        if (from.hasOwnProperty(key)) {
            to[key] = from[key];
        }
    }
    return to;
}

function extendable(Ancestor) {

    function extend(Child) {
        extendable(Child);

        from = Ancestor.prototype;
        to = Child.prototype;

        to._super_ = Ancestor;
        to.inherited = from;

        merge(to, from);

        return Child;
    };

    Ancestor.extend = extend;

    return Ancestor;
}

function dash(s) {
    return s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}


exports.merge = merge;
exports.dash = dash;
exports.extendable = extendable;