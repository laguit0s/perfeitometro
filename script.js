// VARIÁVEIS GERAIS
let pop_up_texto = document.querySelector('#pop-up-texto')
let pop_up = document.querySelector('.pop-up')
let pop_up_background = document.querySelector('.pop-up-background');
let curiosidade_nome = document.querySelector('#curiosidade-nome');
let curiosidade_data = document.querySelector('#curiosidade-data');
let verificar_nome = document.querySelector('#verificar-nome');
let verificar_data = document.querySelector('#verificar-data')
let nome = document.querySelector('#nome')
let data = document.querySelector('#data')
let analisar_perfeicao = document.querySelector('#analisar-perfeicao')
let ultima_mensagem = null

// FUNÇÕES
function randomizar(array) {
    while (true) {
        let aleatorio = Math.floor(Math.random() * array.length);
        if (ultima_mensagem == aleatorio) {
            continue
        } else {
            ultima_mensagem = aleatorio
            return array[aleatorio]
        }        
    }
}

// LISTA DE MENSAGENS
let curiosidades_nome = [
    'Você sabia que nomes com a letra "J" indicam que a pessoa possui maiores tendências a ser perfeita? &#128525;',
    'A letra "J" não entra à toa nos nomes. Ela sabe que quem a carrega é irresistível &#128156;',
    'Pesquisas comprovam que pessoas com "J" no nome têm um charme descomunal &#128149;',
    'Cientistas indicam que os nomes com a letra "J" são comumente associados a pessoas que possuem uma incrível combinação de charme e inteligência &#129504;',
    'Pesquisas sugerem que nomes com "J" realçam a beleza natural de uma pessoa &#11088;',
]
let curiosidades_data = [
    'Você sabia que pessoas nascidas em março tendem a ser inexplicavelmente bonitas? Cientistas afirmam que pessoas nascidas especificamente no dia 8 desse mês possuem um elevado teor de gostosura &#127800;',
    'Março é o mês da beleza, e quem nasce no dia 8 é o auge dessa perfeição &#128151;',
    'Pessoas de março sempre chamam atenção, mas quem nasce no dia 8? Essa pessoa é o centro das atenções &#10024;',
    'Estudiosos afirmam que quem nasce em março tem uma beleza natural &#127799;',
    'Março é o mês das pessoas encantadoras, mas quem nasce no dia 8 é puro charme &#128536;'
]
let nomes_incorretos = [
    'Ops... esse nome é bonito, mas a perfeição só tem um nome.',
    'Hmm... interessante. Mas você realmente acha que esse nome tem potencial? Pense de novo.',
    'Que nome legal! Mas, infelizmente, a perfeição não atende por esse nome.',
    'Ué... será que você digitou errado? Porque esse nome não consta em nosso registro da perfeição.',
    'Esse nome até que é simpático... mas não tem aquele brilho.',
    'Parece que alguém tentou reinventar a perfeição... mas falhou miseravelmente.',
    'Se a perfeição fosse uma equação, esse nome não seria a solução.',
    'Esse nome até poderia ganhar um prêmio de consolação... mas não de perfeição.',
    'Esse DEFINITIVAMENTE não é de alguém perfeito.',
    'Essa tentativa foi fofa, mas perfeição mesmo só tem um nome verdadeiro.',
    'Parece que você está tentando desafiar a lógica do universo... mas só há um nome perfeito.',
    'Esse nome até poderia ganhar um prêmio de consolação... mas não de perfeição.',
    'Tenho certeza de que a sua mãe te ama muito! Só não dá para dizer que é o nome perfeito...',
    'Hmm... um nome quase digno, mas a perfeição já foi reivindicada.',
    'Esse nome tem estilo, mas a perfeição já escolheu seu favorito.'
]
let datas_incorretas = [
    'Computando... nenhuma pessoa perfeita nasceu nessa data.',
    'Verificando bancos de dados... Nada encontrado na categoria "Perfeição".',
    'Hmm... essa data parece comum demais para pertencer a alguém realmente perfeito.',
    'Infelizmente, os registros históricos não apontam ninguém perfeito nascido nessa data.',
    'Essa data tem potencial... mas ainda não alcança o status de perfeição máxima.',
    'Se perfeição tivesse uma data de nascimento, essa definitivamente não seria a escolhida.',
    'Nada contra essa data, mas não há registros de perfeição vinculados a ela.',
    'Sabe o que aconteceu nesse dia? Nada de extraordinário o suficiente para conter perfeição.',
    'Erro no sistema: Perfeição não identificada para essa data.',
    'Quase... mas a perfeição exige um momento exato para nascer, e esse não foi um deles.',
    'Essa data tem história, mas nenhuma perfeição associada a ela.',
    'A astrologia nega qualquer relação entre essa data e a perfeição absoluta.',
    'Consultando arquivos... e a resposta é: pessoa comum.',
    'Quase lá... mas a verdadeira perfeição nasceu em outro dia.',
    'Interessante... mas não é uma data digna de alguém perfeito.'
]
let julhya_nome_data = [
    'Um nome único para uma pessoa única? Esse com certeza é um nome digno de uma pessoa perfeita...',
    'Oito do três de dois mil e seis? Além de rimar, essa data coincide perfeitamente com o nascimento de uma pessoa perfeita...'
]
let guilherme_nome_data = [
    'Que nome esquisito! Provavelmente deve ser de algum nerd baiano que usa óculos e gosta de programação...',
    '24? Esse aí é tchola.'
]  
let julhya_perfeita = [
    'Certificamos que é <span class="bold">INEGÁVEL</span> que <span class="bold">JULHYA</span>, nascida em 08/03/2006, é a pessoa com os <span class="bold">MAIORES</span> índices de <span class="bold">PERFEIÇÃO</span> já registrados neste sistema, visto que, <span class="bold">NENHUMA</span> outra pessoa <span class="bold">NESTE MUNDO</span> pode ser considerada 100% perfeita, com exceção da <span class="bold">JULHYA</span> - que ultrapassou <span class="bold">COMPLETAMENTE</span> os limites humanos da perfeição por meio de seus <span class="bold">BELOS CABELOS CACHEADOS</span>, <span class="bold">CORPO SENSUAL</span> e <span class="bold">INTELIGÊNCIA INIGUALÁVEL</span>.',
]
let guilherme_perfeito = [
    'Certificamos que <span class="bold">GUILHERME</span>, nascido em 24/05/2007, é uma pessoa <span class="bold">PERFEITA</span> de acordo com métricas <span class="bold">ALTERNATIVAS</span>. Apesar de ser uma criatura <span class="bold">TERRÍVEL</span> em <span class="bold">APARÊNCIA</span> e <span class="bold">INTELECTO</span>, essa pessoa está <span class="bold">ESTRANHAMENTE APTA</span> para exercer a função de <span class="bold">MARIDO</span> da pessoa mais <span class="bold">PERFEITA</span> do <span class="bold">MUNDO</span>.'
]

// INTERATIVIDADE
curiosidade_nome.addEventListener('click', (event) => {
    event.preventDefault();
    pop_up_background.style.display = 'flex'
    pop_up_texto.innerHTML = randomizar(curiosidades_nome)
})
curiosidade_data.addEventListener('click', (event) => {
    event.preventDefault();
    pop_up_background.style.display = 'flex'
    pop_up_texto.innerHTML = randomizar(curiosidades_data)
})
verificar_nome.addEventListener('click', (event) => {
    event.preventDefault();
    pop_up_background.style.display = 'flex'
    if (nome.value.toLowerCase() != 'julhya' && nome.value.toLowerCase() != 'guilherme' && nome.value.includes(' ') == false && nome.value != '') {
        pop_up_texto.innerHTML = randomizar(nomes_incorretos)
    } else if (nome.value.toLowerCase() == 'guilherme') {
        pop_up_texto.innerHTML = guilherme_nome_data[0]
    } else if (nome.value.toLowerCase() == 'julhya') {
        pop_up_texto.innerHTML = julhya_nome_data[0]
    } else if (nome.value == '') {
        pop_up_texto.innerHTML = 'Hmm... Parece que você não forneceu nenhum nome ainda.'
    } else {
        pop_up_texto.innerHTML = 'Trabalhamos apenas com o primeiro nome! Tente novamente.'
        nome.value = ''
    }

})
verificar_data.addEventListener('click', (event) => {
    event.preventDefault();
    pop_up_background.style.display = 'flex'
    if (data.value != '2006-03-08' && data.value != '2007-05-24' && data.value != '') {
        pop_up_texto.innerHTML = randomizar(datas_incorretas)
        console.log(data.value)
    } else if (data.value == '2006-03-08') {
        pop_up_texto.innerHTML = julhya_nome_data[1]
    } else if (data.value == '2007-05-24') {
        pop_up_texto.innerHTML = guilherme_nome_data[1]
    } else {
        pop_up_texto.innerHTML = 'Hmm... Parece que você não forneceu nenhuma data ainda.'
    }
})
analisar_perfeicao.addEventListener('click', (event) => {
    event.preventDefault();
    pop_up_background.style.display = 'flex';
    let nomeFormatado = nome.value.trim().toLowerCase();
    let dataFormatada = data.value.trim();
    if (nomeFormatado === '' || dataFormatada === '') {
        pop_up_texto.innerHTML = 'Hmm... Parece que você não forneceu um nome ou data.';
        return;
    }
    let partesData = dataFormatada.split('-'); 
    let dataFormatadaBr = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

    if (nomeFormatado === 'julhya' && dataFormatada === '2006-03-08') {
        pop_up_texto.innerHTML = julhya_perfeita[0];
        return;
    }
    if (nomeFormatado === 'guilherme' && dataFormatada === '2007-05-24') {
        pop_up_texto.innerHTML = guilherme_perfeito[0];
        return;
    }
    if (nome.value.trim().includes(' ')) {
        pop_up_texto.innerHTML = 'Trabalhamos apenas com o primeiro nome! Tente novamente.';
        nome.value = '';
        return;
    }
    pop_up_texto.innerHTML = `Certificamos que <span class="bold">${nome.value.toUpperCase()}</span>, nascido(a) em ${dataFormatadaBr}, <span class="bold">DEFINITIVAMENTE</span> é uma pessoa <span class="bold">ORDINÁRIA</span>, portanto, <span class="bold">NÃO</span> pode ser considerada uma pessoa <span class="bold">PERFEITA</span>.`;
});    
pop_up_background.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target === pop_up_background) {
        pop_up_background.style.display = 'none'
    }
})

// ANIMAÇÃO
const popUp = document.querySelector('.pop-up');
popUp.addEventListener('mousemove', (e) => {
    const rect = popUp.getBoundingClientRect(); 
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    const rotateX = (y / rect.height - 0.5) * 30; 
    const rotateY = -(x / rect.width - 0.5) * 30; 
    popUp.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
popUp.addEventListener('mouseleave', () => {
    popUp.style.transform = 'rotateX(0deg) rotateY(0deg)';
});