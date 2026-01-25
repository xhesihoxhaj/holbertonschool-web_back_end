class Currency {
    constructor(code, name) {
        this._name = name;
        this._code = code;
    }
    get name() {
        return this.name;
    }
    get code() {
        return this.code;
    }
    set name(name) {
        this.name=name;
    }
    set code(code){
        this.code=code;
    }
    displayFullCurrency (code,name){
const res = this.name(this.code);
return res;
    }
}
