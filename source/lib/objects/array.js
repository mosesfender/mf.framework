/**
 * @author Sergey Siunov
 * Array object extends
 * @param {Array.prototype} o
 */

(function (o) {
    o.inArray = o.inArray || function (needle) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == needle)
                return true;
        }
        return false;
    };
})(Array.prototype);