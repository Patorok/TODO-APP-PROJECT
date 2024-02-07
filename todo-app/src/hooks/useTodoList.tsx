import { useState, useEffect } from 'react'
import { Task } from '../models/Task';

const useCreateTodo = () => {
    // State to manage input fields value and tasks array
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);

    // Function to fetch tasks from local storage
    const fetchTasksFromLocalStorage = () => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        setTasks(storedTasks);
    };

    // Fetch tasks from local storage when component mounts
    useEffect(() => {
        fetchTasksFromLocalStorage();
    }, []);

    // Function to create a task
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
        setTasks(prevTasks => [...prevTasks, newTask]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));

        // Clear input fields after adding task
        setTitle('');
        setDesc('');

        // Close modal
        document.getElementById('closeCreateForm')?.click();
    };

    // State to manage selected task for editing/deleting
    const [selectTaskId, setSelectTaskId] = useState<number>(0);
    const [selectTaskTitle, setSelectTaskTitle] = useState<string>('');
    const [selectTaskDesc, setSelectTaskDesc] = useState<string>('');

    // Function to set selected task for editing/deleting
    const handleSelectedId = (id: number, title: string, desc: string) => {
        setSelectTaskId(id);
        setSelectTaskTitle(title);
        setSelectTaskDesc(desc);
    }

    // Function to edit a task
    const handleEditTask = () => {
        // Create edited task object
        const editedTask: Task = {
            task_id: selectTaskId,
            task_title: selectTaskTitle,
            task_desc: selectTaskDesc,
            task_status: false
        }

        // Validate input fields
        if (!editedTask.task_title.trim() || !editedTask.task_desc.trim()) {
            alert("Title and description cannot be empty");
            return;
        }

        // Update tasks array with edited task
        const updatedTasks = tasks.map(task =>
            task.task_id === selectTaskId ? { ...task, ...editedTask } : task
        );
        
        // Update local storage with edited tasks
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // Close modal
        document.getElementById('closeEditForm')?.click();
    };

    // Function to delete a task
    const handleDeleteTask = () => {
        const updatedTasks = tasks.filter(task => task.task_id !== selectTaskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const [isDone, setIsDone] = useState<string>('');
    const [lineThrough, setLineThrough] = useState<string>('');

    // Function to mark a task as done
    const handleUpdateStatus = (id: number) => {
        setSelectTaskId(id);
        setIsDone('checked');
        setLineThrough('strikethrough');
        setTimeout(() => {
            const updatedTasks = tasks.map(task =>
                task.task_id === id ? { ...task, task_status: !task.task_status } : task
            );
    
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));

            setIsDone('');
            setLineThrough('');
        }, 1500);
    }

    return {
        title,
        setTitle,
        desc,
        setDesc,
        tasks,
        isDone,
        lineThrough,
        selectTaskId,
        selectTaskTitle,
        selectTaskDesc,
        setSelectTaskId,
        setSelectTaskTitle,
        setSelectTaskDesc,
        handleSelectedId,
        handleCreateTask,
        handleEditTask,
        handleDeleteTask,
        handleUpdateStatus
    };
}

export default useCreateTodo