interface UserProps {
    name: string;
    age: number;

}

export class User {
    constructor(private data: { name:string; age: number }) {}

    get(propName: string): (number | string) {
        return this.data[propName];
    }
};