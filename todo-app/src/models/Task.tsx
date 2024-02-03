export class Task {
    public task_id: number;
    public task_desc: string;
    public task_status: boolean;

    constructor(task_id:number, task_desc:string, task_status:boolean){
        this.task_id = task_id;
        this.task_desc = task_desc;
        this.task_status = task_status;
    }
}