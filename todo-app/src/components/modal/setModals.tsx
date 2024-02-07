import Modal from './Modal';
import { Assets } from '../../assets/assets';

interface ConfirmationBoxProps {
    onSingleDelete?: () => void;
    onMultipleDelete?: () => void;
    onDoneAll?: () => void;
    onDoneDelete?: () => void;
}

const setModals = ({onSingleDelete, onMultipleDelete, onDoneAll, onDoneDelete}: ConfirmationBoxProps) => {
  return (
    <>
        {/*Delete All*/}
        <Modal 
            id='deleteDialog' 
            modalTitle='Delete All' 
            modalMsg='Are you sure you want to delete all todos?'
            btnName='Delete'
            btnColor='danger'
            onClick={onMultipleDelete}
        >
            <img src={Assets.Danger} alt="Loading..." />
        </Modal>

        {/* Done All */}
        <Modal 
            id='doneDialog' 
            modalTitle='Complete All' 
            modalMsg='Are you sure you want to complete all todos?'
            btnName='Complete'
            btnColor='success'
            onClick={onDoneAll}
        >
            <img src={Assets.Question} alt="Loading..." />
        </Modal>

        {/* Delete All Done */}
        <Modal 
            id='clearDonesDialog' 
            modalTitle='Clean All' 
            modalMsg='Are you sure you want to clean all completed todos?'
            btnName='Clean'
            btnColor='warning'
            onClick={onDoneDelete}
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
            onClick={onSingleDelete}
        >
            <img src={Assets.Danger} alt="Loading..." />
        </Modal>
    </>
  )
}

export default setModals