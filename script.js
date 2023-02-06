

const form = document.querySelector("[data-form]");
const btn = document.querySelector("[data-btn]");
const input = document.querySelector("[data-input]");
const message = document.querySelector("[data-message]");
let op1 = '';
let op2 = '';
let op4 = '';
let op5 = '';
let op6 = '';
let op7 = '';
let op8 = '';
let op9 = '';
let nome = '';

btn.addEventListener('click', e => {
    e.preventDefault();
    nome += input.value;
    message.innerHTML = `${nome}`
    document.getElementById('audiovf').style.display='contents'
    document.getElementById('trade1').style.display='contents'
    document.getElementById('audiovf').style.display = 'inline'
    document.getElementById('tittle1').style.display = 'contents'
})

// function esconder() {
//     document.getElementById('inputname').style.display='none';
// }

btn.addEventListener('click', a => {
    document.getElementById('inputname').style.display = 'none';
    setTimeout(function () {
        document.getElementById('trade1').innerHTML = "A floresta é?"
        document.getElementById('questions1').style.display = 'contents';
        document.getElementById('audiovf').style.display = 'none'
        document.getElementById('tittle1').style.display = 'none'
    }, 127000)
})
//questão1
function enviar() {

    clara = document.getElementById('clara')
    escura = document.getElementById('escura')
    document.getElementById('questions1').style.display = 'none';
    if (clara.checked) {
        op1 = 'clara'
    }

    if (escura.checked) {
        op1 = 'escura'

    }
    document.getElementById('trade1').innerHTML = 'O cachorro é?'
    document.getElementById('questions1').style.display = 'none';
    document.getElementById('questions2').style.display = 'contents';

}

//questão 2

function enviar2() {

    amigavel = document.getElementById('amigavel')
    raivoso = document.getElementById('raivoso')

    if (amigavel.checked) {
        op2 = 'amigavel'

    }
    if (raivoso.checked) {
        op2 = 'raivoso'

    }
    document.getElementById('trade1').innerHTML = 'Na sua jornada você leva o cachorro consigo?'
    document.getElementById('questions2').style.display = 'none';
    document.getElementById('questions3').style.display = 'contents';

}

//questão 3
function enviar3() {

    levo = document.getElementById('levo')
    naolevo = document.getElementById('naolevo')

    if (levo.checked) {
        op3 = 'levo'

    }
    if (naolevo.checked) {
        op3 = 'naolevo'

    }
    document.getElementById('trade1').innerHTML = 'O jarro, de que material é?'
    document.getElementById('questions3').style.display = 'none';
    document.getElementById('questions4').style.display = 'contents';

}

//qustão 4
function enviar4() {

    ouro = document.getElementById('ouro')
    barro = document.getElementById('barro')
    porcelana = document.getElementById('porcelana')
    if (ouro.checked) {
        op4 = 'ouro'
    }

    if (barro.checked) {
        op4 = 'barro'
    }

    if (porcelana.checked) {
        op4 = 'porcelana'
    }
    document.getElementById('trade1').innerHTML = 'Você leva consigo ou não?'
    document.getElementById('questions4').style.display = 'none';
    document.getElementById('questions5').style.display = 'contents';
}

//qustão 5
function enviar5() {

    levo = document.getElementById('levo')
    naolevo = document.getElementById('naolevo')

    if (levo.checked) {
        op5 = 'levo'

    }
    if (naolevo.checked) {
        op5 = 'naolevo'

    }
    document.getElementById('trade1').innerHTML = 'Como é a aparencia desse lago?'
    document.getElementById('questions5').style.display = 'none';
    document.getElementById('questions6').style.display = 'contents';

}

//qustão 6
function enviar6() {

    claro = document.getElementById('claro')
    turvo = document.getElementById('turvo')

    if (claro.checked) {
        op6 = 'claro'

    }
    if (turvo.checked) {
        op6 = 'turvo'

    }
    document.getElementById('trade1').innerHTML = ' você entra nele?'
    document.getElementById('questions6').style.display = 'none';
    document.getElementById('questions7').style.display = 'contents';

}

//qustão 7
function enviar7() {

    entro = document.getElementById('entro')
    naoentro = document.getElementById('naoentro')


    if (entro.checked) {
        op7 = 'entro'

    }
    if (naoentro.checked) {
        op7 = 'naoentro'

    }
    document.getElementById('trade1').innerHTML = 'O muro de que material é?'
    document.getElementById('questions7').style.display = 'none';
    document.getElementById('questions8').style.display = 'contents';

}

//questao 8

function enviar8() {

    pedra = document.getElementById('pedra')
    concreto = document.getElementById('concreto')
    cercaviva = document.getElementById('cercaviva')
    if (pedra.checked) {
        op8 = 'pedra'

    }
    if (concreto.checked) {
        op8 = 'concreto'

    }
    if (cercaviva.checked) {
        op8 = 'cercaviva'
    }
    document.getElementById('trade1').innerHTML = 'Quanto ao muro você atravessa?'
    document.getElementById('questions8').style.display = 'none';
    document.getElementById('questions9').style.display = 'contents';

}

//questao 9
function enviar9() {

    atravesso = document.getElementById('atravesso')
    naoatravesso = document.getElementById('naoatravesso')

    if (atravesso.checked) {
        op9 = 'atravesso'

    }
    if (naoatravesso.checked) {
        op9 = 'naoatravesso'

    }
    document.getElementById('questions9').style.display = 'none';
    document.getElementById('resposta').style.display = 'block';
    document.getElementById('trade1').style.display = 'none'

    if (op1 == 'clara') {
        document.getElementById('floresta').innerHTML = 'Floresta Clara: Você é uma pessoa que vê a vida de uma forma livre e sem medos de viver...';
    }
    if (op1 == 'escura') {
        document.getElementById('floresta').innerHTML = 'Floresta Escura: Você é uma pessoa que tem dificuldades em enchergar a vida, existe obstáculos e você possui medos...';
    }
    if (op2 == 'amigavel'){
        document.getElementById('cachorro').innerHTML= 'Cachorro Amigável: Você é uma pessoa que confia fácil, e possui facilidade em fazer amizades...'
    }
    if (op2 == 'raivoso'){
        document.getElementById('cachorro').innerHTML= 'Cachorro Raivoso: Você é uma pessoa que não confia facilmente em outras pessoas e possui dificuldades em fazer amizade.'
    }
    if (op3 == 'levo'){
        document.getElementById('cachorro2').innerHTML= 'Levo o Cachorro: Você é uma pessoa que valoriza as amizades e tenta sempre levalas para toda sua vida'
    }
    if (op3 == 'naolevo'){
        document.getElementById('cachorro2').innerHTML= 'Não Levo o Cachorro: Apesar de fazer amizades e valorizalas você não sente necessidade delas, não visa leva-las para o resto de sua vida.'
    }
    if (op4 == 'ouro'){
        document.getElementById('jarro').innerHTML= 'Jarro De Ouro: Este material diz sobre suas relações com bens materias, ouro, você é uma pessoa que é muito apegada a bens materiais.'
    }
    if (op4 == 'barro'){
        document.getElementById('jarro').innerHTML= 'Jarro De Barro: Este material diz sobre suas relações com bens materias, Barro, você é uma pessoa que enxerga o bem material como algo simples, você não preza muito por bens '
    }
    if (op4 == 'porcelana'){
        document.getElementById('jarro').innerHTML='Jarro De Barro: Este material diz sobre suas relações com bens materias, Porcelana, você é uma pessoa que não é apegada aos bens embora saiba valorizar-los.'
    }
    if (op5 == 'levo'){
        document.getElementById('jarro2').innerHTML='Levo o Jarro: Você ao levar este bem significa que você não consegue facilmente passar por mudanças materias em sua vida'
    }
    if (op5 == 'naolevo'){
        document.getElementById('jarro2').innerHTML='Não Levo o Jarro: Você ao decidir não levar consigo esse bem significa que você está apto a se desfazer de qualquer coisa e passar por uma mudança material em sua vida.'
    }
     if (op6 == 'claro'){
        document.getElementById('lago').innerHTML='Lago claro: Você encherga os prazeres da vida de forma clara, boa, sem obstáculos sabe aproveitar e viver cada momento.'
    }
    if (op6 == 'escuro'){
        document.getElementById('lago').innerHTML='Lago escuro: Você tem medo de alguns prazeres ou receio, tenta sempre saber o que tem por vir antes de se entregar ou entender aquele momento.'
    }
    if (op7 == 'entro'){
        document.getElementById('lago2').innerHTML='Entro no lago: Você é uma pessoa impulsiva, faz o que quer sem pensar'
    }
    if (op7 == 'naoentro'){
        document.getElementById('lago2').innerHTML='Não entro no lago: Você é uma pessoa que pensa antes de fazer qualquer coisa, uma pessoa centrada.'
    }
    if (op8 == 'pedra'){
        document.getElementById('muro').innerHTML='Muro De Pedra: esta característica reflete no seu medo da morte, a pedra é um material natural então você aceita ela naturalmente.'
    }
    if (op8 == 'concreto'){
        document.getElementById('muro').innerHTML='Muro De concreto: esta característica reflete no seu medo da morte, e o concreto é um material produzido pelos homens, você tem medo de morrer de uma forma não natural'
    }
    if (op8 == 'cercaviva'){
        document.getElementById('muro').innerHTML='Muro Cerca viva: esta característica reflete no seu medo da morte, e a cerca viva é um material natural e facilmente formado pela natureza, você aceita ela naturalmente e encherga ela como um recomeço ou até mesmo uma fase da vida.'
    }
    if (op9 == 'atravesso'){
        document.getElementById('muro2').innerHTML='Atravesso o muro: Essa característica reflete diretamente na sua personalidade, atravessar diz que você não tem medo de nenhum fim e te torna uma pessoa otimísta'
    }
    if (op9 == 'naoatravesso'){
        document.getElementById('muro2').innerHTML='Não Atravesso  O Muro: Essa característica reflete diretamente na sua personalidade, Não atravessar diz que você tem medo de finais e te torna uma pessoa persimista.'
    }

    
}