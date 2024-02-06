import { ReactNode, createContext, useState } from 'react'

interface TodoProviderProps {
    children: ReactNode;
}

export const TodoListContext = createContext({});

export const TodoProvider = ( props: TodoProviderProps ) => {
    
    const [ task, setTask ] = useState([]);

    return (
        <TodoListContext.Provider value={ [task, setTask] }>
            { props.children }
        </TodoListContext.Provider>
    );
}
