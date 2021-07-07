const registerHTML = `
        <button class="register-wrapper__close-button">
        <i class="fas fa-times"></i>
          </button>
          <div class="register-wrapper__container-form">
            <i class="far fa-user"></i>
            <form>
                <label for="register_username">Username</label>
                <input type="text" id="register_username" placeholder="Enter username">
                <label for="register_email">Email</label>
                <input type="email" id="register_email" placeholder="Enter email">
                <label for="register_password">Password</label>
                <input type="password" id="register_password" placeholder="Enter password">
                <label for="register_confirm-password">Confirm Password</label>
                <input type="password" id="register_confirm-password" placeholder="Enter password">
                <label for="register_checkbox">Remember me</label>
                <input type="checkbox"id="register_checkbox">
                <input type="submit">
          </form>
          </div>`;
const mainNavigationHTML = `
          <div class="button-container">
              <button class="menu-button-navigation"><i class="fas fa-times"></i></button>
          </div>
          <div class="nav-items">
              <ul>
                  <li>
                        <a class="nav-link">Men</a>
                  </li>
                  <li>
                        <a class="nav-link">Women</a>
                  </li>
                  <li>
                        <a class="nav-link">Kids</a>
                  </li>
              </ul>
          </div>`;

const loginHTML = `
            <div class="login-form__container-form">
                <button class="login-close-button"><i class="fas fa-times"></i></button>
              <form>
                <label for="form_username">Username</label>
                <input
                  type="text"
                  id="form_username"
                  placeholder="Enter username"
                />
                <label for="form_password">Password</label>
                <input
                  type="password"
                  id="form_password"
                  placeholder="Enter password"
                />
                <input type="submit" />
                <span
                  >Not registered yet?</span
                >
                <button class="form_register-btn">Register</button>
              </form>
            </div>
`;

export { registerHTML, mainNavigationHTML, loginHTML };
