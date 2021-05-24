const products = [
    { id: 1, title: 'Notebook', price: "цена: " + 2000 + "₽", src: "https://static.onlinetrade.ru/img/items/m/1646131_1.jpg" },
    { id: 2, title: 'Mouse', price: "цена: " + 20 + "₽", src: "https://static.onlinetrade.ru/img/items/m/mysh_logitech_g102_karax_black_gaming_mouse_usb_910_005823__1362745_1.jpg" },
    { id: 3, title: 'Keyboard', price: "цена: " + 200 + "₽", src: "https://static.onlinetrade.ru/img/items/m/logitech_keyboard_k280e_usb_retail_920_005215__1.jpg" },
    { id: 4, title: 'Gamepad', price: "цена: " + 50 + "₽", src: "https://static.onlinetrade.ru/img/items/m/ps4_besprovodnoy_kontroller_playstation_5_dualsense_belyy_1569900_1.jpg" },
];
//Функция для формирования верстки каждого товара
const renderProduct = (title, price, src) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
                <img width="100%" src="${src}">
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.src));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join("");
};

renderPage(products);