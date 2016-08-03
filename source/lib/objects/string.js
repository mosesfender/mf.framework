/**
 * @author Sergey Siunov
 * String object extends
 * @param {String.prototype} o
 */
    (function (o) {
        o.toBool = o.toBool || function () {
            var str = this;
            if (typeof this == 'number')
                str = str.toString();
            str = str.toLowerCase();
            return Boolean(str == 'true' || str == 'yes' || str == '1');
        };

        o.trim = o.trim || function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
    })(String.prototype);