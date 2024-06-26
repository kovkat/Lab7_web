const images = [
  {
    preview:
      '<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg>',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg>',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg>',
    description: 'Aerial Beach View',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg>',
    description: 'Flower Blooms',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg>',
    description: 'Alpine Mountains',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg>',
    description: 'Mountain Lake Sailing',
  },
];

const imageGallery = document.querySelector('.gallery');

// Створення розмітки для галереї
const galleryMarkup = images.map(({ preview, original, description }) => {
    return `<li class="gallery-item">
  <a class="gallery-link" href="${removeFirstLastChar(original)}">
    <img class="gallery-image" src="${removeFirstLastChar(preview)}" data-source="${removeFirstLastChar(original)}" alt="${description}"  /></a></li>`;
});

// Вставляємо розмітку в галерею
imageGallery.insertAdjacentHTML('beforeend', galleryMarkup.join(''));

// Обробник кліку для збільшення фотографії
imageGallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName === 'IMG') {
        showModal(event.target.dataset.source);
    }
});

// Функція відкриття модального вікна
function showModal(imageSrc) {
    const modalInstance = basicLightbox.create(
        `
    	<img src="${imageSrc}" width="1112" height="640">
    `, {
            className: 'modal',

            onShow: modalInstance => {
                document.addEventListener('keydown', onEscapePress);
            },

            onClose: modalInstance => {
                document.removeEventListener('keydown', onEscapePress);
            },
        }
    );

    modalInstance.show();

    function onEscapePress(event) {
        if (event.code === 'Escape') {
            modalInstance.close();
        }
    }
}

// Функція для видалення першого і останнього символа в рядку
function removeFirstLastChar(string) {
    return string.slice(1, -1);
}
