import Modal from './Modal';
import { Assets } from '../../assets/assets';

interface TaskProps {
    taskAttr?: any;
}

const setModals = ({taskAttr}: TaskProps) => {
  return (
    <>
        {/*Multiple Selection*/}
        <Modal 
            id='deleteDialog' 
            modalTitle='Delete All' 
            modalMsg='Are you sure you want to delete all todos?'
            btnName='Delete'
            btnColor='danger'
            onClick={() => {alert('delete all tasks')}}
        >
            <img src={Assets.Danger} alt="Loading..." />
        </Modal>
        <Modal 
            id='doneDialog' 
            modalTitle='Complete All' 
            modalMsg='Are you sure you want to complete all todos?'
            btnName='Complete'
            btnColor='success'
            onClick={() => {alert('done all tasks')}}
        >
            <img src={Assets.Question} alt="Loading..." />
        </Modal>
        <Modal 
            id='clearDonesDialog' 
            modalTitle='Clean All' 
            modalMsg='Are you sure you want to clean all completed todos?'
            btnName='Clean'
            btnColor='warning'
            onClick={() => {alert('clean all completed tasks')}}
        >
            <img src={Assets.ResetIcon} alt="Loading..." />
        </Modal>
        
        {/* Single Selection */}
        <Modal 
            id='singleDelete' 
            modalTitle='Delete Task' 
            modalMsg={`Are you sure you want to delete this task?`}
            btnName='Delete'
            btnColor='danger'
            onClick={() => {alert(`clean all completed tasks ${taskAttr.task_id}`)}}
        >
            <img src={Assets.Danger} alt="Loading..." />
        </Modal>
    </>
  )
}

export default setModals