/// <reference types ="cypress"/>

describe('Participante', ()=>{

    let token;

    it('Cadastrar Participante com sucesso', ()=>{

            cy.getToken('email para logar', 'senha')
                    .then(tkn=>{
                        token = tkn;

                });

                        cy.request({
                    
                            url: '/apiDoProject/v999/administratorDeTodoProjeto',
                            method:'POST',
                            headers:{ Authorization: `Bearer ${token}` },
                            body:{
                                
                                birthdate: '01/01/2000',
                                ein: '562.977.200-70',
                                email: 'sdsds@sdsd.comdfd',
                                gender: 'male',
                                name: 'usuario inserio via api',
                                phone: '(31) 9999-999',
                                
                            },
                            failOnStatusCode: false
                        })//.then(res => Console.log(res));
                        .as('response');
                
                        cy.get('@response').its('status').should('be.equal', 200);
                    
                    

    })   
 

})
