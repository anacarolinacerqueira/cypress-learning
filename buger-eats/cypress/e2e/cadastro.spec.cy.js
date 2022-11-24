import SignupPage from '../pages/SignupPage'

describe ('cadastro', ()=>{

before(function(){
    cy.log("Executa 1x antes de todos os casos de teste")
})

beforeEach(function(){
    cy.log("Executa 1x antes de cada um dos casos de teste")
})

after(function(){
    cy.log("Executa 1x depois de todos os casos de teste")   
})

afterEach(function(){
    cy.log("Executa 1x depois de cada caso de teste")
})

    it('Deve ser possível acessar a tela de cadastro ao clicar no botão', ()=>{
       
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

        var signup = new SignupPage();

        signup.clicarFormularioCadastro()
        signup.preencherFormulario(entregador)
        signup.enviarFormulario()
        signup.validarMensagemEsperadaSucessoForm("Aí Sim...")
    })

    it('Deve ser retornada mensagem de erro ao passar CPF inválido', ()=>{
        
        var entregador = {
            'nome': 'Ana Carolina',
            'cpf': '123456854BB',
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

        var signup = new SignupPage();

        signup.clicarFormularioCadastro()
        signup.preencherFormulario(entregador)
        signup.enviarFormulario()
        signup.validarMensagemEsperadaCPFInvalido("Oops! CPF inválido")

    })
})