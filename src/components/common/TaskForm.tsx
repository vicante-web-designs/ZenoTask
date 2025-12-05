import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react'
import type { Task } from '../types/TypeTasks';

interface TaskFormProps{
    setTasks: Dispatch<SetStateAction<Task[]>>;
    TaskClass: new (id: number, title: string, priority: string, status: string) => Task;
}

function TaskForm({ setTasks, TaskClass }: TaskFormProps){
    const [taskTitle, setTaskTitle] = useState<string>('');

    const [taskPriority, setTaskPriority] = useState<string>('');

    const [taskStatus, setTaskStatus] = useState<string>('');

    const createNewTaskClass = () => {
        return new TaskClass(Date.now(), taskTitle, taskPriority, taskStatus)
    }

    const handleSubmit = (): void => {
        setTasks(prev => ([
            ...prev,
            createNewTaskClass()
        ]))

        setTaskTitle('')
        setTaskPriority('')
        setTaskStatus('')
    }

    return(
        <form action="" className='bg-gray-100 p-5 rounded-xl border border-gray-300 w-fit flex flex-col gap-5' onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <section>
                <label htmlFor="">
                    Task Name:
                </label>
                <input title='Input task' type="text" className='border block bg-gray-300 border-gray-400 rounded-xl p-2' value={taskTitle} onChange={e => {
                    setTaskTitle(e.target.value.trim())
                }}/>
            </section>

            <section className='flex justify-around gap-5'>
                <article>
                    <label htmlFor="">
                        Priority Level
                    </label>
                    <select title='Select priority level' name="" id=""  className='border block bg-gray-300 border-gray-400 rounded-xl p-2' value={taskPriority}  onChange={e => {
                    setTaskPriority(e.target.value.trim())}}>
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
                    <select title='Select status level' name="" id=""  className='border block bg-gray-300 border-gray-400 rounded-xl p-2' value={taskStatus}  onChange={e => {
                    setTaskStatus(e.target.value.trim())}}>
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
    )
}

export default TaskForm;