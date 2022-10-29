const productContainers = [...document.querySelectorAll(".product-container")],
  preBtn = [...document.querySelectorAll(".pre-btn")],
  nxtBtn = [...document.querySelectorAll(".nxt-btn")];

productContainers.forEach((item, index) => {
  let containerDimentions = item.getBoundingClientRect();
  let containerWidth = containerDimentions.width;

  nxtBtn[index].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[index].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

