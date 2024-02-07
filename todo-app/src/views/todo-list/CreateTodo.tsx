import React from 'react';

interface CreateTodoProps {
    desc: string, 
    title: string, 
    handleCreateTask: () => void;
    setDesc: React.Dispatch<React.SetStateAction<string>>, 
    setTitle:  React.Dispatch<React.SetStateAction<string>>, 

    Component: any;
    icon: string;
}

const CreateTodo: React.FC<CreateTodoProps> = ({title, setTitle, desc, setDesc, handleCreateTask, Component, icon}) => {

    return (
        <>
            {/*Create Form modal*/}
            <Component
                id="createForm" 
                formIcon={icon} 
                btnName="Create" 
                btnColor="purple"
                closeId="closeCreateForm"
                modalTitle="Create Task" 
                onClick={handleCreateTask}
            >
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
            </Component>
        </>
    );
}

export default CreateTodo