/// <reference types ="cypress"/>

const campoLogin ='input[placeholder="Digite o email"]';
const campoSenha ='input[placeholder="Digite a senha"]';
const comandoEntrar ='.v-btn__content';
const validaAcessoUser='.user';
const menuSair ='i[class="v-icon grey--text darken-4 material-icons theme--light"]';
//const comandoSair ='span[text()="Sair"]';
const comandoSair ='.v-menu__content > .v-list > :nth-child(4) > .v-list__tile > .v-list__tile__title';

class Login{

    logout(){
        cy.clicarComando(menuSair);
        cy.clicarComando(comandoSair, {timeOut:25000});
    }

    loginComSucesso(){
        cy.escreverCampoTexto(campoLogin, 'xxxxxxxxx');
        cy.escreverCampoTexto(campoSenha,'xxxx');
        cy.clicarComando(comandoEntrar);
    }

    validaAcessoUsuario(){
        cy.get(validaAcessoUser, {timeOut:25000}).should('exist');
    }
}

module.exports = Login;