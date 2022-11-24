class SignupPage {
    
    clicarFormularioCadastro(){
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
    }

    preencherFormulario (entregador){
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

    }

    enviarFormulario(){
        cy.get('.button-success').click()
    }

    validarMensagemEsperadaSucessoForm(mensagemEsperada){
        cy.get('h2#swal2-title').should('have.text', mensagemEsperada)
        cy.get('button.swal2-confirm').click()
    }

    validarMensagemEsperadaCPFInvalido(mensagemEsperada){
        cy.get('.alert-error').should('have.text', mensagemEsperada)
        
    }
}

export default SignupPage;