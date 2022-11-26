import signup from '../pages/SignupPage'
import signupFactory from '../factories/signupFactory'

describe('cadastro', () => {

    beforeEach(function () {
        cy.log("Executa 1x antes de cada caso de teste")
    })

    after(function () {
        cy.log("Executa 1x depois de todos os casos de teste")
    })

    afterEach(function () {
        cy.log("Executa 1x depois de cada caso de teste")
    })

    it('Deve ser possível acessar a tela de cadastro ao clicar no botão', function () {

        var entregador = signupFactory.entregador()

        signup.clicarFormularioCadastro()
        signup.preencherFormulario(entregador)
        signup.enviarFormulario()
        signup.validarMensagemEsperadaSucessoForm("Aí Sim...")
    })

    it('Deve ser retornada mensagem de erro ao passar CPF inválido', function () {

        var entregador = signupFactory.entregador()

        entregador.cpf = "j398082h9j8d"

        signup.clicarFormularioCadastro()
        signup.preencherFormulario(entregador)
        signup.enviarFormulario()
        signup.validarMensagemDeErroEsperada("Oops! CPF inválido")

    })

    it('Usuário deve visualizar mensagens de erro ao enviar formulário sem preencher os campos obrigatórios', function () {

        signup.clicarFormularioCadastro()
        signup.enviarFormulario()
        signup.validarMensagemDeErroEsperada('É necessário informar o nome')
        signup.validarMensagemDeErroEsperada('É necessário informar o CPF')
        signup.validarMensagemDeErroEsperada('É necessário informar o email')
        signup.validarMensagemDeErroEsperada('É necessário informar o CEP')
        signup.validarMensagemDeErroEsperada('É necessário informar o número do endereço')
        signup.validarMensagemDeErroEsperada('Selecione o método de entrega')
        signup.validarMensagemDeErroEsperada('Adicione uma foto da sua CNH')

    })

})