const createFooter = () => { 
    let footer = document.querySelector("footer")

    footer.innerHTML = `
    <div class="footer-content">
    <img src="/assets/light-logo.png" class="logo" alt="logo" />
    <div class="footer-ul-container">
      <ul class="category">
        <li class="category-title">men</li>
        <li><a href="#" class="footer-link">t-shirt</a></li>
        <li><a href="#" class="footer-link">sweatshirt</a></li>
        <li><a href="#" class="footer-link">shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">trousers</a></li>
        <li><a href="#" class="footer-link">shoes</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">formals</a></li>
        <li><a href="#" class="footer-link">sport</a></li>
        <li><a href="#" class="footer-link">watch</a></li>
      </ul>
      <ul class="category">
        <li class="category-title">women</li>
        <li><a href="#" class="footer-link">t-shirt</a></li>
        <li><a href="#" class="footer-link">sweatshirt</a></li>
        <li><a href="#" class="footer-link">shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">trousers</a></li>
        <li><a href="#" class="footer-link">shoes</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">formals</a></li>
        <li><a href="#" class="footer-link">sport</a></li>
        <li><a href="#" class="footer-link">watch</a></li>
      </ul>
    </div>
  </div>
  <p class="footer-title">about company</p>
  <p class="info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eveniet
    atque enim autem nesciunt a saepe ullam voluptate eum corporis?
    Accusantium laborum quisquam illum aliquid assumenda culpa id provident
    maiores, enim officiis fuga mollitia sunt nesciunt vero cumque aut
    repudiandae doloremque nulla, consequatur ea expedita. Error est, itaque
    nulla officia architecto aliquid vitae tempore, repellat quo pariatur
    tempora aperiam deserunt dolorem! Quas, reprehenderit maiores! Laborum
    libero dolorem quos doloribus neque dolore nesciunt, unde provident, non
    fugit odit? Expedita quisquam iste molestias consequuntur provident ad
    quis voluptatum eos asperiores, molestiae quo nostrum quaerat optio,
    sunt minima accusantium distinctio similique? Quod, sunt.
  </p>
  <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
  <p class="info">telephone - 1800 300 400 500, 1800 200 330 440</p>
  <div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms-services</a>
        <a href="#" class="social-link">privacy-page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
  </div>
  <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter()
