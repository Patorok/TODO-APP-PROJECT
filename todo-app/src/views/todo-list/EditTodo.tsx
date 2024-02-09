import React from 'react'

interface EditTodoProps {
    title: string, 
    setTitle:  React.Dispatch<React.SetStateAction<string>>, 
    desc: string, 
    setDesc: React.Dispatch<React.SetStateAction<string>>, 
    handleEditTask: () => void;

    Component: any;
    icon: string;
}

const EditTodo:React.FC<EditTodoProps> = ({title, setTitle, desc, setDesc, handleEditTask, Component, icon}) => {
  return (
    <>
          {/*Edit Form modal*/}
          <Component
              id="editForm"
              formIcon={icon}
              btnName="Save"
              btnColor="orange"
              closeId="closeEditForm"
              modalTitle="Edit Task"
              onClick={handleEditTask}
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

export default EditTodo