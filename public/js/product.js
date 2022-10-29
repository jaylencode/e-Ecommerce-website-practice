const productImages = document.querySelectorAll(".product-images img"),
productImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, index) => {
    item.addEventListener("click", () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`
        activeImageSlide = index;
    })
})

// toggle size buttons
const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, index) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check')
        checkedBtn = index;
    })
})
