import renderToDOM from '../utils/renderToDOM';

const orderDropdown = () => {
  const domString = `
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filter Orders</a>
    <ul class="dropdown-menu dropdown-menu-dark">
      <li><a class="dropdown-item" href="#" id="dropLinkOpen">Open Orders</a></li>
      <li><a class="dropdown-item" href="#" id="dropLinkClosed">Closed Orders</a></li>
      <li><a class="dropdown-item" href="#" id="dropLinkAll">All Orders</a></li>
    </ul>
  `;
  renderToDOM('#orderDropdownContainer', domString);
};

export default orderDropdown;
