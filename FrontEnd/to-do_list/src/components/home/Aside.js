import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../../api';

import './Aside.css';

const Aside = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then(response => setTasks(response.data.items))
  }, [])

  console.log(tasks, 'foi');

  return (
    <div className='aside'>
      <h3>Tarefas</h3>
      {
        tasks.map((task) => (
          <div kay={ task._id }>{ task.title }</div>
        ))
      }
    </div>
  )
}

export default Aside;
