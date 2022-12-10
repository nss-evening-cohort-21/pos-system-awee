const renderToDOM = (divId, html) => {
  document.querySelector(divId).innerHTML = html;
};

export default renderToDOM;
