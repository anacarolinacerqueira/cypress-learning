// 'describe' é a palavra reservada que define o nome da suíte de testes no cypress
describe('home page', ()=>{
    //'it' é a palavra reservada que define o nome do caso de teste
    it('Validar que página esteja online', ()=>{
        //'cy.viewport' define a resolução da tela na qual o teste será executado
        cy.viewport(1440, 900)
        //'cy.visit' é utilizado para definir o endereço que deve ser acessado
        cy.visit('http://buger-eats.vercel.app')
        //'cy.get' busca por elemento determinado na página
        //'.should é a função que realiza o "assert", passando os argumentos 'have.text', e em seguida o valor que deve estar no campo
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})