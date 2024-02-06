import FormModal from './Form';
import { Assets } from '../../assets/assets';
import { useState } from 'react';

interface FormProps {
    task_id?:number;
    task_title?: string;
    task_desc?: string;
}

const setForm = ({task_id, task_title, task_desc}: FormProps) => {
    const [title, setTitle] = useState('');

    return (
        <>  
            {/*Create Form modal*/}
            <FormModal id="createForm" formIcon={Assets.Add} btnName="Create" btnColor="purple" modalTitle="Create Task" onClick={() => {alert('Task Created')}}>
                <div className="form">
                    <div className="mb-3 mt-3">
                        <label htmlFor="create_desc" className="form-label">Task Title</label>
                        <input type="text" className="form-control" 
                            value={title}
                            id="create_desc" 
                            placeholder="Ex. Daily Fitness"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="create_desc" className="form-label">Task Description</label>
                        <textarea className="form-control scrollbar" id="create_desc" placeholder="Ex. 30-minute morning workout" rows={3}></textarea>
                    </div>
                </div>
            </FormModal>

            {/*Edit Form modal*/}
            <FormModal id="editForm" formIcon={Assets.Update} btnName="Save" btnColor="success" modalTitle="Edit Task" onClick={()=>{alert(`Task ${task_id} ID Updated`)}}>
                <div className="form">
                    <div className="mb-3 mt-3">
                        <label htmlFor="edit_title" className="form-label">Task Title</label>
                        <input type="text" value={task_title} className="form-control" id="edit_title" placeholder="Ex. Daily Fitness" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="edit_desc" className="form-label">Task Description</label>
                        <textarea value={task_desc} className="form-control scrollbar" id="edit_desc" placeholder="Ex. 30-minute morning workout" rows={3}></textarea>
                    </div>
                </div>
            </FormModal>
        </>
    );
}

export default setForm