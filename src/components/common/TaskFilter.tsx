import { useState } from 'react';
import TaskDisplay from './TaskDisplay';
import type { Dispatch, SetStateAction } from 'react';

interface Task{
    id:number;
    title: string;
    priority: string;
    status: string;
}
interface TaskFilterProps{
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>
    handleDelete: (x: number) => void;
}

function TaskFilter({ tasks, handleDelete, setTasks }: TaskFilterProps){
    const [filter, setFilter] = useState<string>('');
   
    const filteredTask = tasks.filter(task => task.status === filter)

    return(
        <section className='m-2 border border-gray-400 py-1 px-2 rounded-2xl bg-gray-300'>
            <article className='text-center'>
                <label htmlFor='Filter' className=''>
                    Filter Tasks by Status:
                </label>
                <select id="Filter" className='font-bold ml-3 rounded-2xl bg-blue-700 p-1 text-white outline-0'
                value={filter}
                onChange={(e) => {
                    setFilter(e.target.value);
                }}
                >
                    <option value="">Select filter</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="not started">Not Started</option>
                </select>
            </article>

           {
            filteredTask && 
           <TaskDisplay tasks={filteredTask} handleDelete={handleDelete} setTasks={setTasks}/>
           }
        </section>
    )
}

export default TaskFilter;