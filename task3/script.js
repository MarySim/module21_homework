const savedName = localStorage.getItem('userName');
const savedDate = localStorage.getItem('lastVisitDate');

if (!savedName) {
  const userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
  if (userName) {
    localStorage.setItem('userName', userName);
    localStorage.setItem('lastVisitDate', new Date().toLocaleString());
  }
} else {
  alert(`Добрый день, ${savedName}! Давно не виделись. В последний раз вы были у нас ${savedDate}`);
  localStorage.setItem('lastVisitDate', new Date().toLocaleString());
}