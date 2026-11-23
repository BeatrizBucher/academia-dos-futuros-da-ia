const houses = {
  conhecimento: { name: 'Casa do Conhecimento', value: 'Gosta de aprender e descobrir coisas novas. Acredita que a IA pode ajudar nos estudos, facilitar o acesso à informação e estimular novas ideias. Valoriza aprender, ensinar e criar.', phrase: 'Suas escolhas deram espaço ao aprendizado, ao ensino e à criação.', tone: '#b7a5ff' },
  humanidade: { name: 'Casa da Humanidade', value: 'Preocupa-se com outras pessoas. Pergunta se a IA está ajudando a sociedade, criando oportunidades e melhorando a vida de todos ou deixando algumas pessoas para trás. Valoriza pessoas, igualdade e bem-estar.', phrase: 'Suas escolhas destacaram as pessoas, a igualdade e o bem-estar.', tone: '#f3a9c1' },
  justica: { name: 'Casa da Justiça', value: 'Questiona se as coisas estão sendo feitas da maneira correta. Pensa sobre privacidade, preconceito, direitos autorais e responsabilidade pelo uso da IA. Valoriza respeito, ética e justiça.', phrase: 'Suas escolhas deram atenção ao respeito, à ética e à justiça.', tone: '#f4d49a' },
  inovacao: { name: 'Casa da Inovação', value: 'Gosta de tecnologia e de imaginar novas possibilidades. Acredita que a IA pode facilitar tarefas, criar soluções e transformar a maneira como trabalhamos e vivemos. Valoriza criatividade, tecnologia e progresso.', phrase: 'Suas escolhas exploraram criatividade, tecnologia e progresso.', tone: '#8ee7e1' }
};

const challenges = [
  {
    tag: 'Desafio 1 · Criatividade', title: 'A IA está substituindo a criatividade?',
    scenario: 'Uma empresa começa a usar IA para produzir ilustrações, logotipos e campanhas. Antes, contratava ilustradores e designers; agora, consegue gerar muitas imagens em segundos. A equipe ainda não definiu como reconhecer o trabalho humano nem como dividir os ganhos.',
    question: 'Como a empresa deveria usar essas ferramentas?',
    aiLimit: 'A IA pode combinar padrões e referências para criar imagens, mas não tem vivências, sentimentos ou intenções próprias. Também não define sozinha autoria, autorização ou remuneração pelo trabalho usado como referência.',
    reflection: 'Se algo que dependia do trabalho de um artista agora é feito em segundos, quem recebe os benefícios e quem assume os custos?',
    options: [
      { text: 'Usar a IA para produzir a maior parte das imagens e reduzir custos.', scores: { inovacao: 1, conhecimento: 1 }, effect: 'A empresa pode criar mais peças em menos tempo e ampliar campanhas. Ao mesmo tempo, pode reduzir contratações e concentrar os ganhos em quem controla a ferramenta e o negócio.', beneficiaries: 'Empresas, plataformas de IA e equipes que precisam produzir muitas peças.', risks: 'Ilustradores e designers podem perder oportunidades, remuneração ou reconhecimento.' },
      { text: 'Usar a IA como apoio, com artistas participando da criação, revisão e decisão final.', scores: { conhecimento: 1, humanidade: 1 }, effect: 'A equipe pode acelerar etapas sem retirar toda a participação dos profissionais. O resultado depende de como o trabalho é dividido e de quem tem poder para decidir.', beneficiaries: 'Empresas que ganham agilidade e profissionais que incorporam novas ferramentas.', risks: 'Artistas ainda podem receber menos ou ter pouca autonomia se as regras não forem claras.' },
      { text: 'Continuar contratando artistas para criar as peças e evitar imagens geradas por IA.', scores: { justica: 1, humanidade: 1 }, effect: 'A escolha preserva espaço para criação profissional e pode facilitar acordos claros sobre autoria. A produção pode levar mais tempo e custar mais, limitando quantas peças a empresa consegue encomendar.', beneficiaries: 'Artistas contratados e clientes que valorizam criação humana identificada.', risks: 'Pequenas equipes podem ter menos recursos para produzir ou testar ideias visuais.' },
      { text: 'Combinar as duas formas e exigir transparência, autorização e pagamento quando houver uso de trabalho protegido.', scores: { justica: 1, inovacao: 1 }, effect: 'A empresa pode experimentar novas ferramentas com critérios mais claros de reconhecimento e remuneração. Verificar origem e direitos pode exigir tempo, e nem sempre é simples identificar todas as referências.', beneficiaries: 'Equipes criativas, empresas e artistas que recebem reconhecimento ou compensação.', risks: 'Profissionais independentes podem continuar sem saber como contestar usos ou negociar.' }
    ]
  },
  {
    tag: 'Desafio 2 · Educação', title: 'A IA está democratizando a educação?',
    scenario: 'Uma universidade avalia oferecer tutores virtuais que explicam conteúdos, sugerem exercícios e respondem dúvidas a qualquer hora. A ferramenta pode apoiar estudantes e professores, mas exige internet e pode apresentar respostas incorretas.',
    question: 'Como a universidade deveria oferecer esse apoio?',
    aiLimit: 'Uma ferramenta de IA não garante acesso igual à educação nem sabe, por conta própria, se cada estudante compreendeu o conteúdo. Suas respostas também podem estar erradas ou deixar de considerar o contexto da turma.',
    reflection: 'Se a IA pode ajudar qualquer estudante, por que nem todos conseguem aproveitar essa oportunidade?',
    options: [
      { text: 'Oferecer o tutor a todos e incentivar o uso nas atividades da universidade.', scores: { conhecimento: 1, inovacao: 1 }, effect: 'Muitos estudantes podem tirar dúvidas fora do horário de aula. Sem orientação, erros podem ser repetidos e o acesso pode favorecer quem tem melhor conexão e dispositivos.', beneficiaries: 'Estudantes conectados, empresas fornecedoras e professores que usam a ferramenta como apoio.', risks: 'Quem não tem internet adequada e quem recebe respostas incorretas sem saber verificar.' },
      { text: 'Usar a ferramenta como apoio, com orientação dos professores e alternativas presenciais.', scores: { conhecimento: 1, humanidade: 1 }, effect: 'A turma pode combinar ajuda rápida com acompanhamento humano. Isso exige tempo de preparação e não elimina diferenças de acesso ou de familiaridade com a tecnologia.', beneficiaries: 'Estudantes com diferentes necessidades e professores que complementam suas aulas.', risks: 'Turmas com pouco suporte podem receber orientação desigual.' },
      { text: 'Não adotar tutores de IA e investir apenas em atendimento feito por professores e monitores.', scores: { justica: 1, humanidade: 1 }, effect: 'O apoio permanece baseado em relações humanas e pode considerar melhor cada estudante. A universidade pode ter dificuldade para oferecer atendimento rápido e frequente a todos.', beneficiaries: 'Estudantes que precisam de diálogo e orientação personalizada.', risks: 'Quem espera atendimento e professores ou monitores sobrecarregados.' },
      { text: 'Testar a ferramenta em algumas disciplinas e avaliar aprendizagem, erros e acesso antes de ampliar.', scores: { justica: 1, conhecimento: 1 }, effect: 'Um teste pode mostrar para quem a ferramenta funciona e onde falha antes de uma adoção maior. Os estudantes participantes ainda podem receber respostas erradas ou ter seus dados tratados.', beneficiaries: 'Turmas e professores que ajudam a avaliar a experiência.', risks: 'Estudantes fora do teste e participantes sem suporte suficiente durante a avaliação.' }
    ]
  },
  {
    tag: 'Desafio 3 · Cidade e vigilância', title: 'Quem está sendo observado?',
    scenario: 'Uma cidade propõe usar câmeras e IA para encontrar situações de risco em espaços públicos. A medida pode ajudar equipes a investigar problemas, mas também pode acompanhar pessoas sem que percebam e identificar alguém incorretamente.',
    question: 'O que deveria acontecer antes de adotar essa tecnologia?',
    aiLimit: 'A IA não garante que uma identificação esteja correta ou seja imparcial. O resultado depende dos dados, do sistema e de como as pessoas o utilizam; uma pontuação não explica sozinha o contexto de alguém.',
    reflection: 'Como equilibrar segurança, privacidade e liberdade?',
    options: [
      { text: 'Instalar o sistema em muitos locais para tentar prevenir e investigar mais ocorrências.', scores: { inovacao: 1, humanidade: 1 }, effect: 'Equipes podem receber mais alertas e talvez agir com rapidez. A coleta se amplia para moradores e visitantes, inclusive pessoas sem relação com qualquer ocorrência.', beneficiaries: 'Equipes de segurança e pessoas que buscam resposta rápida em espaços públicos.', risks: 'Moradores, visitantes e grupos que já são mais vigiados ou podem ser identificados por engano.' },
      { text: 'Definir limites, informar a população e permitir auditoria independente do sistema.', scores: { justica: 1, humanidade: 1 }, effect: 'Regras e fiscalização podem tornar o uso mais transparente e permitir corrigir falhas. A vigilância continua existindo, e é preciso verificar se os limites são realmente cumpridos.', beneficiaries: 'Moradores que desejam segurança com regras públicas e fiscalização.', risks: 'Pessoas cujos dados ainda são coletados ou que enfrentam uma identificação incorreta.' },
      { text: 'Não usar reconhecimento ou análise de IA em câmeras de espaços públicos.', scores: { justica: 1, conhecimento: 1 }, effect: 'A cidade evita esse tipo de identificação automatizada e reduz a coleta de dados. Também abre mão de testar se algum uso limitado poderia apoiar investigações específicas.', beneficiaries: 'Pessoas que valorizam privacidade e circulação sem identificação automatizada.', risks: 'Equipes que poderiam usar alertas como apoio em situações delimitadas.' },
      { text: 'Fazer um teste limitado, com prazo, consulta aos moradores e publicação dos resultados.', scores: { inovacao: 1, conhecimento: 1 }, effect: 'Um teste acompanhado pode revelar falhas antes de uma decisão mais ampla. As pessoas da área escolhida ainda serão observadas e podem não ter escolhido participar.', beneficiaries: 'Moradores e equipes que participam da avaliação pública.', risks: 'Quem vive ou circula na área de teste e grupos identificados com menor precisão.' }
    ]
  },
  {
    tag: 'Desafio 4 · Trabalho', title: 'Quem ganha com a automação?',
    scenario: 'Uma empresa automatiza tarefas administrativas, atendimento e produção de conteúdo. O serviço fica mais rápido, mas algumas funções mudam ou deixam de existir. Nem todos os trabalhadores têm acesso ao mesmo treinamento, e a empresa ainda não definiu como dividir os ganhos.',
    question: 'O que a empresa deveria fazer?',
    aiLimit: 'A IA pode executar tarefas e sugerir respostas, mas não substitui por completo empatia, julgamento diante de situações novas, responsabilidade e relações de confiança. Automatizar uma tarefa também não significa que uma profissão inteira desapareceu.',
    reflection: 'Se a produtividade aumenta, como os benefícios deveriam ser divididos entre empresa, trabalhadores e clientes?',
    options: [
      { text: 'Automatizar o máximo possível para reduzir custos e acelerar o serviço.', scores: { inovacao: 1, conhecimento: 1 }, effect: 'A empresa pode reduzir custos e clientes podem receber respostas mais rápidas. Parte da economia pode vir da redução de postos e da transferência de tarefas para quem permanece.', beneficiaries: 'Empresa, proprietários e clientes que recebem serviços mais rápidos.', risks: 'Trabalhadores cujas funções são reduzidas e pessoas que precisam de atendimento humano.' },
      { text: 'Introduzir a IA aos poucos, explicar as mudanças e oferecer treinamento às equipes.', scores: { conhecimento: 1, humanidade: 1 }, effect: 'As pessoas podem se preparar e aprender novas tarefas durante a transição. O treinamento exige investimento e não garante que todos mantenham o emprego.', beneficiaries: 'Funcionários com acesso à capacitação e equipes que passam a usar a ferramenta.', risks: 'Quem não consegue participar do treinamento e trabalhadores cujas funções deixam de existir.' },
      { text: 'Manter as tarefas como estão até entender quem pode ser prejudicado e quais funções mudariam.', scores: { justica: 1, humanidade: 1 }, effect: 'A pausa dá tempo para conversar com as equipes e avaliar impactos antes de automatizar. A empresa pode perder ganhos de produtividade e manter tarefas repetitivas por mais tempo.', beneficiaries: 'Trabalhadores que precisam de tempo e voz nas decisões.', risks: 'Equipes sobrecarregadas e clientes que poderiam receber melhorias mais rápidas.' },
      { text: 'Automatizar algumas tarefas e negociar com as equipes como repartir ganhos e redesenhar funções.', scores: { justica: 1, inovacao: 1 }, effect: 'A empresa pode combinar produtividade com novas funções, remuneração ou redução de jornada. O acordo requer negociação e ainda pode não proteger todos os postos.', beneficiaries: 'Trabalhadores que participam da negociação, empresa e clientes.', risks: 'Pessoas fora das negociações e trabalhadores cujas tarefas não possam ser reorganizadas.' }
    ]
  },
  {
    tag: 'Desafio 5 · Informação', title: 'Quem responde pela desinformação?',
    scenario: 'Um vídeo ou áudio falso, criado com IA, começa a circular nas redes e engana milhares de pessoas. Não fica claro quem produziu o material, enquanto a publicação ganha visualizações e é compartilhada rapidamente.',
    question: 'O que você faria diante desse conteúdo?',
    aiLimit: 'A IA não garante que o que produz seja verdadeiro. Um áudio convincente ou um vídeo realista não prova que o fato aconteceu; verificar exige fontes, contexto e responsabilidade de quem publica e compartilha.',
    reflection: 'Se qualquer pessoa pode criar algo falso com aparência de verdade, como proteger quem aparece no conteúdo e a confiança nas informações?',
    options: [
      { text: 'Compartilhar se parecer plausível e vier de alguém conhecido.', scores: { inovacao: 1, humanidade: 1 }, effect: 'A informação pode chegar depressa a outras pessoas. Mesmo alguém conhecido pode repassar um conteúdo falso, ampliando o dano antes de uma correção.', beneficiaries: 'Quem publica algo chamativo e plataformas que recebem mais interação.', risks: 'A pessoa retratada, quem acredita no conteúdo e a confiança nas notícias.' },
      { text: 'Procurar a origem e comparar com fontes independentes antes de compartilhar.', scores: { conhecimento: 1, justica: 1 }, effect: 'A checagem pode revelar manipulação e oferecer contexto. Ela leva tempo e a origem pode continuar incerta, mesmo após a busca.', beneficiaries: 'Pessoas que recebem informação contextualizada e fontes confiáveis.', risks: 'Quem precisa de uma resposta imediata e conteúdos verdadeiros sem origem fácil de confirmar.' },
      { text: 'Não compartilhar o conteúdo e avisar outras pessoas que ele pode ser falso.', scores: { justica: 1, humanidade: 1 }, effect: 'A escolha pode conter a circulação e alertar quem recebeu o material. Sem explicar o que foi verificado, o alerta também pode gerar dúvida sobre conteúdos legítimos.', beneficiaries: 'Pessoas retratadas e grupos que poderiam receber a falsificação.', risks: 'Criadores legítimos e pessoas que precisam de informação contextualizada.' },
      { text: 'Verificar o que for possível e, se compartilhar, explicar o que é fato e o que segue incerto.', scores: { conhecimento: 1, inovacao: 1 }, effect: 'A explicação pode ajudar outras pessoas a avaliar o material. Ressalvas podem se perder quando alguém recorta ou republica o conteúdo.', beneficiaries: 'Leitores que recebem contexto e pessoas que buscam informação confiável.', risks: 'Quem vê apenas uma versão recortada ou interpreta a incerteza como confirmação.' }
    ]
  },
  {
    tag: 'Desafio 6 · Saúde', title: 'Uma recomendação no hospital',
    scenario: 'Um hospital usa IA para identificar pacientes que talvez precisem de atendimento prioritário. O sistema analisa informações e pode ajudar a organizar filas, mas pode errar ou não compreender toda a situação de uma pessoa.',
    question: 'Como o hospital deveria usar essa recomendação?',
    aiLimit: 'A IA não compreende sozinha toda a história de um paciente nem garante uma decisão clínica correta. Ela pode deixar passar informações ausentes ou refletir desigualdades presentes nos dados usados.',
    reflection: 'Quem responde quando uma recomendação automatizada está errada ou deixa alguém esperando?',
    options: [
      { text: 'Deixar o sistema definir a prioridade para atender mais pessoas rapidamente.', scores: { inovacao: 1, conhecimento: 1 }, effect: 'A fila pode ser organizada com rapidez em momentos de grande demanda. Um erro ou dado incompleto pode deixar alguém na posição inadequada sem revisão humana.', beneficiaries: 'Equipes que precisam organizar muitos atendimentos e pacientes que recebem triagem mais rápida.', risks: 'Pacientes pouco representados nos dados ou com informações incompletas.' },
      { text: 'Usar a recomendação como apoio, com profissionais revisando e podendo corrigir os casos.', scores: { humanidade: 1, justica: 1 }, effect: 'A equipe pode combinar organização automática com o contexto clínico de cada paciente. A revisão exige tempo e regras para que alertas não sejam aceitos sem questionamento.', beneficiaries: 'Pacientes e profissionais que recebem apoio para organizar a triagem.', risks: 'Pessoas ainda podem ser prejudicadas por dados ou critérios injustos.' },
      { text: 'Não usar o sistema e manter as decisões de prioridade com profissionais de saúde.', scores: { justica: 1, conhecimento: 1 }, effect: 'O hospital evita depender de recomendações automáticas e mantém a decisão clínica com profissionais. A equipe abre mão de um possível apoio e também precisa avaliar a consistência da triagem humana.', beneficiaries: 'Pacientes atendidos por profissionais que conhecem seu caso.', risks: 'Equipes sobrecarregadas e pacientes que poderiam se beneficiar de uma organização mais rápida.' },
      { text: 'Testar o sistema em poucos casos e avaliar erros e resultados por grupos antes de ampliar.', scores: { humanidade: 1, conhecimento: 1 }, effect: 'A avaliação pode revelar onde a ferramenta ajuda e quais pacientes ela atende pior. Mesmo um teste limitado exige supervisão e pode afetar quem participa.', beneficiaries: 'Pacientes e profissionais que podem contribuir para uma avaliação cuidadosa.', risks: 'Pessoas atendidas durante o teste e grupos pouco representados nos dados.' }
    ]
  }
];

const app = document.querySelector('#app');
const STORAGE_KEY = 'academia-futuros-ia-session-v4';
let state = loadState();

function freshState(){ return { screen: 'welcome', index: 0, choices: [] }; }
function loadState(){
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    if(saved && ['welcome','intro','quiz','result'].includes(saved.screen) && Array.isArray(saved.choices)) return saved;
  } catch(_e){}
  return freshState();
}
function saveState(){ try{sessionStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(_e){} }
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function houseCards(){
  return Object.entries(houses).map(([key,h])=>`<article class="house-card" data-house="${key}"><img class="house-image" src="assets/casa-${key}.png" alt="Ilustração pixel art da ${h.name}"/><h3>${h.name}</h3><p>${h.value}</p></article>`).join('');
}
function render(){
  saveState();
  if(state.screen==='welcome') app.innerHTML=welcomeScreen();
  else if(state.screen==='intro') app.innerHTML=introScreen();
  else if(state.screen==='quiz') app.innerHTML=quizScreen();
  else app.innerHTML=resultScreen();
  bindActions();
  window.scrollTo({top:0,behavior:'smooth'});
}
function welcomeScreen(){return `<section class="screen hero"><div class="hero-copy"><h1>Academia dos Futuros da IA</h1><p class="hero-sub">Jogue, explore e questione: que futuro estamos construindo com a inteligência artificial?</p><p class="hero-text">Explore seis situações, escolha seu caminho e descubra quem é afetado por cada decisão. Cada resposta revela uma consequência possível.</p><div class="hero-meta"><span class="meta-icon" aria-hidden="true">◷</span><span>4 a 6 minutos</span><span aria-hidden="true">·</span><span>6 desafios</span></div><div class="hero-actions"><button class="button" data-action="intro">Começar partida</button><button class="text-button" data-action="intro">Ver as casas</button></div></div><div class="hero-art"><div class="castle-panel"><img src="assets/academy-pixel-art.jpg" alt="Castelo da Academia em arte pixelada, entre montanhas, cachoeira e céu violeta."/><div class="castle-shade"></div><div class="castle-grid"></div><div class="castle-corner corner-tl"></div><div class="castle-corner corner-tr"></div><div class="castle-corner corner-bl"></div><div class="castle-corner corner-br"></div><div class="castle-hud-top"><span><i class="hud-dot"></i> ACADEMIA / PORTAL</span><span>FASE 01</span></div><div class="castle-hud-bottom"><span>6 DESAFIOS</span><b></b><span>ESCOLHA SEU CAMINHO</span></div></div><div class="castle-caption"><span>Uma aventura para pensar os futuros possíveis</span><span class="caption-signal">✦ MISSÃO DISPONÍVEL</span></div></div></section>`;}
function introScreen(){return `<section class="screen"><div class="section-head"><div class="eyebrow">Antes de começar</div><h2>Quatro casas. Seis situações para pensar o futuro.</h2><p>Não existe uma resposta perfeita. Cada escolha pode trazer benefícios e consequências para grupos diferentes. Suas casas representam as prioridades que apareceram nas respostas desta jornada.</p></div><div class="houses-grid">${houseCards()}</div><div class="intro-note">O resultado é um convite à conversa, não uma avaliação da sua personalidade. Pense em quem é afetado, quem ganha e quem pode ficar de fora.</div><div class="center-actions"><button class="button" data-action="start">Entendi, vamos começar</button></div></section>`;}
function quizScreen(){
  const q=challenges[state.index];
  const selected=state.choices[state.index];
  const pct=Math.round((state.index/challenges.length)*100);
  let outcome='';
  if(Number.isInteger(selected)){
    const o=q.options[selected];
    outcome=`<section class="outcome" aria-live="polite"><h3>Uma consequência possível</h3><p>${o.effect}</p><div class="impact-grid"><div class="impact-item"><strong>Quem pode ganhar</strong>${o.beneficiaries}</div><div class="impact-item"><strong>Quem pode perder ou ser afetado</strong>${o.risks}</div></div><div class="ai-limit"><strong>O que a IA não consegue fazer ou garantir</strong><p>${q.aiLimit}</p></div><p class="reflection"><strong>Pense nisso:</strong> ${q.reflection}</p></section>`;
  }
  return `<section class="screen game-wrap"><div class="progress-row"><strong>Jornada em andamento</strong><span>Desafio ${state.index+1} de ${challenges.length}</span></div><div class="progress-track" role="progressbar" aria-label="Progresso da jornada" aria-valuemin="0" aria-valuemax="${challenges.length}" aria-valuenow="${state.index}"><div class="progress-fill" style="width:${pct}%"></div></div><article class="challenge-card"><span class="challenge-tag">${q.tag}</span><h2>${q.title}</h2><p class="scenario"><span class="content-label">SITUAÇÃO</span>${q.scenario}</p><p class="question-label"><span class="content-label">SUA DECISÃO</span>${q.question}</p><div class="choices" role="group" aria-label="Escolha uma opção">${q.options.map((o,i)=>`<button class="choice ${selected===i?'selected':''}" data-choice="${i}" aria-pressed="${selected===i}"><span class="choice-letter">${String.fromCharCode(65+i)}</span><span>${o.text}</span></button>`).join('')}</div>${outcome}<div class="challenge-actions"><button class="text-button" data-action="${state.index===0?'intro':'back'}">${state.index===0?'Ver casas':'Desafio anterior'}</button>${selected!==undefined?`<button class="button" data-action="next">${state.index===challenges.length-1?'Ver meu resultado':'Próximo desafio'}</button>`:''}</div></article></section>`;
}
function getScores(){const scores={justica:0,humanidade:0,conhecimento:0,inovacao:0};state.choices.forEach((choice,i)=>{if(Number.isInteger(choice))Object.entries(challenges[i].options[choice].scores).forEach(([key,points])=>scores[key]+=points);});return scores;}
function resultScreen(){
  const scores=getScores();
  const max=Math.max(...Object.values(scores));
  const winners=Object.keys(scores).filter(k=>scores[k]===max);
  const lead=winners[0];
  const matching=winners.length>1;
  const h=houses[lead];
  const winnerNames=winners.map(k=>houses[k].name).join(' e ');
  const summary=matching?`Suas escolhas deram destaque a ${winnerNames}. Este resultado reúne prioridades que podem aparecer juntas: cada situação pede olhar para diferentes pessoas e consequências.`:h.phrase+' Isso não define você; mostra apenas uma lente que apareceu nas escolhas desta partida.';
  const tones={justica:'#f4d49a',humanidade:'#f3a9c1',conhecimento:'#b7a5ff',inovacao:'#8ee7e1'};
  const scoreRows=Object.entries(houses).map(([key,house])=>`<div class="score-row"><span>${house.name.replace('Casa ','')}</span><div class="score-track"><div class="score-fill" style="--tone:${tones[key]};width:${Math.max(6,(scores[key]/max)*100)}%"></div></div><span class="score-number">${scores[key]}</span></div>`).join('');
  return `<section class="screen result-shell"><div class="result-top"><div class="eyebrow">Jornada concluída</div><h1 class="result-title">Sua jornada chegou a uma casa</h1><p class="result-sub">Uma leitura das prioridades que apareceram nas suas escolhas.</p></div><div class="result-hero"><article class="result-house" data-house="${lead}"><img class="house-image result-house-art" src="assets/casa-${lead}.png" alt="Ilustração pixel art da ${matching?winnerNames:h.name}"/><h2>${matching?winnerNames:h.name}</h2><p>${matching?'Suas respostas destacaram mais de uma lente para pensar os impactos da IA.':h.value}</p></article><article class="result-reading"><h3>O que apareceu nas suas escolhas</h3><p>${summary}</p><div class="score-list" aria-label="Pontuação por casa">${scoreRows}</div></article></div><article class="reflection-card"><h3>Uma reflexão para levar</h3><p>Na automação, ganhos de produtividade podem virar lucro, serviço mais rápido ou tempo livre, conforme as decisões da empresa e a participação dos trabalhadores. Ao mesmo tempo, pessoas podem perder emprego, renda, autonomia criativa e poder de decisão. Quem recebe os benefícios e quem precisa suportar os custos?</p></article><div class="question-row"><div class="think-question"><span>PARA CONVERSAR</span>Quem foi afetado pelas decisões?</div><div class="think-question"><span>PARA CONVERSAR</span>Quem ganhou e quem poderia perder?</div><div class="think-question"><span>PARA CONVERSAR</span>O que a IA não consegue decidir ou compreender sozinha?</div></div><p class="conversation-prompt">Converse com outras pessoas: vocês escolheram as mesmas opções? Pensaram nos mesmos impactos?</p><div class="result-actions"><button class="button" data-action="restart">Jogar novamente</button><button class="button button-secondary" data-action="review">Rever os desafios</button></div></section>`;
}
function bindActions(){
  app.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>{
    const action=button.dataset.action;
    if(action==='intro') state.screen='intro';
    if(action==='start'){state.screen='quiz';state.index=0;state.choices=[];}
    if(action==='next'){if(state.index<challenges.length-1)state.index++;else state.screen='result';}
    if(action==='back'){if(state.index>0)state.index--;}
    if(action==='restart'){state=freshState();try{sessionStorage.removeItem(STORAGE_KEY);}catch(_e){}}
    if(action==='review'){state.screen='quiz';state.index=0;}
    render();
  }));
  app.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>{
    state.choices[state.index]=Number(button.dataset.choice);
    render();
    app.querySelector('.outcome')?.scrollIntoView({behavior:'smooth',block:'nearest'});
  }));
}
document.querySelector('#brand-home').addEventListener('click',event=>{event.preventDefault();state=freshState();render();});
render();
