var faker = require('faker')

export default{

    entregador: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            nome: `${firstName} ${lastName}`,
            cpf: "12345685488",
            email: faker.internet.email(firstName),
            whatsapp: "71999999999",
            endereco: {
                cep: "89010000",
                rua: "Rua 15 de Novembro",
                numero: "123",
                complemento: "2 andar",
                bairro: "Centro",
                cidade_uf: "Blumenau/SC" 
            },
            metodo_entrega: "Moto",
            cnh: "cypress/fixtures/cnh-digital.jpg"
        }

        return data

    }

}