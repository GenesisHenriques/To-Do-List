import axios from "axios";

const BASE_URL = 'http://localhost:3000';

export async function fetchTasks(){
  const a = await axios.get(`http://localhost:3000/tasks`)
  .then(function (response) {
    console.log(response, 'response');
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
  console.log(a, 'aaaaa');
}

export async function a(){
  const response = await fetch(`${BASE_URL}/tasks`)

  const data = await response.json();
  return data;
}

export async function fetchTasksById(id){
  const response = await fetch(`${BASE_URL}/tasks/${id}`)
  const data = await response.json();

  return data;
}

