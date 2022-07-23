const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery')

const imgRef = images.map(({ url, alt }) => `<li style="list-style: none;"><img src="${url}" alt="${alt}" width=100% /></li>`)
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", imgRef);

// ==============STYLE==================

// galleryRef.style.display = 'grid';
// galleryRef.style.gridTemplateColumns = '1fr 1fr 1fr';
galleryRef.style.display = 'flex';
galleryRef.style.gap = '10px';
galleryRef.style.flexWrap = 'no-wrap';
galleryRef.style.justifyContent = 'center';
galleryRef.style.alignItems = 'center';
galleryRef.style.width = '100%';