import './TodoList.css';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import Logo from '../../assets/lexmeet-logo.png';
import ListIcon from '../../assets/new-icon.svg';
import DoneIcon from '../../assets/todo-new-icon.svg';
import CreateIcon from '../../assets/add-icon.svg';
import CleanIcon from '../../assets/delete-icon.svg';
import DoneAllIcon from '../../assets/done-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import RemoveIcon from '../../assets/remove-icon.svg';
import ClearIcon from '../../assets/clear-icon.svg';
import UndoIcon from '../../assets/undo-icon.svg';

const TodoList = () => {

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing';

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
            <div className='header d-md-flex justify-content-between align-items-center m-4 p-3 pt-0 pb-2'>
                <img src={Logo} alt="Loading..." />
                <div className='title fw-bold'>
                    To-do List!
                </div>
            </div>
            <div className="row m-4 pt-3">
                <div className="task-list col-lg-6">
                    <div className="row align-items-center">
                        <div className='col-lg-6 d-flex align-items-center justify-content-lg-between'>
                            <img className='list-icon' src={ListIcon} alt="Loading..." />
                            <div className='list-title fw-bold fs-1'>
                                Task List!
                            </div>
                        </div>

                        <div className="utils col-lg-6">
                            <div className="d-flex justify-content-end align-items-center">
                                <Button btnclass='done' onClick={() => {alert('clicked')}}>
                                    <img src={DoneAllIcon} alt="loading..." />
                                    <span className='ps-2'>Done all</span>
                                </Button>
                                <Button btnclass='create' onClick={() => {alert('clicked')}}>
                                    <img src={CreateIcon} alt="loading..." />
                                </Button>
                                <Button btnclass='clean' onClick={() => {alert('clicked')}}>
                                    <img src={CleanIcon} alt="loading..." />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Task list part */}
                    <div className="task-list-content scrollbar row mt-5 overflow-auto">
                        <Card checkbox={checkbox} taskTitle='Sample Title' taskDesc={lorem}>
                            <Button btnclass='edit' onClick={() => {alert('clicked')}}>
                                <img src={EditIcon} alt="loading..." />
                            </Button>
                            <Button btnclass='delete' onClick={() => {alert('clicked')}}>
                                <img src={RemoveIcon} alt="loading..." />
                            </Button>
                        </Card>

                        <Card checkbox={checkbox} taskTitle='Sample Title' taskDesc={lorem}>
                            <Button btnclass='edit' onClick={() => {alert('clicked')}}>
                                <img src={EditIcon} alt="loading..." />
                            </Button>
                            <Button btnclass='delete' onClick={() => {alert('clicked')}}>
                                <img src={RemoveIcon} alt="loading..." />
                            </Button>
                        </Card>

                        <Card checkbox={checkbox} taskTitle='Sample Title' taskDesc={lorem}>
                            <Button btnclass='edit' onClick={() => {alert('clicked')}}>
                                <img src={EditIcon} alt="loading..." />
                            </Button>
                            <Button btnclass='delete' onClick={() => {alert('clicked')}}>
                                <img src={RemoveIcon} alt="loading..." />
                            </Button>
                        </Card>
                    </div>
                </div>

                {/*Done task part*/}
                <div className="task-list col-lg-6 border-0">
                    <div className="row align-items-center ps-3">
                        <div className='col-lg-8 d-flex align-items-center'>
                            <img className='list-icon me-4' src={DoneIcon} alt="Loading..." />
                            <div className='list-title fw-bold fs-1'>
                                Done Task!
                            </div>
                        </div>

                        <div className="utils col-lg-4">
                            <div className="d-flex justify-content-end align-items-center">
                                <Button btnclass='delete' onClick={() => { alert('clicked') }}>
                                    <img src={ClearIcon} alt="loading..." />
                                    <span className='ps-2'>Clear</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="task-list-content scrollbar row mt-5 overflow-auto">
                        <Card isDone='done' lineThrough='strikethrough' taskTitle='Sample Title' taskDesc={lorem}>
                            <Button btnclass='undo' onClick={() => {alert('clicked')}}>
                                <img src={UndoIcon} alt="loading..." />
                            </Button>
                        </Card>
                        <Card isDone='done' taskTitle='Sample Title' taskDesc={lorem}>
                            <Button btnclass='undo' onClick={() => {alert('clicked')}}>
                                <img src={UndoIcon} alt="loading..." />
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoList