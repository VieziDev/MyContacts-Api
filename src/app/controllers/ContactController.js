const ContactsRepository = require('../repository/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Deletar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
