describe ('cadastro', ()=>{
    it('Deve ser possível acessar a tela de cadastro ao clicar no botão', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        //apenas um checkpoint, e não uma validação real. Garante que o link chega ao endereço certo.
        cy.get('form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            'nome': 'Ana Carolina',
            'cpf': '12345685488',
            'email': 'teste@teste.com',
            'whatsapp': '71999999999',
            'endereco': {
                'cep': '89010000',
                'rua': 'Rua 15 de Novembro',
                'numero': '123',
                'complemento': '2 andar',
                'bairro': 'Centro',
                'cidade_uf': 'Blumenau/SC' 
            },
            'metodo_entrega': 'Moto',
            'cnh': 'cypress/fixtures/cnh-digital.jpg'
        }

        cy.get('.field input[name="name"]').type(entregador.nome)
        cy.get('.field input[name="cpf"]').type(entregador.cpf)
        cy.get('.field input[name="email"]').type(entregador.email)
        cy.get('.field input[name="whatsapp"]').type(entregador.whatsapp)
        cy.get('.field input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('.field input[type="button"]').click()
        cy.get('.field input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('.field input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('.field input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('.field input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('.field input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li span', entregador.metodo_entrega).click()

        cy.get('.dropzone input').selectFile(entregador.cnh,{force: true})

        cy.get('.button-success').click()
        cy.get('#swal2-title').should('have.text', "Aí Sim...")
        cy.get('button.swal2-confirm').click()

    })
})