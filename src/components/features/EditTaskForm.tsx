import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Task } from '../types/TypeTasks';

interface EditTaskFormProps{
    taskId: number;
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>;
    setShowEditForm: Dispatch<SetStateAction<boolean>>
}

function EditTaskForm({ taskId, tasks, setTasks, setShowEditForm }: EditTaskFormProps){

    useEffect(() => {
        const task: Task = (tasks.filter(task => task.id === taskId))[0];

        setEdittedTaskTitle(task.title);
        setEdittedTaskPriority(task.priority);
        setEdittedTaskStatus(task.status);
    }, [tasks, taskId])

    const [edittedTaskTitle, setEdittedTaskTitle] = useState<string>('');

    const [edittedTaskPriority, setEdittedTaskPriority] = useState<string>('');

    const [edittedTaskStatus, setEdittedTaskStatus] = useState<string>('');

    const hideEditForm = (): void => {
        setShowEditForm(false)
    }

    const handleSubmit = (): void => {
        const updatedTask = tasks.map(task => 
            task.id === taskId ? {
                ...task,
                title: edittedTaskTitle,
                priority: edittedTaskPriority,
                status: edittedTaskStatus
            } : task
        )

        setTasks(updatedTask)
        setShowEditForm(false)
    }

    return(
        <section className='bg-gray-100 p-5 rounded-xl border border-gray-300 w-fit flex flex-col gap-5 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-end'>
            <button className='text-gray-50 bg-red-500 rounded-lg px-3 py-1 w-fit' onClick={() => {
                hideEditForm();
            }}>
                X
            </button>
            <form action="" className='flex flex-col gap-5' onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <h2 className='font-semibold text-3xl text-center'>
                    Edit Your Task
                </h2>
                <section>
                    <label htmlFor="">
                        Task Name:
                    </label>
                    <input title='Task name' type="text" className='border block bg-gray-300 border-gray-400 rounded-xl p-2' value={edittedTaskTitle} onChange={e => {
                        setEdittedTaskTitle(e.target.value.trim())
                    }}/>
                </section>

                <section className='flex justify-around gap-5'>
                    <article>
                        <label htmlFor="">
                            Priority Level
                        </label>
                        <select title='Select priority level' name="" id=""  className='border block bg-gray-300 border-gray-400 rounded-xl p-2' value={edittedTaskPriority}  onChange={e => {
                        setEdittedTaskPriority(e.target.value.trim())}}>
                            <option value="select status">Select Priority Level</option>
                            <option value="top">Top</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </article>

                    <article>
                        <label htmlFor="">
                            Status
                        </label>
                        <select title='Select status level' name="" id=""  className='border block bg-gray-300 border-gray-400 rounded-xl p-2' value={edittedTaskStatus}  onChange={e => {
                        setEdittedTaskStatus(e.target.value.trim())}}>
                            <option value="select status">Select Status</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="not started">Not Started</option>
                        </select>
                    </article>
                </section>

                <button className='bg-blue-700 text-white w-fit px-16 py-2 m-auto rounded-xl' type='submit'>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default EditTaskForm;