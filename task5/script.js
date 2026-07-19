const btn = document.getElementById('fetchBtn');
const input = document.getElementById('userId');
const todoList = document.getElementById('todoList');

btn.addEventListener('click', () => {
  const userId = input.value;
  
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    .then((response) => response.json())
    .then((data) => {
      todoList.innerHTML = ''; 
      
      if (data.length === 0) {
        todoList.textContent = 'Пользователь с указанным id не найден';
      } else {
        data.forEach(todo => {
          const li = document.createElement('li');
          li.textContent = todo.title;
          
          if (todo.completed) {
            li.style.textDecoration = 'line-through';
          }
          todoList.appendChild(li);
        });
      }
    })
    .catch(() => {
      console.log('Ошибка при получении данных');
    });
});