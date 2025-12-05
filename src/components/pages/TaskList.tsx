import EditTaskForm from '../features/EditTaskForm';
import { useState } from 'react';
import type { Dispatch, SetStateAction} from 'react'
import type { Task } from '../types/TypeTasks';

interface TaskListProps{
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>;
    handleDelete: (x: number) => void;
}

function TaskList({tasks, setTasks, handleDelete}: TaskListProps){
    const [showEditForm, setShowEditForm] = useState<boolean>(false);
    const [selectedTaskId, setSelectedTaskId] = useState<number>(0)

    const getTaskId = (x: number): number => {
        return x
    }

    const displayEditForm = (id: number): void => {
        setShowEditForm(true);
        setSelectedTaskId(getTaskId(id));
    }

      return(
        <section>
            {
                // Conditional statement to render and display tasks
                tasks.length <= 0 ? <article>
                    <p>No Tasks Yet.</p>
                    <h3>Fill form to add Task</h3>
                </article> : tasks.map(task => (
                    <article key={task.id} className='flex justify-around m-2 border border-gray-400 gap-5 py-1 px-2 rounded-2xl bg-gray-300 items-center'>
                        <p className='font-bold'>
                            {task.title}
                        </p>
                        <p>
                            {task.priority}
                        </p>
                        <p>
                            {task.status}
                        </p>

                        <article className='flex gap-2 justify-between'>
                            <button  className='bg-blue-700 text-white w-fit px-4 py-2 m-auto rounded-xl' onClick={() => {
                                displayEditForm(task.id);
                            }}>
                                Edit
                            </button>

                            <button className='text-gray-50 bg-red-500 rounded-lg px-3 py-1 w-fit' onClick={() => {
                                const confirmDeletion = confirm("Deleting this task will remove it from all Task lists.\n Are you sure?")
                                
                                if(confirmDeletion){
                                    handleDelete(task.id)
                                }
                            }}>
                                X
                            </button>
                        </article>
                    </article>
                ))
            }

            {
                showEditForm && <EditTaskForm taskId={selectedTaskId}  tasks={tasks} setTasks={setTasks} setShowEditForm={setShowEditForm}/>
            }
        </section>
    )
}

export default TaskList;