import './TodoApp.css';
import React from 'react';
import EditTodo from './EditTodo';
import CreateTodo from './CreateTodo';
import { Assets } from '../../assets/assets';
import useCreateTodo from '../../hooks/useTodoList';
import { Components } from '../../components/components';

const TodoList: React.FC = () => {    
    const { 
        tasks, isDone, lineThrough,
        desc, setDesc, 
        title, setTitle,
        selectTaskId, disabled,
        selectTaskDesc, setSelectTaskDesc,
        selectTaskTitle, setSelectTaskTitle,
        handleEditTask, handleSelectedId, handleCreateTask, 
        handleDeleteTask, handleUpdateStatus, handleUndoTask
    } = useCreateTodo();
      
    return (
        <>  
            <Components.Modal onSingleDelete={handleDeleteTask}/>

            <CreateTodo title={title} setTitle={setTitle} 
                desc={desc} setDesc={setDesc} 
                handleCreateTask={handleCreateTask} 
                Component={Components.FormModal} 
                icon={Assets.Add}
            />

            <EditTodo title={selectTaskTitle} setTitle={setSelectTaskTitle} 
                desc={selectTaskDesc} setDesc={setSelectTaskDesc} 
                handleEditTask={handleEditTask} 
                Component={Components.FormModal} 
                icon={Assets.Update}
            />

            <div className='header d-md-flex justify-content-between align-items-center m-4 p-3 pt-0 pb-2'>
                <img src={Assets.Logo} alt="Loading..." />
                <div className='title fw-bold'>
                    To-do List!
                </div>
            </div>
            <div className="row m-md-4 pt-3 todos-container">
                <div className="task-list col-lg-6">
                    <div className="row align-items-center">
                        <div className='todo-header col-lg-6 d-flex align-items-center justify-content-lg-between'>
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
                        {tasks.filter(task => !task.task_status).length === 0 ? (
                            <div className="notask p-3 text-center">
                                <div><img src={Assets.NoTask} alt="Loading..." /></div>
                                <div className="mt-3 fs-5">No tasks to do!</div>
                            </div>
                        ) : (
                            tasks.filter(task => !task.task_status).map(task => (
                                <Components.Card key={task.task_id}
                                    checkbox={true}
                                    taskDesc={task.task_desc}
                                    taskTitle={task.task_title}
                                    disabledCheck={disabled}
                                    onChange={() => handleUpdateStatus(task.task_id)}
                                    isDone={selectTaskId === task.task_id ? isDone : ''}
                                    lineThrough={selectTaskId === task.task_id ? lineThrough : ''}
                                    >
                                    <Components.Button dataBsToggle="modal" 
                                        targetModal="editForm" 
                                        btnclass='edit' 
                                        onClick={() => handleSelectedId(task.task_id, task.task_title, task.task_desc)}
                                    >
                                        <img src={Assets.EditIcon} alt="loading..." />
                                    </Components.Button>
                                    <Components.Button dataBsToggle="modal" 
                                        targetModal="singleDelete" 
                                        btnclass='delete' 
                                        onClick={() => handleSelectedId(task.task_id, task.task_title, task.task_desc)}
                                    >
                                        <img src={Assets.RemoveIcon} alt="loading..." />
                                    </Components.Button>
                                </Components.Card>
                            ))
                        )}
                    </div>
                </div>

                {/*Done task part*/}
                <div className="task-list col-lg-6 border-0">
                    <div className="row align-items-center">
                        <div className='todo-header col-lg-8 d-flex align-items-center'>
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
                        {tasks.filter(task => task.task_status).length === 0 ? (
                            <div className="notask p-3 text-center">
                                <div><img src={Assets.NoTask} alt="Loading..." /></div>
                                <div className="mt-3 fs-5">No tasks to do!</div>
                            </div>
                        ) : (
                            tasks.filter(task => task.task_status).map(task => (
                                <Components.Card key={task.task_id}
                                    taskTitle={task.task_title}
                                    taskDesc={task.task_desc}
                                    isDone="done"
                                    >
                                    <Components.Button 
                                        btnclass="undo"
                                        disabledBtn={disabled}
                                        onClick={() => {handleUndoTask(task.task_id)}}
                                    >
                                        <img src={Assets.UndoIcon} alt="loading..." />
                                    </Components.Button>
                                </Components.Card>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoList