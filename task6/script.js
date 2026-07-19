const pageInput = document.getElementById('pageInput');
const limitInput = document.getElementById('limitInput');
const btn = document.getElementById('requestBtn');
const messageBlock = document.getElementById('message');
const imagesContainer = document.getElementById('imagesContainer');

function displayImages(data) {
  imagesContainer.innerHTML = '';
  data.forEach(item => {
    const img = document.createElement('img');
    img.src = item.download_url;
    img.width = 200;
    imagesContainer.appendChild(img);
  });
}

const savedImages = localStorage.getItem('lastImages');
if (savedImages) {
  displayImages(JSON.parse(savedImages));
}

btn.addEventListener('click', () => {
  messageBlock.textContent = '';
  
  const page = Number(pageInput.value);
  const limit = Number(limitInput.value);

  const isPageValid = page >= 1 && page <= 10 && !isNaN(page);
  const isLimitValid = limit >= 1 && limit <= 10 && !isNaN(limit);

  if (!isPageValid && !isLimitValid) {
    messageBlock.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
  } else if (!isPageValid) {
    messageBlock.textContent = 'Номер страницы вне диапазона от 1 до 10';
  } else if (!isLimitValid) {
    messageBlock.textContent = 'Лимит вне диапазона от 1 до 10';
  } else {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        displayImages(data);
        localStorage.setItem('lastImages', JSON.stringify(data));
      })
      .catch(() => {
        console.log('Ошибка при получении данных');
      });
  }
});