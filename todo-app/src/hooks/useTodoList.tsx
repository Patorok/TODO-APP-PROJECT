import { useState, useEffect } from 'react'
import { Task } from '../models/Task';

const useCreateTodo = () => {
    // State to manage input fields value and tasks array
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);

    // State to manage selected task
    const [selectTaskId, setSelectTaskId] = useState<number>(0);
    
    // State to manage task status and styles
    const [isDone, setIsDone] = useState<string>('');
    const [lineThrough, setLineThrough] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(false);

    // State to manage alert visibility
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');
    const [alertColor, setAlertColor] = useState<string>('');

    // Function to fetch tasks from local storage
    const fetchTasksFromLocalStorage = () => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        setTasks(storedTasks);
    };

    // Fetch tasks from local storage when component mounts
    useEffect(() => {
        fetchTasksFromLocalStorage();
        console.log('Rendered');
    }, []);

    const alert = (message: string, color: string) => {
        // Set alert message and color
        setAlertMessage(message);
        setAlertColor(color);
        setAlertVisible(true);

        // Hide alert after 1800 milliseconds
        setTimeout(() => {
            setAlertVisible(false);
        }, 1800);
    }

    // Function to create a task
    const handleCreateTask = () => {
        // Validate input fields
        if (!title.trim() || !desc.trim()) {
            // Set alert message and color
            alert('All fields are required!', 'primary');
        } else {
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

            // Set success alert message and color
            alert('Task created successfully!', 'success');

            // Clear input fields
            setTitle('');
            setDesc('');

            // Close modal
            document.getElementById('closeCreateForm')?.click();
        }
    };

    // Function to set selected task for editing/deleting
    const handleSelectedId = (id: number, title: string, desc: string) => {
        setSelectTaskId(id);
        setTitle(title);
        setDesc(desc);
    }

    // Function to edit a task
    const handleEditTask = () => {
        // Create edited task object
        const editedTask: Task = {
            task_id: selectTaskId,
            task_title: title,
            task_desc: desc,
            task_status: false
        }

        // Validate input fields
        if (!editedTask.task_title.trim() || !editedTask.task_desc.trim()) {
            // Set alert message and color
            alert('All fields are required!', 'primary');
        } else {
            // Update tasks array with edited task
            const updatedTasks = tasks.map(task =>
                task.task_id === selectTaskId ? { ...task, ...editedTask } : task
            );

            // Update local storage with edited tasks
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));

            // Set alert message and color
            alert('Task updated successfully!', 'success');

            // Clear input fields after editing task
            setTitle('');
            setDesc('');

            // Close modal
            document.getElementById('closeEditForm')?.click();
        }
    };

    // Function to delete a task
    const handleDeleteTask = () => {
        const updatedTasks = tasks.filter(task => task.task_id !== selectTaskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // Set alert message and color
        alert('Task deleted successfully!', 'danger');
    };

    // Function to delete all todos tasks
    const handleDeleteAllTasks = () => {
        const updatedTasks = tasks.filter(task => task.task_status);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // Set alert message and color
        alert('All tasks deleted successfully!', 'danger');
    };

    // Function to mark a task as done
    const handleUpdateStatus = (id: number, title: string) => {
        setSelectTaskId(id);
        setIsDone('checked');
        setLineThrough('strikethrough');
        setDisabled(true);

        setTimeout(() => {
            const updatedTasks = tasks.map(task =>
                task.task_id === id ? { ...task, task_status: !task.task_status } : task
            );
    
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));

            // Set alert message and color for task completion
            alert(`"${title}" marked as done.`, 'success');

            setIsDone('');
            setLineThrough('');
            setDisabled(false);
        }, 1000);
    };

    // Function to mark all tasks as done
    const handleDoneAll = () => {
        const updatedTasks = tasks.map(task => ({ ...task, task_status: true }));
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // Set alert message and color for emptying done list
        alert('All tasks marked as completed.', 'primary');
    }

    // Function to delete all done tasks
    const handleDoneDelete = () => {
        const updatedTasks = tasks.filter(task => !task.task_status);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // Set alert message and color for emptying done list
        alert('All completed tasks deleted successfully!', 'warning');
    }

    // Function to undo a task
    const handleUndoTask = (id: number) => {
        const updatedTasks = tasks.map(task =>
            task.task_id === id ? { ...task, task_status: !task.task_status } : task
        );

        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // Set alert message and color for task completion
        alert('Task undone successfully!', 'secondary');
    }

    return {
        desc,
        title,
        tasks,
        isDone,
        disabled,
        alertColor,
        lineThrough,
        alertVisible,
        alertMessage,
        selectTaskId,
        setDesc,
        setTitle,
        handleDoneAll,
        handleEditTask,
        handleUndoTask,
        setSelectTaskId,
        handleSelectedId,
        handleCreateTask,
        handleDeleteTask,
        handleDoneDelete,
        handleUpdateStatus,
        handleDeleteAllTasks
    };
}

export default useCreateTodo