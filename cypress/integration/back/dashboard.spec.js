/// <reference types ="cypress"/>

describe('Dashboard', ()=>{

    it('Retorno Dashboard', ()=>{
            cy.getToken('email para logar', 'senha')
                .then(token=>{

                        cy.request({
                            url: '/apiDoProject/v999/administratorDeTodoProjeto',
                            method:'GET',
                            headers:{ Authorization: `Bearer ${token}` },
                            
                            failOnStatusCode: false
                        }).as('response');
                
                        cy.get('@response').its('status').should('be.equal', 200);        
                    
                });
                
    })   

})
