class CategoryController {
  index(request, response) {
    response.send('ok - index');
  }

  store(request, response) {
    response.send('ok - store');
  }
}

module.exports = new CategoryController();
