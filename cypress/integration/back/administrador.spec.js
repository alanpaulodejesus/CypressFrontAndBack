/// <reference types ="cypress"/>
const gerarCpf = require('gerar-cpf')
import faker from 'faker'

const email = faker.internet.email();
const telefone = faker.phone.phoneNumber()
const primeiroNome = faker.name.firstName();
const segundoNome = faker.name.lastName();

describe('Administrador', ()=>{

    it('Cadastrar Administrador com sucesso', ()=>{

        cy.getToken('email para logar', 'senha')

        .then(token =>{

                cy.request({

                    url: '/apiDoProject/v999/administratorDeTodoProjeto',
                    method:'POST',
                    headers:{ Authorization: `Bearer ${token}` },
                    body:{
                        
                        createdFrom: 'admin',
                        ein: gerarCpf(),
                        email: email,
                        groups: '5b51e6df5f4ad9d5c8042e44',
                        isActive: true,
                        name: primeiroNome + segundoNome,
                        phone: telefone
                        
                    },
                    failOnStatusCode: false

                })
                .as('response');
        
                cy.get('@response').its('status').should('be.equal', 200);
                /*
                cy.get('@response').then(res =>{
                    expect(res.status).to.be.equal(200);
                })
                */
        })
                
    })   
}) 
    

