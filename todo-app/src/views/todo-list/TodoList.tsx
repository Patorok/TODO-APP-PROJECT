import './TodoList.css';
import React, { useState } from 'react';
import { Assets } from '../../assets/assets';
import { Components } from '../../components/components';
import { Task } from '../../models/Task';

const TodoList: React.FC = () => {

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing';
    
    const [selectTask, setSelectTask] = useState<Task[] | null>(null);

    let taskItem: Task[] = [
        {
            task_id: 1,
            task_title: 'Sample Title',
            task_desc: lorem,
            task_status: false
        },
    ];

    const handleSampleClick = (task: Task[]) => {
        setSelectTask(task);
    };

    const checkbox = (
        <div className="form-check m-0">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="isDone"
          />
        </div>
    );
      
    return (
        <>  
            <Components.FormModal />
            <Components.Modal taskAttr={selectTask}/>
            <div className='header d-md-flex justify-content-between align-items-center m-4 p-3 pt-0 pb-2'>
                <img src={Assets.Logo} alt="Loading..." />
                <div className='title fw-bold'>
                    To-do List!
                </div>
            </div>
            <div className="row m-4 pt-3">
                <div className="task-list col-lg-6">
                    <div className="row align-items-center">
                        <div className='col-lg-6 d-flex align-items-center justify-content-lg-between'>
                            <img className='list-icon' src={Assets.ListIcon} alt="Loading..." />
                            <div className='list-title fw-bold fs-1'>
                                Task List!
                            </div>
                        </div>

                        <div className="utils col-lg-6">
                            <div className="d-flex justify-content-end align-items-center">
                                <Components.Button dataBsToggle="modal" targetModal="doneDialog" btnclass='done' >
                                    <img src={Assets.DoneAllIcon} alt="loading..." />
                                    <span className='ps-2'>Done all</span>
                                </Components.Button>
                                <Components.Button dataBsToggle="modal" targetModal="createForm" btnclass='create'>
                                    <img src={Assets.CreateIcon} alt="loading..." />
                                </Components.Button>
                                <Components.Button dataBsToggle="modal" targetModal="deleteDialog" btnclass='clean'>
                                    <img src={Assets.CleanIcon} alt="loading..." />
                                </Components.Button>
                            </div>
                        </div>
                    </div>

                    {/* Task list part */}
                    <div className="task-list-content scrollbar row mt-5 overflow-auto">
                        <Components.Card checkbox={checkbox} taskTitle='Sample Title' taskDesc={lorem}>
                            <Components.Button dataBsToggle="modal" targetModal="editForm" btnclass='edit' onClick={() => {handleSampleClick(taskItem)}}>
                                <img src={Assets.EditIcon} alt="loading..." />
                            </Components.Button>
                            <Components.Button dataBsToggle="modal" targetModal="singleDelete" btnclass='delete' onClick={() => {handleSampleClick(taskItem)}}>
                                <img src={Assets.RemoveIcon} alt="loading..." />
                            </Components.Button>
                        </Components.Card>
                    </div>
                </div>

                {/*Done task part*/}
                <div className="task-list col-lg-6 border-0">
                    <div className="row align-items-center ps-3">
                        <div className='col-lg-8 d-flex align-items-center'>
                            <img className='list-icon me-4' src={Assets.DoneIcon} alt="Loading..." />
                            <div className='list-title fw-bold fs-1'>
                                Done Task!
                            </div>
                        </div>

                        <div className="utils col-lg-4">
                            <div className="d-flex justify-content-end align-items-center">
                                <Components.Button dataBsToggle="modal" 
                                    targetModal="clearDonesDialog" 
                                    btnclass='delete' 
                                    // onClick={() => {alert('clean done task')}}
                                >
                                    <img src={Assets.ClearIcon} alt="loading..." />
                                    <span className='ps-2'>Clear</span>
                                </Components.Button>
                            </div>
                        </div>
                    </div>

                    <div className="task-list-content scrollbar row mt-5 overflow-auto">
                        <Components.Card isDone='done' lineThrough='strikethrough' taskTitle='Sample Title' taskDesc={lorem}>
                            <Components.Button btnclass='undo' onClick={() => {alert('clicked')}}>
                                <img src={Assets.UndoIcon} alt="loading..." />
                            </Components.Button>
                        </Components.Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoList