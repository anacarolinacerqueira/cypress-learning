//import signup from '../pages/SignupPage'

// 'describe' é a palavra reservada que define o nome da suíte de testes no cypress
describe('home page', ()=>{
    //'it' é a palavra reservada que define o nome do caso de teste
    it('Validar que página esteja online', ()=>{
        
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        .and('be.visible')
    })
})