/// <reference types ="cypress"/>

describe('Login', ()=>{

    it('Login com sucesso', ()=>{

                cy.request({
                    url: '/apiDoProject/v999/administratorDeTodoProjeto',
                    method:'POST',
                    body:{
                        email: 'xxxxxxxxx',
                        password:'xxxx'
                    }
                })//.its('body.token').should('not.be.empty')
                .as('response');
                cy.get('@response').its('status').should('be.equal', 200);
    })   

    it('Login inválido', ()=>{

        cy.request({
            url: '/apiDoProject/v999/administratorDeTodoProjeto',
            method:'POST',
            failOnStatusCode: false,
            body:{
                email: 'xxxxxxxxxxx',
                password:'1234566'
            }
        }).as('response');

        cy.get('@response').its('status').should('be.equal', 401);
    })   

})