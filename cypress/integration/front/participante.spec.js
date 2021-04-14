/// <reference types ="cypress"/>
import faker from 'faker'

const Participante = require('../../page-objects/participante.po')
const Login = require('../../page-objects/login.po')
const gerarCpf = require('gerar-cpf')

const nome = faker.name.firstName();
const email = faker.internet.email();

describe('Participantes', ()=>{

    const participantePage = new Participante();
    const loginPage = new Login();

    before(()=>{
        cy.UrlAdm();
        loginPage.loginComSucesso();
    })
    
    
    it('Cadastrar participante com Sucesso', ()=>{

        participantePage.clicarMenuParticipantes();
        participantePage.clicarComandoNovoParticipante();
        participantePage.preencherCadastroParticipante(nome, email, gerarCpf());
    
    })

    after(()=>{
        loginPage.logout();
    })
})

