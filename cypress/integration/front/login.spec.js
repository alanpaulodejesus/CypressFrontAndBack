/// <reference types ="cypress"/>
const Login = require('../../page-objects/login.po')

describe('Login', ()=>{

    const loginPage = new Login();

    before(()=>{
        cy.UrlAdm();
    })

    it('Realizar Login com Sucesso', ()=>{
        
        loginPage.loginComSucesso();
        expect(loginPage.validaAcessoUsuario());
    })

    after(()=>{
        loginPage.logout();
    })
})

