import './App.css'
import StatsCard from './components/common/StatsCard'
import TaskForm from './components/common/TaskForm'
import TaskDisplay from './components/common/TaskDisplay'
import TaskFilter from './components/common/TaskFilter'
import type { Task } from './components/types/TypeTasks'
import { useState, useEffect } from 'react'

class TaskClass{
  id:number;
  title:string;
  priority:string;
  status:string;

  constructor(id: number, title: string, priority: string, status: string){
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.status = status
  }
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('Tasks');

    return savedTasks ? JSON.parse(savedTasks) : []
  });
  
  const [pendingTasksCount, setPendingTasksCount] = useState<number>(0);
  const [completedTasksCount, setCompletedTasksCount] = useState<number>(0);

  const handleDelete = (x: number): void => {
    setTasks(prevTask => prevTask.filter(task => task.id !== x))
  }

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));

    const pendingCount = tasks.filter(task => task.status === 'pending').length;
    setPendingTasksCount(pendingCount);

    const completedCount = tasks.filter(task => task.status === 'completed').length;

    setCompletedTasksCount(completedCount)
  }, [tasks])

  const checkUndoneTasksCounts = (): number => {
    return tasks.length - (pendingTasksCount + completedTasksCount)
  }
  

 return(
  <>
    <header className='text-center'>
      <h1 className='text-5xl font-bold'>
        ZenoTask
      </h1>

      <h2>
        Manage your tasks with real time updates
      </h2>
    </header>
    <main>
      <section className='flex justify-around my-20 gap-5 mx-5'>
        <StatsCard 
        statTitle='Tasks'
        statValue={tasks.length}
        />
        
        <StatsCard 
          statTitle='Tasks Pending'
          statValue={pendingTasksCount}
        />
        <StatsCard 
          statTitle='Completed Tasks'
          statValue={completedTasksCount}
        />

        <StatsCard 
          statTitle='Tasks Not Attempted'
          statValue={checkUndoneTasksCounts()}
        />
      </section>

      <section className='flex gap-5 justify-around'>
        <section className='bg-gray-100 p-5 rounded-xl border border-gray-300 w-fit flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>
            Add New task
          </h2>
          <TaskForm TaskClass={TaskClass} setTasks={setTasks}/>
        </section>

        <section className='bg-gray-100 p-5 rounded-xl border border-gray-300 w-full flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>
            Task List
          </h2>

          <p>
            Manage your Tasks
          </p>

          <TaskDisplay tasks={tasks} handleDelete={handleDelete} setTasks={setTasks}/>

          <button className='bg-red-700 text-white w-fit px-16 py-2 m-auto rounded-xl' onClick={() => {
            const canClearAll = confirm('Are you Sure you want to Clear All?');

            if(canClearAll){
              setTasks([])
            }
          }}>
            Clear All
          </button>
        </section>
      </section>

      <section>
        <TaskFilter tasks={tasks} handleDelete={handleDelete}/>
      </section>
    </main>
  </>
 )
}

export default App
