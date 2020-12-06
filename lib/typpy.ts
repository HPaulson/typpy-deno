type Constructor = Array<any> | Boolean | String | Object | Function | string

function Typpy(input: any, target?: Constructor): any {
    if (target) {
        return Typpy.is(input, target);
    }
    return Typpy.get(input, true);
}

Typpy.is = function (input: any, target: Constructor) {
    return Typpy.get(input, typeof target === "string") === target;
};

Typpy.get = function (input: any, str?: Constructor): any {

    if (typeof input === "string") {
        return str ? "string" : String;
    }

    else if (input === null) {
        return str ? "null" : null;
    }

    else if (input === undefined) {
        return str ? "undefined" : undefined;
    }

    else if (input !== input) {
        return str ? "nan" : NaN;
    }

   else 
        return str ? input.constructor.name.toLowerCase() : input.constructor
};

export {Typpy}