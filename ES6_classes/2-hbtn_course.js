class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name === undefined) {
            throw new Error("Name must be string");
        }
        else {
            this._name = name;
        }
        if(typeof length !== 'number')
        this._name = name;
        this._lastname = lastname;
        this._students = students;
    }
    
}