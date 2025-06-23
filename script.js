let kartochki = document.querySelector('.kartochki')

console.log(fetch('https://fakestoreapi.com/products?limit=10'))

fetch('https://fakestoreapi.com/products?limit=10')
   .then(response => response.json())
   .then(data => {
    kartochki.innerHTML=''
    data.forEach(element => {
        let divCard = document.createElement('div')
        divCard.classList.add('card')
        divCard.innerHTML = `
        <img src="${element.img}" alt="" class="img">
            <h2 class="title">${element.title}</h2>
            <p class="description">${element.description}</p>
            <p class="category">${element.category}</p>
            <span class="price">${element.price}$</span>
            <button class="btn">Купить</button>
        `
        kartochki.appendChild(divCard)
    });

   })