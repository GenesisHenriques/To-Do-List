const BASE_URL = 'http://localhost:3000';

export async function fetchTasks(){
  const response = await fetch(`${BASE_URL}/tasks`)

  const data = await response.json();
  return data;
}

export async function fetchTasksById(id){
  const response = await fetch(`${BASE_URL}/tasks/${id}`)
  const data = await response.json();

  return data;
}

