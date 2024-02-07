import FormModal from './Form';
import { Assets } from '../../assets/assets';
import React, { useState } from 'react';
import { Task } from '../../models/Task';

const setForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    const closeForm = () => {
        document.getElementById('closeForm')?.click();
    }

    const handleCreateTask = () => {
        // Validate input fields
        if (!title.trim() || !desc.trim()) {
            alert("Title and description cannot be empty");
            return;
        }

        // Create new task
        const newTask: Task = {
            task_id: Math.floor(1000 + Math.random() * 9000),
            task_title: title,
            task_desc: desc,
            task_status: false
        };

        // Add new task to tasks array
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // Clear input fields after adding task
        setTitle('');
        setDesc('');

        // Close modal
        closeForm();
    }

    return (
        <>  
            {/*Create Form modal*/}
            <FormModal id="createForm" formIcon={Assets.Add} 
                btnName="Create" 
                btnColor="purple" 
                modalTitle="Create Task" 
                onClick={handleCreateTask}>
                <div className="form">
                    <div className="mb-3 mt-3">
                        <label htmlFor="create_desc" className="form-label">Task Title</label>
                        <input type="text" className="form-control" 
                            value={title}
                            id="create_desc" 
                            placeholder="Ex. Daily Fitness"
                            autoComplete='off'
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="create_desc" className="form-label">Task Description</label>
                        <textarea className="form-control scrollbar" 
                            id="create_desc"
                            value={desc}
                            placeholder="Ex. 30-minute morning workout"
                            onChange={(e) => setDesc(e.target.value)}
                            rows={3}>
                        </textarea>
                    </div>
                </div>
            </FormModal>

            {/*Edit Form Modal*/}
            <FormModal id="editForm" formIcon={Assets.Update} btnName="Save" btnColor="success" modalTitle="Edit Task" onClick={()=>{alert('Task Updated')}}>
                <div className="form">
                    <div className="mb-3 mt-3">
                        <label htmlFor="edit_title" className="form-label">Task Title</label>
                        <input type="text" className="form-control" id="edit_title" placeholder="Ex. Daily Fitness" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="edit_desc" className="form-label">Task Description</label>
                        <textarea className="form-control scrollbar"
                            id="edit_desc" 
                            placeholder="Ex. 30-minute morning workout"
                            rows={3}>
                        </textarea>
                    </div>
                </div>
            </FormModal>
        </>
    );
}

export default setForm