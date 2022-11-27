# cypress-learning
Repositório do meu primeiro projeto para aprendizagem do framework de testes automatizados Cypress.

O sistema sob teste é o ["Buger Eats"](https://buger-eats.vercel.app/), e a arquitetura do projeto acompanha o que é proposto no curso [Cypress Discovery](https://app.qacademy.io/area/produto/item/148694), da QAcademy.

### Tecnologias e Padrões Utilizados:
Cypress, node, Faker.js, Page Objects Model (POM), Cypress Dashboard, Github Actions.

### Para Executar o projeto:

- Clonar o repositório;
- Para configurar o projeto localmente, no terminal, executar o comando: `npm install`;
- Para executar a suíte de testes (em modo headless), executar o comando: `npx cypress run`.

Ao realizar um push para o repositório, é executada uma **Action** do github, que valida o funcionamento dos testes. Os detalhes da execução podem ser visualizados no [Cypress Dashboard](https://cloud.cypress.io/invitation/65923293-24c5-4db1-85c4-b2f5e472a380).
