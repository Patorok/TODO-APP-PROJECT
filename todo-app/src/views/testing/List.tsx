export class List {
    public id: number; //Field id is a unique identifier for each list.
    public item: string; //Field name
    public value: string; //Field value

    constructor(id:number, item:string, value:string){
        this.id = id;
        this.item = item;
        this.value = value;
    }
}