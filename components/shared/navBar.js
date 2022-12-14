import renderToDOM from '../../utils/renderToDOM';
import logo from '../../assets/hhpw_logo.png';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a href="#">
          <img src=${logo} alt="Hip Hop Pizza and Wangs Logo" width="40px" height="40px" id="navbar-hhpw-logo"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="view-orders">
                View Orders <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="create-order">Create an Order</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="view-revenue">Revenue</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="test-edit-item">Edit Item</a>
            </li>
          </ul>
          <span>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Orders"
              aria-label="Search"
            />
          </span>
          
          <div id="logout-button"></div>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navBar', domString);
};

export default navBar;
