(()=>{
'use strict';

const EXTRA_DECORAR = [
  {id:'X-ASM-01',topic:'Asma',mode:'decorar',style:'Associação',question:'Relacione a fase da crise asmática com a conduta prioritária. Qual alternativa associa corretamente?','options':['Crise leve + intubação imediata','Crise moderada/grave + SABA repetido, oxigênio se necessário e corticoide sistêmico precoce','Boa resposta inicial + evitar reavaliação','Crise grave + aguardar 6 horas antes de broncodilatador'],'answer':1,'explanation':'Na exacerbação moderada ou grave, a abordagem inicial inclui broncodilatador inalatório de repetição, oxigênio guiado por meta e corticoide sistêmico precoce.','source':'Questão autoral — associação de fase e tratamento','keypoint':'Associação'},
  {id:'X-ASM-02',topic:'Asma',mode:'decorar',style:'Ordenação',question:'Em uma crise asmática na sala de emergência, qual sequência está mais alinhada à abordagem inicial?','options':['Oxigênio conforme necessidade → SABA repetido → considerar ipratrópio em crise importante → corticoide sistêmico precoce','Corticoide oral apenas → alta imediata → SABA se piorar','Intubação imediata em toda crise → radiografia → oxigênio por rotina','Antibiótico → hidratação vigorosa → SABA apenas no final'],'answer':0,'explanation':'A sequência inicial prioriza estabilização, broncodilatador, adjuvantes em casos importantes e corticoide precoce.','source':'Questão autoral — ordenação de passos','keypoint':'Sequência'},
  {id:'X-DPOC-01',topic:'DPOC',mode:'decorar',style:'Associação',question:'Qual associação entre exacerbação de DPOC e tratamento está correta?','options':['Acidose respiratória com aumento do trabalho respiratório + considerar VNI','Hipoxemia leve corrigida + evitar oxigênio','Escarro purulento isolado + intubação mandatória','Melhora clínica + aumentar sedação'],'answer':0,'explanation':'Na exacerbação com acidose respiratória e esforço ventilatório, a VNI é uma medida-chave quando não há contraindicações.','source':'Questão autoral — associação de fase e tratamento','keypoint':'Associação'},
  {id:'X-DPOC-02',topic:'DPOC',mode:'decorar',style:'Ordenação',question:'Escolha a melhor ordem de raciocínio na exacerbação aguda da DPOC com dispneia importante.','options':['Avaliar gravidade e sinais de falência → oxigênio alvo 88–92% → broncodilatadores de curta ação → considerar corticoide sistêmico/VNI','Antibiótico para todos → alta → reavaliação em 7 dias','Tomografia de rotina → fisioterapia → broncodilatador se piorar','Oxigênio até 100% → sedação → VNI apenas no dia seguinte'],'answer':0,'explanation':'A ordem correta parte da gravidade, controle de oxigenação, broncodilatação e, conforme o caso, corticoide e VNI.','source':'Questão autoral — ordenação de passos','keypoint':'Sequência'},
  {id:'X-SEP-01',topic:'Sepse',mode:'decorar',style:'Associação',question:'Qual combinação está correta em sepse?','options':['Choque séptico + adiar vasopressor até o dia seguinte','Hipoperfusão induzida por sepse + iniciar ressuscitação com fluidos e reavaliar resposta','Infecção leve sem disfunção + protocolo de choque obrigatório','Sepse + suspender antibiótico até sair cultura final'],'answer':1,'explanation':'Na hipoperfusão séptica, iniciam-se fluidos e reavaliação dinâmica; choque pode exigir vasopressor precoce.','source':'Questão autoral — associação de fase e tratamento','keypoint':'Associação'},
  {id:'X-SEP-02',topic:'Sepse',mode:'decorar',style:'Ordenação',question:'Qual sequência traduz melhor o manejo inicial de um paciente com suspeita de sepse?','options':['Reconhecer a possibilidade de sepse → colher culturas quando não atrasar tratamento → iniciar antimicrobiano dentro da janela adequada → fluidos/vasopressor conforme perfusão','Esperar todas as culturas crescerem → definir se há sepse → tratar','Solicitar TC de corpo inteiro antes de qualquer medida','Usar vasopressor antes de avaliar perfusão e volume'],'answer':0,'explanation':'A sequência correta integra reconhecimento, culturas sem atraso indevido, antimicrobianos oportunos e suporte hemodinâmico.','source':'Questão autoral — ordenação de passos','keypoint':'Sequência'},
  {id:'X-QUE-01',topic:'Queimaduras',mode:'decorar',style:'Associação',question:'Associe corretamente a situação clínica à prioridade.','options':['Queimadura em espaço fechado com rouquidão + priorizar via aérea','Bolha em pequena área superficial + encaminhar para centro de queimados obrigatoriamente','Queimadura pequena superficial + reposição pela Parkland sempre','Paciente estável com queimadura sem risco inalatório + intubação imediata'],'answer':0,'explanation':'Sinais de lesão inalatória em incêndio fechado tornam a via aérea prioridade.','source':'Questão autoral — associação de fase e tratamento','keypoint':'Associação'},
  {id:'X-QUE-02',topic:'Queimaduras',mode:'decorar',style:'Ordenação',question:'Na abordagem inicial do grande queimado, qual ordem está mais adequada?','options':['ABCDE → estimar SCQ/profundidade → iniciar reposição indicada → monitorar diurese e perfusão','Curativo estético → antibiótico profilático para todos → alta','Sedação profunda → cálculo de SCQ depois de 24 h → hidratação oral','Enxerto precoce antes de avaliar via aérea'],'answer':0,'explanation':'Primeiro vêm estabilização e avaliação primária, depois estimativa da lesão e reposição com monitorização.','source':'Questão autoral — ordenação de passos','keypoint':'Sequência'},
  {id:'X-POL-01',topic:'Politraumatismo',mode:'decorar',style:'Ordenação',question:'Qual ordem representa melhor o XABCDE do trauma?','options':['Exsanguinação → vias aéreas/coluna cervical → respiração → circulação → incapacidade neurológica → exposição','Vias aéreas → exsanguinação → exposição → circulação → respiração → incapacidade','Exposição → circulação → respiração → vias aéreas → incapacidade','Somente circulação e depois o resto'],'answer':0,'explanation':'No XABCDE, hemorragia exsanguinante vem antes de A.','source':'Questão autoral — ordenação de passos','keypoint':'Sequência'},
  {id:'X-POL-02',topic:'Politraumatismo',mode:'decorar',style:'Associação',question:'Qual associação está correta no politrauma?','options':['Hemorragia externa grave + compressão/torniquete imediatos','Instabilidade pélvica + mobilizar repetidamente a pelve','Suspeita de choque hemorrágico + atrasar controle de sangramento','Trauma multissistêmico + ignorar reavaliações seriadas'],'answer':0,'explanation':'Controle imediato da hemorragia externa grave é central no politrauma.','source':'Questão autoral — associação de fase e tratamento','keypoint':'Associação'},
  {id:'X-TCE-01',topic:'TCE',mode:'decorar',style:'Associação',question:'Associe a situação ao foco inicial correto.','options':['Rebaixamento importante do nível de consciência + proteger via aérea conforme indicação','Suspeita de TCE + hipoxemia deve ser tolerada','Piora neurológica súbita + dispensar reavaliação pupilar','Coleção epidural típica + observação domiciliar rotineira'],'answer':0,'explanation':'No TCE, hipóxia e perda de via aérea agravam lesão secundária e exigem atenção prioritária.','source':'Questão autoral — associação de fase e tratamento','keypoint':'Associação'},
  {id:'X-TCE-02',topic:'TCE',mode:'decorar',style:'Ordenação',question:'Na avaliação inicial do TCE, qual sequência de prioridades é mais correta?','options':['Garantir ABC → evitar hipóxia/hipotensão → exame neurológico seriado/Glasgow e pupilas → imagem conforme indicação','Tomografia para todos antes do ABC','Sedar primeiro, avaliar depois','Aguardar melhora espontânea para calcular Glasgow'],'answer':0,'explanation':'A abordagem inicial do TCE segue estabilização sistêmica e prevenção da lesão secundária, com avaliação neurológica seriada.','source':'Questão autoral — ordenação de passos','keypoint':'Sequência'},
  {id:'X-TOR-01',topic:'Trauma torácico',mode:'decorar',style:'Associação',question:'Qual associação entre apresentação e conduta está correta?','options':['Pneumotórax hipertensivo + descompressão imediata','Ferida torácica aspirativa + ocluir totalmente sem vigilância','Hemotórax maciço + alta para observação','Tórax instável + nenhum controle de dor'],'answer':0,'explanation':'Pneumotórax hipertensivo é lesão ameaçadora à vida e deve ser descomprimido imediatamente.','source':'Questão autoral — associação de fase e tratamento','keypoint':'Associação'},
  {id:'X-TOR-02',topic:'Trauma torácico',mode:'decorar',style:'Ordenação',question:'Em trauma torácico com insuficiência respiratória súbita, qual raciocínio está mais adequado?','options':['Reconhecer lesões imediatamente fatais → intervir conforme achados → complementar investigação','Esperar radiografia para tratar todas as causas','Focar apenas em analgesia e ignorar ventilação','Solicitar tomografia antes do exame físico'],'answer':0,'explanation':'A avaliação do tórax no trauma procura primeiro as lesões letais que exigem conduta imediata.','source':'Questão autoral — ordenação de passos','keypoint':'Sequência'},
  {id:'X-ABD-01',topic:'Trauma abdominal',mode:'decorar',style:'Associação',question:'Qual associação é a mais correta no trauma abdominal?','options':['Instabilidade hemodinâmica com FAST positivo + forte suspeita de sangramento intra-abdominal','Sinal do cinto + excluir lesão intestinal automaticamente','Trauma abdominal estável + laparotomia para todos','Dor epigástrica após impacto focal + nunca pensar em lesão pancreática'],'answer':0,'explanation':'Instabilidade com FAST positivo aponta para sangramento intra-abdominal relevante.','source':'Questão autoral — associação de fase e tratamento','keypoint':'Associação'},
  {id:'X-ABD-02',topic:'Trauma abdominal',mode:'decorar',style:'Ordenação',question:'Qual sequência traduz melhor o raciocínio básico no trauma abdominal fechado?','options':['Avaliar estabilidade hemodinâmica → escolher exame adequado (FAST/TC) → reavaliar continuamente e decidir conduta','Pedir laparotomia de rotina antes da avaliação clínica','Aguardar 24 horas para começar investigação','Solicitar antibiótico antes de examinar o paciente'],'answer':0,'explanation':'O raciocínio depende primeiro da estabilidade hemodinâmica e do método de avaliação disponível.','source':'Questão autoral — ordenação de passos','keypoint':'Sequência'}
];

const BASE_QUESTIONS = window.UE_QUESTIONS || [];
for(const q of BASE_QUESTIONS){const opts=window.UE_DISTRACTOR_REVISIONS?.[q.id];if(opts&&opts.length===q.options?.length)q.options=opts;}
const ALL_UE = [...BASE_QUESTIONS, ...EXTRA_DECORAR, ...(window.UE_V4_DATA?.interactive||[]), ...(window.UE_V5_DATA?.questions||[]), ...(window.ZOADA_TUTOR_DATA?.questions||[]).filter(q=>q.course==='ue')].map(q=>({...q,course:'ue'}));
const ALL_TUTORIA = (window.ZOADA_TUTOR_DATA?.questions||[]).filter(q=>q.course==='tutoria');
let ALL = ALL_UE;
const BYID = new Map([...ALL_UE,...ALL_TUTORIA].map(q=>[q.id,q]));
const qOf = key => BYID.get(String(key).startsWith('infinite@') ? String(key).split('@')[1] : key);
const questionExists = key => !!qOf(key);
const INFINITE_COOLDOWN = 80;
const INFINITE_WINDOW = 240;

const STORAGE='plantao-ganso-ue.v4';
const PREVIOUS_STORAGE=['plantao-ganso-ue.v3','plantao-ganso-ue.v2'];
const UE_TOPICS=[
 {name:'Asma',color:'#2f91ce',emoji:'🫁'},
 {name:'DPOC',color:'#0b7a90',emoji:'🌬️'},
 {name:'Sepse',color:'#269b79',emoji:'🩺'},
 {name:'Queimaduras',color:'#cf7b32',emoji:'🔥'},
 {name:'Politraumatismo',color:'#b65d6e',emoji:'🚑'},
 {name:'TCE',color:'#9560be',emoji:'🧠'},
 {name:'Trauma torácico',color:'#a54c5c',emoji:'🫀'},
 {name:'Trauma abdominal',color:'#a88b30',emoji:'🩻'}
];
const TUTOR_TOPICS=[
 {name:'Choque',color:'#ce7c45',emoji:'💉'},
 {name:'Sepse',color:'#269b79',emoji:'🦠'},
 {name:'Lesão renal aguda',color:'#6577b9',emoji:'🫘'},
 {name:'Insuficiência hepática',color:'#b8903f',emoji:'🧪'},
 {name:'Queimaduras',color:'#cf7b32',emoji:'🔥'},
 {name:'CAD e EHH',color:'#bd647e',emoji:'🩸'},
 {name:'Gasometria',color:'#557db4',emoji:'⚗️'},
 {name:'ITU e uretrites',color:'#3b998e',emoji:'🧫'},
 {name:'Asma',color:'#2f91ce',emoji:'🫁'},
 {name:'Ferramentas diagnósticas',color:'#906bc0',emoji:'🩺'}
];
let TOPICS=UE_TOPICS;
let TOPIC_NAMES=TOPICS.map(t=>t.name);
const UE_FLASHCARDS = window.UE_V5_DATA?.cards || window.UE_V4_DATA?.cards || [];
const TUTOR_FLASHCARDS = (window.ZOADA_TUTOR_DATA?.cards||[]).map(c=>({id:c.id,topic:c.topic,question:c.front,answer:c.back,source:'Flashcard original — Tutoria · MT3'}));
const EXPLANATION_NOTES={
'Asma':'Interprete gravidade, trabalho respiratório e resposta após broncodilatação; o corticoide trata inflamação, enquanto SABA atua na obstrução aguda. Diferencie falência ventilatória de simples sibilância. Nota: GINA 2026 usa alvo adulto de 93–95% de SpO₂; algumas apostilas anteriores mencionam 92–95%.',
'DPOC':'Exacerbação requer avaliação do padrão respiratório, meta de oxigênio habitualmente 88–92%, broncodilatadores e indicação individual de VNI, corticosteroide e antibiótico.',
'Sepse':'A conduta combina reconhecimento da disfunção orgânica, investigação e tratamento do foco, suporte perfusional e reavaliação dinâmica. Não use lactato, pressão ou escore isoladamente.',
'Queimaduras':'Associe mecanismo e profundidade à via aérea, superfície queimada, prevenção de hipotermia, volume e perfusão. Parkland histórica (4 mL/kg/%SCQ) é diferente da recomendação inicial ABA 2024 (2 mL/kg/%SCQ).',
'Politraumatismo':'A prioridade segue XABCDE: controle de hemorragia exsanguinante antes de A, seguido de proteção da via aérea, ventilação, circulação, exame neurológico e exposição com aquecimento.',
'TCE':'Prevenir hipóxia e hipotensão limita lesão cerebral secundária. Calcule Glasgow separando olhos, fala e melhor resposta motora; reavalie pupilas e evolução.',
'Trauma torácico':'No trauma torácico, trate primeiro lesões imediatamente fatais; instabilidade com suspeita de pneumotórax hipertensivo demanda descompressão sem aguardar RX.',
'Trauma abdominal':'A estabilidade determina a estratégia: instáveis requerem ressuscitação e controle de fonte, enquanto TC contrastada é especialmente útil em estáveis. FAST negativo não exclui todas as lesões.',
'Choque':'Diferencie perda de pré-carga, falência de bomba, obstrução mecânica e vasoplegia. Relacione a droga vasoativa ao mecanismo e sempre trate a causa de base.',
'Lesão renal aguda':'Considere creatinina e débito urinário, aplicando o pior estágio KDIGO. Diferencie pré-renal, lesão tubular, glomerulonefrite e obstrução por história, sedimento e exames direcionados.',
'Insuficiência hepática':'Avalie INR e encefalopatia como sinais de falência; AST e ALT mostram lesão hepatocelular, não reserva funcional. King’s College ajuda a identificar risco e encaminhamento precoce.',
'CAD e EHH':'Na CAD, cetose e acidose definem a síndrome, inclusive com glicose <200 em contextos específicos; EHH exige hiperosmolaridade e hiperglicemia importante. Corrigir potássio antes de insulina quando baixo.',
'Gasometria':'Comece pelo pH e distúrbio primário. Teste compensação com fórmulas, como Winter, e calcule ânion gap; pH normal pode esconder distúrbios mistos.',
'ITU e uretrites':'Corrimento e disúria orientam hipótese de uretrite e investigação de IST; escolha testes etiológicos adequados, tratamento segundo PCDT brasileiro e manejo de parcerias.',
'Ferramentas diagnósticas':'Escolha o método pela questão clínica e estabilidade: SOFA quantifica disfunção, FAST rastreia líquido, TC detalha anatomia em estáveis, POCUS ajuda a identificar mecanismo do choque.'
};
const ZOADA_IMAGES={welcome:'assets/zoada-boas-vindas.webp',decorar:'assets/zoada-comemorando.webp',casos:'assets/zoada-pensando.webp',prova:'assets/zoada-explicando.webp',dicas:'assets/zoada-explicando.webp',infinito:'assets/zoada-comemorando.webp',review:'assets/zoada-explicando.webp'};
const QUIP='Achei que eu era o professor… vamos ver como se sai sem mim!';
const REVIEW_GUIDES={
 'Asma':{map:['Crise asmática → avaliar gravidade','SpO₂ alvo 92–95% em adultos e crianças ≥6 anos','SABA inalatório repetido','Ipratrópio se crise mais importante','Corticoide sistêmico precoce','Reavaliar resposta e necessidade de internação'],summary:['Pense em gravidade, oxigenação e broncodilatação.','Saturação-alvo usual da crise: 92–95%.','Corticoide sistêmico deve ser considerado cedo na exacerbação moderada/grave.','Fadiga, silêncio auscultatório, hipoxemia persistente e piora do sensório sugerem risco.']},
 'DPOC':{map:['Exacerbação → avaliar dispneia, esforço e gasometria','SpO₂ alvo 88–92%','SABA ± SAMA','Corticoide sistêmico por curto período','Antibiótico se houver indicação clínica','VNI se acidose respiratória/hipercapnia e desconforto'],summary:['Oxigênio excessivo pode piorar retenção de CO₂ em alguns pacientes.','VNI é um pilar quando há acidose respiratória sem contraindicações.','Purulência do escarro, aumento do volume e piora da dispneia ajudam na decisão de antibiótico.','Sempre reavalie gravidade e causas precipitantes.']},
 'Sepse':{map:['Suspeita de infecção + disfunção orgânica','Reconhecer hipoperfusão','Culturas se não houver atraso relevante','Antimicrobiano dentro da janela adequada','Fluidos se hipoperfusão/choque','Vasopressor para PAM ≥65 mmHg se necessário','Controle do foco'],summary:['Sepse não é apenas febre: confusão, oligúria e hipotensão importam.','Lactato ajuda a avaliar gravidade e resposta, mas não age sozinho.','Choque séptico combina necessidade de vasopressor para PAM ≥65 mmHg e lactato elevado apesar da reposição apropriada.','O foco infeccioso deve ser controlado o quanto antes.']},
 'Queimaduras':{map:['ABCDE do trauma/queimado','Pensar em lesão inalatória','Calcular SCQ e profundidade','Indicar reposição volêmica quando apropriado','Monitorar diurese e perfusão','Definir critérios de encaminhamento'],summary:['Via aérea é prioridade em queimaduras faciais, rouquidão, fuligem e estridor.','SCQ e profundidade orientam gravidade.','A fórmula pedida pela questão precisa ser identificada: Parkland clássica ou esquema mais atual.','Volume calculado é ponto de partida; a resposta clínica ajusta a reposição.']},
 'Politraumatismo':{map:['XABCDE','X: hemorragia exsanguinante','A: via aérea + coluna cervical','B: ventilação','C: circulação/choque','D: incapacidade neurológica','E: exposição e prevenção de hipotermia'],summary:['Controle de sangramento maciço vem antes do A.','Choque hemorrágico pode ser oculto.','Reavaliação seriada muda condutas.','Hipotermia, acidose e coagulopatia formam a tríade letal.']},
 'TCE':{map:['ABCDE','Prevenir hipóxia e hipotensão','Glasgow + pupilas','TC conforme indicação','Reconhecer hematomas clássicos','Reavaliar deterioração'],summary:['Lesão secundária piora com hipóxia e hipotensão.','Epidural: possível intervalo lúcido e coleção biconvexa.','Subdural: coleção em crescente e associação frequente a trauma mais difuso.','Glasgow deve ser calculado pelos componentes E, V e M.']},
 'Trauma torácico':{map:['Reconhecer lesões imediatamente fatais','Pneumotórax hipertensivo','Pneumotórax aberto','Hemotórax maciço','Tamponamento cardíaco','Tórax instável/contusão pulmonar'],summary:['Descompressão imediata é mandatória no pneumotórax hipertensivo.','Dor e ventilação inadequada agravam o tórax instável.','Trauma torácico grave exige abordagem do que mata primeiro.','Radiografia e US ajudam, mas não devem atrasar intervenção necessária.']},
 'Trauma abdominal':{map:['Avaliar estabilidade hemodinâmica','FAST quando indicado','TC em pacientes estáveis','Pensar em víscera oca/mesentério','Sinal do cinto é alerta','Reavaliação seriada'],summary:['Instabilidade muda a urgência da decisão.','FAST negativo não exclui todas as lesões.','Mecanismos específicos, como guidão no epigástrio, podem sugerir lesão pancreática.','Sinal do cinto aumenta a suspeita de lesão abdominal significativa.']}
};
let FLASHCARDS = UE_FLASHCARDS;

const DEFAULT=()=>({version:4,prefs:{theme:'light',selectedTopics:[...TOPIC_NAMES],studyMode:'decorar',examBank:'misto',order:'intercalada',clock:true,zoadaReview:true,flashTopics:[...TOPIC_NAMES],flashOnlyDue:false,examDate:'',examTopics:[...TOPIC_NAMES],dailyMinutes:30,course:'ue',topicSelections:null},sessions:[],activeSessionId:null,attempts:{},favorites:{},doubts:{},spaced:{},cardSpaced:{},flashProgress:{index:0,revealed:false},lastView:'home'});
let state=load();
function saveCourseTopics(){
 const p=state.prefs,c=p.course==='tutoria'?'tutoria':'ue';
 if(!p.topicSelections)p.topicSelections={};
 p.topicSelections[c]={selectedTopics:[...p.selectedTopics],flashTopics:[...p.flashTopics],examTopics:[...p.examTopics]};
}
function syncCourseRuntime(){
 const p=state.prefs;
 p.course=p.course==='tutoria'?'tutoria':'ue';
 if(p.course==='ue' && p.studyMode==='dicas')p.studyMode='decorar';
 TOPICS=p.course==='tutoria'?TUTOR_TOPICS:UE_TOPICS;
 TOPIC_NAMES=TOPICS.map(x=>x.name);
 ALL=p.course==='tutoria'?ALL_TUTORIA:ALL_UE;
 FLASHCARDS=p.course==='tutoria'?TUTOR_FLASHCARDS:UE_FLASHCARDS;
 if(!p.topicSelections)p.topicSelections={ue:{selectedTopics:[...p.selectedTopics],flashTopics:[...p.flashTopics],examTopics:[...p.examTopics]}};
 if(!p.topicSelections[p.course])p.topicSelections[p.course]={selectedTopics:[...TOPIC_NAMES],flashTopics:[...TOPIC_NAMES],examTopics:[...TOPIC_NAMES]};
 const st=p.topicSelections[p.course];
 for(const key of ['selectedTopics','flashTopics','examTopics']){
  p[key]=(st[key]||[]).filter(x=>TOPIC_NAMES.includes(x));
  if(!p[key].length)p[key]=[...TOPIC_NAMES];
 }
}
function selectCourse(course,redraw=true){
 if(!['ue','tutoria'].includes(course))return;
 saveCourseTopics();state.prefs.course=course;syncCourseRuntime();
 reviewTopic=TOPIC_NAMES[0];reviewTab='maps';flashState={index:0,revealed:false,deck:[]};modeTouched=false;
 save();if(redraw)navigate('home');
}
syncCourseRuntime();
let view='home';
let reviewTab='maps';
let reviewTopic='Asma';
let toastTimeout=null;
let clockInterval=null;
let modeTouched=false;
let zoadaQuip='';
let flashState={index:state.flashProgress?.index||0,revealed:state.flashProgress?.revealed||false,deck:[]};
let navExpanded=false;
const root=document.getElementById('app');

function h(v){return String(v??'').replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));}
function topicData(name){return TOPICS.find(t=>t.name===name)||TOPICS[0];}
function selColor(topic){return `style="--topic-color:${topicData(topic).color}"`;}
function modeName(m){return ({decorar:'Modo Decorar',casos:'Casos clínicos',prova:'Modo Prova',revisao:'Revisão direcionada',infinito:'Questões infinitas',dicas:'Aprendizado baseado nas dicas da prova'})[m]||m;}
function flashDeck(){const topics=state.prefs.flashTopics?.length?state.prefs.flashTopics:TOPIC_NAMES; const deck=FLASHCARDS.filter(c=>topics.includes(c.topic)); return state.prefs.flashOnlyDue?deck.filter(c=>!state.cardSpaced[c.id]||state.cardSpaced[c.id].dueAt<=Date.now()):deck;}
function isAnswered(a){if(!a||a.choice===undefined||a.choice===null||a.choice==='')return false;if(Array.isArray(a.choice)||typeof a.choice==='object')return a.submitted===true;return true;}
function isCorrectFor(q,a){return !isAnswered(a)?false:typeof a.right==='boolean'?a.right:a.choice===q.answer;}
function answerText(q){if(q.kind==='order')return q.steps.join(' → ');if(q.kind==='match')return q.pairs.map(p=>p.join(' → ')).join('; ');if(q.kind==='fill')return q.accepted[0];return q.options?.[q.answer]||'';}
function dueCount(){const ids=new Set(ALL.map(q=>q.id));return Object.entries(state.spaced).filter(([id,v])=>ids.has(id)&&v.dueAt<=Date.now()).length;}
function cardDueCount(){return FLASHCARDS.filter(c=>state.cardSpaced[c.id]&&state.cardSpaced[c.id].dueAt<=Date.now()).length;}
function normalizeValue(v){return String(v||'').trim().toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,'').replace(/[,.]/g,'.');}
function scheduleItem(container,id,grade){const now=Date.now(),old=container[id]||{interval:0,streak:0,correct:0,wrong:0}; let days=1,streak=old.streak||0;if(grade==='again'){days=1;streak=0;}else if(grade==='hard'){days=1;streak=Math.max(0,streak);}else if(grade==='easy'){days=old.interval?Math.max(7,Math.ceil(old.interval*2.2)):7;streak++;}else{days=old.interval?Math.max(3,Math.ceil(old.interval*1.8)):3;streak++;}container[id]={interval:days,dueAt:now+days*86400000,lastAt:now,streak,correct:(old.correct||0)+(grade==='again'?0:1),wrong:(old.wrong||0)+(grade==='again'?1:0),grade};}
function adjustItem(container,id,grade){const old=container[id]||{};const now=Date.now();const days=grade==='again'?1:grade==='hard'?1:grade==='easy'?Math.max(7,Math.ceil((old.interval||1)*2)):Math.max(3,old.interval||3);container[id]={...old,interval:days,dueAt:now+days*86400000,lastAt:now,grade};}
function tagForQuestion(q){const text=(q.question+' '+(q.explanation||'')).toLowerCase();const tags=[['Gasometria',/gasometr|paco|acidose|ph/],['Antibioticoterapia',/antibi[oó]tic|antimicrob/],['Doses e medicamentos',/mg|mcg|dose|predniso|salbutamol|noradrenalina/],['Ventilação e oxigênio',/ventila|oxig[eê]n|satura|spo₂|spo2|vni/],['Escalas e classificações',/gold|glasgow|sofa|regra dos nove|est[aá]gio|classific/],['Reposição e fluidos',/reposi[cç][aã]o|ringer|fluido|diurese|hidrata/],['Atendimento inicial',/primeir|inicial|prioridade|xabcde|conduta/],['Imagem e diagnóstico',/tomografia|fast|raio.x|ultrass|diagn[oó]st/]];return tags.filter(x=>x[1].test(text)).map(x=>x[0]).slice(0,3).concat(q.keypoint&&q.keypoint!=='Base'?[q.keypoint]:[]);}


function load(){
 let s=DEFAULT(), raw=null, from='';
 try{
   for(const k of [STORAGE,...PREVIOUS_STORAGE]){const x=JSON.parse(localStorage.getItem(k)||'null'); if(x&&x.prefs&&Array.isArray(x.sessions)){raw=x;from=k;break;}}
   if(raw){
     s={...s,...raw,version:4,prefs:{...s.prefs,...raw.prefs},attempts:raw.attempts||{},favorites:raw.favorites||{},doubts:raw.doubts||{},spaced:raw.spaced||{},cardSpaced:raw.cardSpaced||{},flashProgress:raw.flashProgress||{index:0,revealed:false},sessions:(raw.sessions||[]).filter(t=>t&&Array.isArray(t.ids)).map(t=>({...t,ids:t.ids.filter(id=>questionExists(id)),answers:Object.fromEntries(Object.entries(t.answers||{}).filter(([id])=>BYID.has(id)))})).filter(t=>t.ids.length).slice(-80)};
     if(from!==STORAGE){
       for(const [id,attempt] of Object.entries(s.attempts)){if(BYID.has(id)&&attempt?.tries>0&&!s.spaced[id])s.spaced[id]={interval:0,dueAt:Date.now(),lastAt:attempt.updatedAt||Date.now(),streak:0,correct:attempt.right||0,wrong:attempt.wrong||0,grade:'migrado'};}
       localStorage.setItem(STORAGE,JSON.stringify(s));
     }
   }
 }catch(e){console.warn('Erro ao restaurar dados:',e);}
 s.prefs.selectedTopics=(s.prefs.selectedTopics||[]).filter(x=>TOPIC_NAMES.includes(x)); if(!s.prefs.selectedTopics.length)s.prefs.selectedTopics=[...TOPIC_NAMES];
 s.prefs.flashTopics=(s.prefs.flashTopics||[]).filter(x=>TOPIC_NAMES.includes(x)); if(!s.prefs.flashTopics.length)s.prefs.flashTopics=[...TOPIC_NAMES];
 s.prefs.examTopics=(s.prefs.examTopics||[]).filter(x=>TOPIC_NAMES.includes(x)); if(!s.prefs.examTopics.length)s.prefs.examTopics=[...TOPIC_NAMES];
 if(!s.activeSessionId||!s.sessions.some(t=>t.id===s.activeSessionId))s.activeSessionId=null;
 return s;
}
function save(){try{saveCourseTopics();localStorage.setItem(STORAGE,JSON.stringify(state));}catch(e){toast('O navegador bloqueou o salvamento. Exporte um backup em Ajustes.');}}
function toast(msg){let el=document.getElementById('toast'); if(!el){el=document.createElement('div'); el.id='toast'; document.body.appendChild(el);} el.textContent=msg; el.classList.add('visible'); clearTimeout(toastTimeout); toastTimeout=setTimeout(()=>el.classList.remove('visible'),3200);}
function active(){return state.sessions.find(s=>s.id===state.activeSessionId)||null;}
function activeNotFinished(){const s=active(); return s&&!s.finished?s:null;}
function globalStats(){const valid=new Set(ALL.map(q=>q.id));const ids=Object.entries(state.attempts).filter(([id,a])=>valid.has(id)&&a.tries>0); return {total:ids.length,right:ids.filter(([id,a])=>a.lastCorrect).length,wrong:ids.filter(([id,a])=>a.lastCorrect===false).length,attempts:ids.reduce((n,[,a])=>n+(a.tries||0),0)};}
function statsFor(session){
 let answered=0,right=0,wrong=0;
 for(const id of session.ids){const a=session.answers?.[id];if(isAnswered(a)){answered++;if(session.finished||a.submitted){if(isCorrectFor(qOf(id),a))right++;else wrong++;}}}
 if(session.infinite){const r=session.infinite.rolled||{};answered+=r.answered||0;right+=r.right||0;wrong+=r.wrong||0;}
 const total=session.infinite?session.infinite.offset+session.ids.length:session.ids.length;
 return {answered,right,wrong,total,percent:answered?Math.round(right/answered*100):0};
}
function countFor(topics,bank){return ALL.filter(q=>topics.includes(q.topic)&&(bank==='misto'||q.mode===bank)).length;}
function formatDate(v){try{return new Intl.DateTimeFormat('pt-BR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}).format(new Date(v));}catch(e){return ''}}
function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];} return arr;}
function navigate(v,scroll=true){view=v; state.lastView=v; document.body.dataset.view=v; save(); render(); if(scroll) window.scrollTo({top:0,behavior:'instant'});}
function sessionRow(s){const st=statsFor(s);return `<div class="list-item"><div><strong>${h(s.title)}</strong><p>${s.course==='tutoria'?'Tutoria':'Urgência e Emergência'} · ${formatDate(s.createdAt)} · ${s.infinite?st.answered+' respondidas · ∞':st.answered+'/'+st.total+' respondidas'} ${s.finished?'· Finalizada':''}</p></div><div class="session-buttons"><button class="btn secondary" data-action="resume" data-sid="${h(s.id)}">${s.finished?'Rever':'Continuar'}</button><button class="btn warn" data-action="delete-session" data-sid="${h(s.id)}" aria-label="Excluir esta sessão" title="Excluir somente esta sessão">🗑</button></div></div>`;}
function makeQueue(topicNames,bank,order){
 // A cada nova sessão sorteia as questões dentro de cada tema, inclusive em ordem intercalada.
 // O modo intercalado preserva alternância de matérias; o aleatório embaralha tudo.
 const topics=shuffle([...topicNames]);
 const map={};
 for(const topic of topics){
   const raw=ALL.filter(q=>q.topic===topic && (bank==='misto'||q.mode===bank) && !(state.prefs.studyMode==='prova'&&q.kind) && (state.prefs.studyMode!=='dicas'||q.dica));
   const regular=shuffle(raw.filter(q=>!q.kind));
   const interactive=shuffle(raw.filter(q=>q.kind));
   if(bank==='decorar'){
     map[topic]=[];
     // Espalha exercícios interativos sem repetir questão na sessão.
     while(regular.length||interactive.length){
       for(let i=0;i<4&&regular.length;i++)map[topic].push(regular.shift());
       if(interactive.length)map[topic].push(interactive.shift());
     }
   }else map[topic]=shuffle(raw);
 }
 let queue=[];
 if(order==='aleatoria'){
   queue=shuffle(topics.flatMap(t=>map[t]));
 }else{
   // Escolhe uma matéria de cada vez sem repetições consecutivas quando há alternativas.
   let remaining=true;
   while(remaining){
     remaining=false;
     for(const topic of topics){if(map[topic].length){queue.push(map[topic].shift());remaining=true;}}
   }
 }
 const prev=state.sessions.slice().reverse().find(s=>(s.course||'ue')===state.prefs.course && s.bank===bank &&
   JSON.stringify([...s.topics].sort())===JSON.stringify([...topicNames].sort()) && s.ids.length>0);
 // Garantia de que a nova sessão não repetirá o mesmo início da sessão anterior.
 if(prev && queue.length>1 && queue[0].id===prev.ids[0]){
   const target=queue.findIndex((q,i)=>i>0 && q.id!==prev.ids[0] && (order==='aleatoria'||q.topic===queue[0].topic));
   if(target>0)[queue[0],queue[target]]=[queue[target],queue[0]];
 }
 return queue.map(q=>q.id);
}
function newSession({ids,mode,bank,topics,title,infinite=null}){const now=Date.now(); const s={course:state.prefs.course,id:`s${now}-${Math.random().toString(36).slice(2,7)}`,mode,bank,topics,title,ids,answers:{},currentIndex:0,createdAt:now,updatedAt:now,finished:false,finishedAt:null,reviewedBlocks:[],pendingReviewBlock:null,infinite}; state.sessions.push(s); if(state.sessions.length>80) state.sessions=state.sessions.slice(-80); state.activeSessionId=s.id; save(); navigate('quiz');}
function startInfinite(){
 const pool=ALL.map(q=>q.id);if(!pool.length){toast('Banco de questões indisponível.');return;}
 const order=shuffle([...pool]);const first=order[0];const data={order,cursor:1,cycle:0,recent:[first],counter:1,offset:0,rolled:{answered:0,right:0,wrong:0}};
 newSession({ids:[`infinite@${first}@1`],mode:'infinito',bank:'misto',topics:[...TOPIC_NAMES],title:`Questões infinitas · ${state.prefs.course==='tutoria'?'Tutoria':'Urgência e Emergência'}`,infinite:data});
}
function appendInfinite(s){
 const d=s.infinite;if(!d||s.finished)return;
 if(d.cursor>=d.order.length){
  const recent=new Set(d.recent.slice(-INFINITE_COOLDOWN));const fresh=shuffle(ALL.map(q=>q.id));
  d.order=[...fresh.filter(id=>!recent.has(id)),...fresh.filter(id=>recent.has(id))];d.cursor=0;d.cycle++;
 }
 const id=d.order[d.cursor++];d.counter++;d.recent.push(id);if(d.recent.length>INFINITE_COOLDOWN)d.recent.shift();
 s.ids.push(`infinite@${id}@${d.counter}`);s.currentIndex=s.ids.length-1;
 // Mantém só uma janela recente da sessão na memória do aparelho; as estatísticas e revisões são preservadas.
 if(s.ids.length>INFINITE_WINDOW){const cut=120;const old=s.ids.splice(0,cut);for(const key of old){const a=s.answers[key];if(isAnswered(a)){d.rolled.answered++;if(isCorrectFor(qOf(key),a))d.rolled.right++;else d.rolled.wrong++;}delete s.answers[key];}d.offset+=cut;s.currentIndex-=cut;s.reviewedBlocks=(s.reviewedBlocks||[]).filter(b=>b>=Math.floor(d.offset/10));}
 s.updatedAt=Date.now();save();render();window.scrollTo({top:0,behavior:'instant'});
}
function start(){const p=state.prefs; if(p.course==='ue'&&p.studyMode==='dicas'){p.studyMode='decorar';save();} if(p.studyMode==='infinito'){startInfinite();return;} const bank=p.studyMode==='prova'?p.examBank:p.studyMode==='dicas'?'misto':p.studyMode; let ids=makeQueue(p.selectedTopics,bank,p.order); if(!ids.length){toast('Selecione ao menos um tema com questões.');return;} ids=ids.slice(0,Math.min(50,ids.length)); const name=p.selectedTopics.length===TOPIC_NAMES.length?'Todos os temas':p.selectedTopics.length===1?p.selectedTopics[0]:`${p.selectedTopics.length} temas`; newSession({ids,mode:p.studyMode,bank,topics:[...p.selectedTopics],title:`${modeName(p.studyMode)} · ${name}`});}
function fromPool(pool,label,count=10){let ids=[...pool].filter(id=>BYID.has(id)); if(!ids.length){toast('Ainda não há questões neste filtro.');return;} ids=shuffle(ids).slice(0,Math.min(count,ids.length)); const topics=[...new Set(ids.map(id=>qOf(id).topic))]; newSession({ids,mode:'revisao',bank:'misto',topics,title:label});}
function record(q,selected,override){let r=state.attempts[q.id]||{tries:0,right:0,wrong:0,everWrong:false,lastCorrect:null}; r.tries++; const correct=typeof override==='boolean'?override:selected===q.answer; if(correct)r.right++; else r.wrong++; r.everWrong=r.everWrong||!correct; r.lastCorrect=correct; r.updatedAt=Date.now(); state.attempts[q.id]=r; scheduleItem(state.spaced,q.id,correct?'good':'again');}
function maybeBlockReview(s){
 if(!s||s.finished||s.mode==='prova'||!state.prefs.zoadaReview)return;
 const offset=s.infinite?.offset||0;
 const lo=Math.floor(offset/10),hi=Math.ceil((offset+s.ids.length)/10);
 const reviewed=s.reviewedBlocks||[];
 for(let b=lo;b<hi;b++){
  if(reviewed.includes(b))continue;
  const local=b*10-offset;
  if(local<0||local+10>s.ids.length)continue;
  const part=s.ids.slice(local,local+10);
  if(part.length===10&&part.every(id=>s.answers[id]?.submitted)){s.pendingReviewBlock=b;return;}
 }
}
function toggleZoada(){state.prefs.zoadaReview=!state.prefs.zoadaReview; const s=active(); if(!state.prefs.zoadaReview){zoadaQuip=QUIP; if(s){s.reviewedBlocks=s.reviewedBlocks||[]; for(let b=Math.floor((s.infinite?.offset||0)/10);b<Math.ceil(((s.infinite?.offset||0)+s.ids.length)/10);b++){const start=b*10-(s.infinite?.offset||0);const ids=s.ids.slice(start,start+10);if(ids.length===10 && ids.every(id=>s.answers[id]?.submitted) && !s.reviewedBlocks.includes(b))s.reviewedBlocks.push(b);} s.pendingReviewBlock=null;} toast('🪿 Zoada: '+QUIP);} else {zoadaQuip=''; toast('Zoada voltou para as revisões por bloco!');} save(); render();}
function choose(index){const s=active(); if(!s||s.finished)return; const id=s.ids[s.currentIndex],a=s.answers[id]||{}; if(a.submitted)return; const q=qOf(id);if(q.kind)return;const isExam=s.mode==='prova';s.answers[id]={choice:index,submitted:!isExam,right:isExam?null:index===q.answer};if(!isExam){record(q,index);maybeBlockReview(s);}s.updatedAt=Date.now();save();render();}
function jump(index){const s=active(); if(!s) return; s.currentIndex=Math.max(0,Math.min(Number(index),s.ids.length-1)); s.updatedAt=Date.now(); save(); render(); window.scrollTo({top:0,behavior:'instant'});}
function finish(){const s=active(); if(!s) return; if(s.finished){navigate('results'); return;} const st=statsFor(s); if(st.answered<st.total && !s.infinite && !confirm(`Você respondeu ${st.answered} de ${st.total} questões. Finalizar e deixar ${st.total-st.answered} sem resposta?`)) return; const isExam=s.mode==='prova'; if(isExam){for(const id of s.ids){const a=s.answers[id]; if(isAnswered(a)){a.submitted=true; a.right=isCorrectFor(qOf(id),a); record(qOf(id),a.choice,a.right);}}} s.finished=true; s.finishedAt=Date.now(); s.updatedAt=Date.now(); save(); navigate('results');}

function fullExplanation(q,a){
 const correct=isCorrectFor(q,a);
 const main=q.deepExplanation||q.explanation||'Revise o conceito central e identifique o dado decisivo no enunciado.';
 const other=q.whyWrong||'Compare cada alternativa com o mecanismo, os critérios e a prioridade da conduta.';
 const older=!q.deepExplanation;
 const context=EXPLANATION_NOTES[q.topic]||'Reavalie os dados que definem o diagnóstico e a prioridade clínica.';
 const source=q.sourceUrl?`<a href="${h(q.sourceUrl)}" target="_blank" rel="noopener noreferrer">Conferir diretriz de referência ↗</a>`:'';
 return `<section class="zoada-full-reason" aria-label="Correção detalhada do Zoada"><div class="reason-head"><img src="${ZOADA_IMAGES.prova}" alt="Zoada explicando"><div><span>🪿 Explicação detalhada do Zoada</span><h3>${correct?'Você acertou. Entenda o porquê.':'Vamos entender onde está a pegadinha.'}</h3></div></div><div class="reason-answer"><b>Alternativa correta:</b> ${h(answerText(q))}</div><h4>Raciocínio clínico e fisiopatológico</h4><p>${h(main)}</p>${context?`<p>${h(context)}</p>`:''}<h4>Por que as outras opções confundem?</h4><p>${h(other)}</p><div class="reason-foot">${older?'Revisão do tema:':'Material e diretriz consultados:'} ${h(q.source||'Material autoral de revisão')} ${source?` · ${source}`:''}</div></section>`;
}
function gooseBubble(q,a,canReveal,mobile=false){
 const isCorrect=canReveal&&isCorrectFor(q,a);
 const hint=q.classic_intro?`${q.classic_intro} Isso é um caso clássico nesse contexto.`:'Observe o dado-chave, a gravidade e a prioridade antes de responder.';
 const message=canReveal?(isCorrect?'Boa! Sua decisão foi adequada.':'Não foi desta vez. A análise está logo abaixo da questão.')+' Abra a explicação detalhada para entender mecanismo, conduta e pegadinhas.':hint;
 const img=canReveal?ZOADA_IMAGES.prova:ZOADA_IMAGES.casos;
 if(mobile)return `<div class="goose-mobile ${canReveal?'':'pre-answer'}"><div class="mobile-speech"><strong>${canReveal?'🪿 Zoada explica':'🪿 Zoada'}</strong>${h(message)}</div><img src="${img}" alt="Zoada, ganso professor"></div>`;
 return `<div class="goose-tutor ${canReveal?'is-explaining':''}"><img src="${img}" alt="Zoada, ganso professor"><div class="speech ${canReveal?(isCorrect?'correct-speech':'wrong-speech'):''}"><strong>${canReveal?'🪿 Zoada explica':'🪿 Zoada'}</strong>${h(message)}</div></div>`;
}
function renderTipsRoadmap(){
 const tips=window.ZOADA_EXAM_TIPS?.[state.prefs.course]||[];
 const mastery=state.prefs.tipMastery||{};
 const done=tips.filter(t=>!!mastery[t.id]).length;
 return `<section class="section tips-block"><div class="block-title"><div><h2>📋 Roteiro das dicas da prova</h2><p class="hint">Abra cada orientação, revise o checklist e pratique apenas aquele assunto.</p></div><span class="pill">${done}/${tips.length} revisadas</span></div><div class="tips-list">${tips.map((t,i)=>`<details class="tip-item" ${i===0?'open':''}><summary><span class="tip-number">${i+1}</span><strong>${h(t.title)}</strong><span class="tip-status">${mastery[t.id]?'✓ Revisei':'Ver tópicos'} ▾</span></summary><div class="tip-body"><div class="tip-subject">${h(t.topic)}</div><ul>${t.bullets.map(b=>`<li>${h(b)}</li>`).join('')}</ul><div class="small-actions"><button class="btn primary" data-action="practice-tip" data-tip="${h(t.id)}">🎯 Praticar questões desta dica</button><button class="btn secondary" data-action="mark-tip" data-tip="${h(t.id)}">${mastery[t.id]?'✓ Revisado — desmarcar':'☐ Marcar como revisado'}</button></div></div></details>`).join('')}</div></section>`;
}
function renderHome(){
 const st=globalStats(); const p=state.prefs; const unfinished=activeNotFinished();
 const pose=!modeTouched?'welcome':p.studyMode==='infinito'?'decorar':p.studyMode;
 const zoadaMessage=!modeTouched?'Oi! Eu sou o Zoada, seu professor de plantão. Vou acompanhar seus estudos!':({decorar:'Decorar? Adoro esses valores chatinhos. Bora fixar!',casos:'Casos clínicos? Hmm... vamos usar o raciocínio!',prova:'Modo prova? Bico fechado até você terminar!',infinito:'Infinitas? Então eu fico de plantão com você o tempo que quiser!',dicas:'Chegaram as dicas! Vamos resolver o que os professores gostam de cobrar.'})[p.studyMode];
 const modes=[['decorar','⚡','Modo Decorar','Questões rápidas, associação, ordenação e pegadinhas.'],['casos','🩺','Casos clínicos','Vinhetas inéditas e casos clássicos.'],['prova','✍️','Modo Prova','Gabarito escondido até o fim.'],['infinito','♾️','Questões infinitas','Todos os temas e formatos, sem limite de 50 e sem ordem previsível.'],['dicas','🎯','Aprendizado baseado nas dicas da prova','Questões difíceis focadas nas dicas da sua avaliação, com correções completas.']].filter(x=>p.course==='tutoria'||x[0]!=='dicas');
 return `<section class="hero hero-clean"><div class="hero-copy"><div class="eyebrow">Seu plantão começa aqui</div><h1>${p.course==='tutoria'?'Domine a Tutoria.':'Aprenda. Responda.<br>Domine a urgência.'}</h1><p>${ALL.length} questões em ${TOPIC_NAMES.length} temas de ${p.course==='tutoria'?'Tutoria':'Urgência e Emergência'}. Dois bancos separados para você revisar como cada disciplina cobra.</p><div class="zoada-stage"><div class="zoada-intro" role="status"><b>Zoada:</b> ${h(zoadaMessage)}</div><img class="hero-img hero-zoada" src="${ZOADA_IMAGES[pose]}" alt="Zoada, ganso professor"></div><div class="hero-actions">${unfinished?`<button class="btn white" data-action="resume" data-sid="${h(unfinished.id)}">▶ Continuar revisão</button>`:'<button class="btn white" data-action="scroll-setup">▶ Começar agora</button>'}<button class="btn ghost" data-action="goto" data-view="review">🧠 Revisão</button></div></div></section>
 <div class="creator-credit" aria-label="Créditos do projeto"><span>Idealizado por</span><strong>Antonio Fernando de Souza Guerra Neto</strong></div>
 <div class="stats-strip"><div class="metric"><b>${ALL.length}</b><small>Questões disponíveis</small></div><div class="metric"><b>${st.total}</b><small>Questões já praticadas</small></div><div class="metric"><b>${st.right}</b><small>Últimas tentativas corretas</small></div><div class="metric"><b>${st.wrong}</b><small>Erros para revisar</small></div></div>
 <section class="section quick-revisions"><div class="quick-feature"><div><strong>🗓 Revisões para hoje</strong><p>Você tem ${dueCount()} questões agendadas e ${cardDueCount()} flashcards vencidos para revisar.</p></div><div class="small-actions"><button class="btn primary" data-action="start-due" ${!dueCount()?'disabled':''}>Revisar ${dueCount()} questões</button><button class="btn secondary" data-action="goto" data-view="plan">Meu plano de provas</button></div></div></section>
 <section class="section" id="study"><div class="block-title"><h2>1. Escolha sua disciplina</h2><span class="pill">Bancos independentes</span></div><div class="course-select" role="group" aria-label="Disciplina">${[['ue','🚑','Urgência e Emergência','Conduta e estabilização imediata'],['tutoria','📚','Tutoria','Raciocínio, fisiopatologia e critérios']].map(([key,emoji,name,sub])=>`<button class="course-choice ${p.course===key?'active':''}" data-action="select-course" data-course="${key}" aria-pressed="${p.course===key}"><span class="course-icon">${emoji}</span><span><strong>${name}</strong><small>${sub}</small></span></button>`).join('')}</div></section><section class="section"><div class="block-title"><h2>2. Escolha como estudar</h2><span class="pill">Seu ritmo</span></div><div class="mode-cards">${modes.map(x=>`<button class="mode-card ${p.studyMode===x[0]?'active':''}" data-action="set-mode" data-mode="${x[0]}" aria-pressed="${p.studyMode===x[0]}"><span class="mode-symbol">${x[1]}</span><strong>${x[2]}</strong><span>${x[3]}</span></button>`).join('')}</div></section>
 <section class="section"><div class="block-title"><h2>3. Selecione os temas ${p.studyMode==='infinito'?'(filtro dos demais modos)':''}</h2><button class="btn secondary" data-action="select-all">${p.selectedTopics.length===TOPIC_NAMES.length?'Todos selecionados':'Selecionar todos'}</button></div><div class="topic-grid">${TOPICS.map(t=>`<button class="topic-tile ${p.selectedTopics.includes(t.name)?'active':''}" ${selColor(t.name)} data-action="toggle-topic" data-topic="${h(t.name)}"><div class="topic-heading"><span class="topic-dot"></span><b>${h(t.name)}</b></div><small>${ALL.filter(q=>q.topic===t.name&&q.mode==='decorar').length} decorar · ${ALL.filter(q=>q.topic===t.name&&q.mode==='casos').length} casos</small></button>`).join('')}</div></section>
 ${p.course==='tutoria'&&p.studyMode==='dicas'?renderTipsRoadmap():''}<section class="section panel"><div class="block-title"><h2>4. Prepare sua sessão</h2><span class="pill">${p.studyMode==='infinito'?'♾️ Sem limite':'50 questões'}</span></div>${p.studyMode==='prova'?`<div class="field-row"><span class="label">Conteúdo da prova</span><div class="segmented">${[['misto','Misto'],['decorar','Decorar'],['casos','Casos clínicos']].map(([v,l])=>`<button class="chip ${p.examBank===v?'active':''}" data-action="exam-bank" data-value="${v}">${l}</button>`).join('')}</div></div>`:''}<div class="field-row"><span class="label">Ordem de apresentação</span><div class="segmented">${[['intercalada','Intercalada'],['aleatoria','Aleatória']].map(([v,l])=>`<button class="chip ${p.order===v?'active':''}" data-action="order" data-value="${v}">${l}</button>`).join('')}</div></div>${p.studyMode==='prova'?`<div class="field-row"><span class="label">Cronômetro</span><label class="checkline"><input type="checkbox" data-action="clock" ${p.clock?'checked':''}> Mostrar tempo</label></div>`:''}${zoadaSwitch()}<div class="alert" style="margin:18px 0">${p.course==='tutoria'?'No modo Dicas são selecionadas apenas questões marcadas pelas orientações da prova de Tutoria. ':''}Nos modos de estudo, basta tocar na alternativa para receber a correção. No Modo Decorar, também há questões de associação, ordenação e resposta livre. No infinito, as questões são sempre sorteadas automaticamente entre todos os temas e formatos, ignorando o filtro de assuntos e a ordem escolhida acima, sem repetir até completar uma rodada; após isso, um intervalo evita repetições próximas. Em temas com menos de 50 casos clínicos, são apresentados todos os casos disponíveis.</div><button class="btn primary large wide" data-action="start">Começar ${p.studyMode==='prova'?'prova':'revisão'} →</button></section>
 ${state.sessions.some(s=>(s.course||'ue')===p.course)?`<section class="section"><div class="block-title"><h2>Últimas sessões</h2><button class="inline-ghost" data-action="goto" data-view="stats">Ver histórico</button></div><div class="panel-flat">${state.sessions.filter(s=>(s.course||'ue')===p.course).slice(-3).reverse().map(s=>sessionRow(s)).join('')}</div></section>`:''}`;
}

function zoadaSwitch(){return `<div class="zoada-switch"><div><strong>🪿 Revisão do Zoada a cada 10 questões</strong><p class="hint">${state.prefs.zoadaReview?'Ativada: ao completar um bloco, o Zoada revisa somente aquelas 10 questões.':'Desativada: siga sem interrupções. A correção imediata continua funcionando.'}</p></div><button class="toggle-pill ${state.prefs.zoadaReview?'on':''}" data-action="toggle-zoada"><span class="toggle-knob"></span><span class="toggle-label">${state.prefs.zoadaReview?'Ligado':'Desligado'}</span></button></div>${zoadaQuip&&!state.prefs.zoadaReview?`<div class="zoada-grumble"><img src="${ZOADA_IMAGES.casos}" alt="Zoada resmungando"><p><b>Zoada:</b> “${h(zoadaQuip)}”</p></div>`:''}`;}

function renderBlockTracker(s,n){
 const blockStart=Math.floor(n/10)*10;
 const blockEnd=Math.min(blockStart+10,s.ids.length);
 const isExam=s.mode==='prova'&&!s.finished;
 let parts=[];
 for(let i=0;i<10;i++){
   const absolute=blockStart+i; const exists=absolute<blockEnd; const id=s.ids[absolute]; const a=exists?s.answers[id]:null; let cls='';
   if(exists && a && a.choice!==undefined&&a.choice!==null){
     if(!isExam && a.submitted){cls = isCorrectFor(qOf(id),a)?'right':'wrong';}
     else cls='done';
   }
   const active=absolute===n?'active':'';
   parts.push(`<button class="step-pill ${cls} ${active} ${exists?'':'ghost'}" ${exists?`data-action="jump" data-index="${absolute}"`:'disabled'}>${i+1}</button>`);
   if(i<9) parts.push('<span class="feather-gap" aria-hidden="true">🪶</span>');
 }
 return `<div class="block-10-wrap"><div class="block-progress-head"><span>${s.infinite?`Bloco ${Math.floor((s.infinite.offset+n)/10)+1} · ∞`:`Bloco ${Math.floor(n/10)+1} de ${Math.ceil(s.ids.length/10)}`}</span><span>${s.infinite?'Até 10 por bloco':Math.min(blockEnd-blockStart,10)+' questões neste bloco'}</span></div><div class="block-10-bar">${parts.join('')}</div></div>`;
}

function renderInteraction(q,a,canReveal){
 const locked=canReveal;
 if(q.kind==='order'){
   const chosen=Array.isArray(a.choice)?a.choice:[];
   const items=q.steps.map((text,i)=>({text,index:i})).reverse();
   const used=new Set(chosen);
   return `<div class="interactive-task"><div class="interaction-hint">Toque nos itens na sequência correta. É possível desfazer a última escolha.</div><div class="order-slots">${q.steps.map((_,i)=>`<div class="order-slot ${chosen[i]!==undefined?'filled':''}"><b>${i+1}</b><span>${chosen[i]!==undefined?h(q.steps[chosen[i]]):'Escolha o próximo passo'}</span></div>`).join('')}</div><div class="interaction-options">${items.map(({text,index})=>`<button class="interaction-choice" data-action="order-pick" data-index="${index}" ${locked||used.has(index)?'disabled':''}>${h(text)}</button>`).join('')}</div>${!locked&&chosen.length?`<button class="btn secondary" data-action="order-undo">↶ Desfazer último</button>`:''}${canReveal?`<div class="interaction-answer ${isCorrectFor(q,a)?'good':'bad'}"><b>${isCorrectFor(q,a)?'✓ Sequência correta!':'× Ordem correta:'}</b><p>${h(q.steps.join(' → '))}</p></div>`:''}</div>`;
 }
 if(q.kind==='match'){
   const picked=a.choice&&typeof a.choice==='object'&&!Array.isArray(a.choice)?a.choice:{};
   const selected=a.selectedLeft;
   const rights=q.pairs.map(x=>x[1]).reverse();const assigned=new Set(Object.values(picked));
   return `<div class="interactive-task"><div class="interaction-hint">Toque em um item da esquerda e depois na resposta correspondente da direita. Ao completar os pares, o Zoada corrige.</div><div class="match-grid"><div><b class="match-col-head">Situação / Conceito</b>${q.pairs.map((pair,i)=>`<button class="match-item ${picked[i]!==undefined?'paired':''} ${String(selected)===String(i)?'selected':''}" data-action="match-left" data-index="${i}" ${locked||picked[i]!==undefined?'disabled':''}>${h(pair[0])}</button>`).join('')}</div><div><b class="match-col-head">Relação / Resposta</b>${rights.map((val,i)=>`<button class="match-item ${assigned.has(val)?'paired':''}" data-action="match-right" data-index="${i}" ${locked||assigned.has(val)?'disabled':''}>${h(val)}</button>`).join('')}</div></div>${Object.keys(picked).length?`<p class="hint">${Object.keys(picked).length} de ${q.pairs.length} pares ligados.</p>`:''}${!locked&&Object.keys(picked).length?`<button class="btn secondary" data-action="match-reset">↶ Limpar ligações</button>`:''}${canReveal?`<div class="interaction-answer ${isCorrectFor(q,a)?'good':'bad'}"><b>${isCorrectFor(q,a)?'✓ Todas as associações corretas!':'× Associações corretas:'}</b><p>${h(q.pairs.map(x=>x.join(' → ')).join(' · '))}</p></div>`:''}</div>`;
 }
 const val=typeof a.draft==='string'?a.draft:'';
 return `<div class="interactive-task"><div class="interaction-hint">Digite o valor ou termo que você lembra. A correção ocorre ao confirmar.</div><form id="fill-form" class="fill-form"><label for="fill-input">Sua resposta</label><input id="fill-input" name="fill" autocomplete="off" autocapitalize="off" placeholder="Digite a resposta" value="${h(val)}" ${locked?'disabled':''}><button class="btn primary" type="submit" ${locked?'disabled':''}>Conferir resposta</button></form>${canReveal?`<div class="interaction-answer ${isCorrectFor(q,a)?'good':'bad'}"><b>${isCorrectFor(q,a)?'✓ Resposta correta!':'× Resposta esperada:'}</b><p>${h(q.accepted[0])}</p></div>`:''}</div>`;
}
function renderQuiz(){
 const s=active();if(!s)return `<div class="empty-state">Nenhuma sessão ativa. <button class="btn primary" data-action="goto" data-view="home">Criar sessão</button></div>`;
 const n=Math.max(0,Math.min(s.currentIndex,s.ids.length-1));s.currentIndex=n;const q=qOf(s.ids[n]);if(!q)return '<div class="empty-state">Questão indisponível.</div>';
 const st=statsFor(s),a=s.answers[s.ids[n]]||{},isExam=s.mode==='prova',canReveal=!!(s.finished||(!isExam&&a.submitted));
 const opts=q.kind?renderInteraction(q,a,canReveal):q.options.map((opt,i)=>{const selected=a.choice===i;const cls=canReveal&&i===q.answer?'correct':canReveal&&selected&&i!==q.answer?'incorrect':selected?'selected':'';return `<button class="option ${cls}" data-action="choose" data-index="${i}" ${canReveal?'disabled':''}><span class="letter">${'ABCDE'[i]}</span><span class="option-label">${h(opt)}</span></button>${canReveal&&i===q.answer?gooseBubble(q,a,true,true):''}`}).join('');
 const topicsLabel=s.topics.length===(s.course==='tutoria'?TUTOR_TOPICS.length:UE_TOPICS.length)?'Todos os temas':s.topics.length===1?s.topics[0]:`${s.topics.length} temas`;
 const guide=s.ids.map((id,j)=>{const r=s.answers[id],submitted=r&&(s.finished||r.submitted),correct=submitted&&isCorrectFor(qOf(id),r);return {j,answered:isAnswered(r),correct,submitted};});
 const map=guide.map(x=>`<button class="q-num ${x.j===n?'active':x.submitted?x.correct?'done':'wrong':x.answered?'picked':''}" data-action="jump" data-index="${x.j}">${s.infinite?s.infinite.offset+x.j+1:x.j+1}</button>`).join('');
 const start=Math.floor(n/10)*10;
 const compact=guide.slice(start,Math.min(start+10,guide.length)).map(x=>`<button class="q-num ${x.j===n?'active':x.submitted?x.correct?'done':'wrong':x.answered?'picked':''}" data-action="jump" data-index="${x.j}">${s.infinite?s.infinite.offset+x.j+1:x.j+1}</button>`).join('');
 const status=s.finished?'Sessão corrigida':isExam?'Sem gabarito durante a prova':'Correção imediata';
 return `<div class="quiz-top"><div class="quiz-head"><button class="btn secondary" data-action="goto" data-view="home">← Início</button><span class="small muted">${h(modeName(s.mode))} · ${h(topicsLabel)}</span><span class="pill">${s.infinite?st.answered+' respondidas · ∞':st.answered+'/'+st.total}</span></div><div class="panel-flat quiz-progress-panel"><div class="field-row" style="margin:0"><b>${s.infinite?`Questão ${s.infinite.offset+n+1} · ∞`:`Questão ${n+1} de ${s.ids.length}`}</b><span class="small muted">${status}${s.mode==='prova'&&state.prefs.clock?` · <b id="elapsed-time">00:00</b>`:''}</span></div>${renderBlockTracker(s,n)}</div></div>
 <div class="q-layout"><article class="panel q-panel"><div class="question-head"><span class="course-badge" ${selColor(q.topic)}><span class="topic-dot" style="margin-right:6px"></span>${h(q.topic)}</span><span class="q-style">${s.course==='tutoria'?'📚 Tutoria':'🚑 Urgência e Emergência'} · ${h(q.style||q.keypoint||'Questão')}</span></div><div class="top-round-nav"><button class="nav-circle green" data-action="previous" ${n===0?'disabled':''} aria-label="Questão anterior">←</button><button class="nav-circle purple ${state.doubts[q.id]?'marked':''}" data-action="doubt" data-qid="${h(q.id)}" aria-label="Marcar questão como dúvida">?</button><button class="nav-circle green" data-action="next" aria-label="Próxima questão">→</button></div>${q.classic_intro&&!canReveal?`<div class="classic-banner">✦ Zoada: isso é um caso clássico nesse contexto.</div>`:''}<div class="question-text">${h(q.question)}</div><div class="option-grid">${opts}</div>${q.kind&&canReveal?gooseBubble(q,a,true,true):''}${!canReveal&&q.classic_intro?gooseBubble(q,a,false,true):''}${canReveal?fullExplanation(q,a):''}<div class="q-actions"><button class="btn secondary" data-action="favorite" data-qid="${h(q.id)}">${state.favorites[q.id]?'★ Favorita':'☆ Favoritar'}</button>${isExam&&!s.finished?`<span class="mini-caption">${isAnswered(a)?'✓ Alternativa registrada':'Responda para continuar.'}</span>`:canReveal&&s.mode!=='prova'?`<button class="btn secondary" data-action="retry">↺ Refazer</button>`:`<span class="mini-caption">${q.kind?'Atividade interativa':'Toque para corrigir automaticamente.'}</span>`}</div>${canReveal&&s.mode!=='prova'?`<div class="confidence-row"><span>Como foi lembrar?</span>${[['hard','Difícil'],['good','Lembrei'],['easy','Fácil']].map(([v,label])=>`<button class="chip ${a.grade===v?'active':''}" data-action="grade-q" data-grade="${v}">${label}</button>`).join('')}</div>`:''}${canReveal?`<div class="source-label">Fonte: ${h(q.source||'Materiais da disciplina')} · ID ${h(q.id)}</div>`:''}</article>
 <aside class="quiz-side">${gooseBubble(q,a,canReveal)}<div class="q-nav-list sticky"><div class="field-row" style="margin:0"><strong class="small">Navegar</strong><span class="small muted">${s.infinite?st.answered+' respondidas · ∞':st.answered+'/'+st.total}</span></div><div class="q-map">${map}</div><button class="btn secondary wide" data-action="finish">${s.finished?'Ver desempenho':'Finalizar sessão'}</button></div></aside></div>
 <div class="mobile-bottom-dock"><div class="field-row" style="margin:0 0 8px"><button class="dock-toggle" data-action="toggle-map"><b>Navegar ${navExpanded?'▴':'▾'}</b><span class="small muted">${s.infinite?st.answered+' · ∞':st.answered+'/'+st.total}</span></button></div><div class="q-map">${navExpanded?map:compact}</div><button class="btn secondary wide" data-action="finish">${s.finished?'Ver desempenho':'Finalizar sessão'}</button></div>${s.pendingReviewBlock!==null&&s.pendingReviewBlock!==undefined&&!s.finished&&s.mode!=='prova'&&state.prefs.zoadaReview?renderBlockReview(s,s.pendingReviewBlock):''}`;
}
function completeInteractive(choice,correct){const s=active();if(!s||s.finished)return;const id=s.ids[s.currentIndex],q=qOf(id),a=s.answers[id]||{};if(a.submitted)return;s.answers[id]={...a,choice,submitted:true,right:correct};record(q,choice,correct);s.updatedAt=Date.now();maybeBlockReview(s);save();render();}
function reviewBlockData(s,b){const offset=s.infinite?.offset||0,start=b*10,end=start+10,ids=s.ids.slice(start-offset,end-offset);const entries=ids.map((id,i)=>{const q=qOf(id),a=s.answers[id]||{};return {q,a,no:start+i+1,correct:isCorrectFor(q,a)}});const correct=entries.filter(x=>x.correct).length;return {start,end,entries,correct,wrong:entries.length-correct};}
function renderBlockReview(s,b){const {start,end,entries,correct,wrong}=reviewBlockData(s,b); const highlights=entries.map(({q,no,correct})=>`<li class="zoada-recap-row"><div class="recap-mark ${correct?'good':'bad'}">${correct?'✓':'×'}</div><div><b>${no}. ${h(q.topic)} · ${h(q.keypoint||q.style||'Essencial')}</b><p>${h(q.explanation)}</p>${!correct?`<small>Correta: ${h(q.kind?'':('ABCDE'[q.answer]+' · '))}${h(answerText(q))}</small>`:''}</div></li>`).join(''); return `<div class="zoada-overlay" role="dialog" aria-modal="true"><div class="zoada-overlay-card"><header class="zoada-overlay-hero"><img src="${ZOADA_IMAGES.review}" alt="Zoada"><div><span class="eyebrow">Zoada tomou a sala!</span><h2>Fechamos o bloco ${b+1}!</h2><p>Revisão só das questões <b>${start+1} a ${end}</b>.</p><div class="recap-score"><span>✓ ${correct} acertos</span><span>× ${wrong} erros</span></div></div></header><div class="zoada-overlay-body"><h3>O que guardar destas ${entries.length} questões</h3><ul class="zoada-recap">${highlights}</ul></div><footer class="zoada-overlay-footer"><button class="btn primary large wide" data-action="dismiss-block">Entendi, Zoada! Continuar →</button><button class="btn secondary wide" data-action="toggle-zoada">Desligar suas revisões</button></footer></div></div>`;}

function renderResults(){const s=active(); if(!s)return '<div class="empty-state">Nenhuma sessão ativa.</div>'; const st=statsFor(s); const percent=st.answered?Math.round(st.right/st.answered*100):0; const unanswered=st.total-st.answered; return `<div class="container-narrow"><div class="block-title"><button class="btn secondary" data-action="goto" data-view="home">← Início</button><span class="pill">${s.finished?'Sessão finalizada':'Sessão em andamento'}</span></div><section class="panel result-hero"><div><div class="eyebrow">Boletim do plantão</div><h1 style="margin:7px 0 6px">${percent>=80?'Excelente revisão!':percent>=60?'Bom trabalho, continue!':'Vamos reforçar os pontos-chave.'}</h1><div class="result-score">${percent}%</div><p class="muted">${st.right} acertos · ${st.wrong} erros · ${s.infinite?st.answered+' respondidas no modo infinito':unanswered+' sem resposta · '+st.total+' questões'}</p><div class="small-actions"><button class="btn primary" data-action="review-session">Rever correções</button><button class="btn secondary" data-action="goto" data-view="home">Nova sessão</button></div></div><img src="assets/ganso-professor.webp" alt="Ganso professor celebrando a revisão"></section><section class="section panel"><h2>Mapa das questões ${s.infinite?'(últimas '+s.ids.length+' visitadas)':''}</h2><div class="results-list">${s.ids.map((id,i)=>{const a=s.answers[id]||{}; const c=isAnswered(a)?isCorrectFor(qOf(id),a):null; return `<button class="${c===true?'right':c===false?'wrong':'unanswered'}" data-action="jump-to-review" data-index="${i}">${s.infinite?s.infinite.offset+i+1:i+1} ${c===true?'✓':c===false?'×':'–'}</button>`}).join('')}</div></section></div>`;}

function matchingPool(){const errors=ALL.filter(q=>state.attempts[q.id]?.lastCorrect===false); if(reviewTab==='due')return ALL.filter(q=>state.spaced[q.id]&&state.spaced[q.id].dueAt<=Date.now());if(reviewTab==='errors')return errors;if(reviewTab==='favorites')return ALL.filter(q=>state.favorites[q.id]);if(reviewTab==='doubts')return ALL.filter(q=>state.doubts[q.id]);if(reviewTab==='classic')return ALL.filter(q=>q.classic_intro);if(reviewTab==='allerrors')return ALL.filter(q=>state.attempts[q.id]?.everWrong);return [];}
function reviewGuideTopic(topic){const tutorMap=window.ZOADA_TUTOR_SUMMARIES?.[topic];const guide=state.prefs.course==='tutoria'&&tutorMap?{map:tutorMap.sections.flatMap(sec=>sec.items).slice(0,8),summary:tutorMap.pearls}:REVIEW_GUIDES[topic]||{map:['Sem resumo disponível'],summary:[]};return `<section class="panel section"><div class="block-title"><h2>🧠 ${h(topic)}</h2><span class="pill">${guide.map.length} ramos</span></div><p class="muted small">Mapa mental — relações e palavras-chave em sequência.</p><div class="mind-tree"><div class="mind-center">${h(topic)}</div><ul class="mind-list">${guide.map.map((x,i)=>`<li><span>${i+1}</span><div>${h(x)}</div></li>`).join('')}</ul></div></section>`;}
function renderClinicalTopic(topic){const d=state.prefs.course==='tutoria'?window.ZOADA_TUTOR_SUMMARIES?.[topic]:window.UE_CLINICAL_SUMMARIES?.[topic];if(!d)return `<div class="empty-state">Resumo não disponível.</div>`;
 return `<section class="panel section clinical-panel"><div class="eyebrow">Ficha clínica do Zoada</div><h2>${h(topic)}</h2><p class="muted">${h(d.intro)}</p>${d.sections.map(sec=>`<section class="clinical-section"><h3>${h(sec.title)}</h3><ul class="clinical-list">${sec.items.map(x=>`<li>${h(x)}</li>`).join('')}</ul></section>`).join('')}
 ${d.tables.map(t=>`<section class="clinical-section"><h3>${h(t.title)}</h3>${t.note?`<p class="hint">${h(t.note)}</p>`:''}<div class="clinical-table-scroll"><table class="clinical-table"><thead><tr>${t.cols.map(c=>`<th>${h(c)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(row=>`<tr>${row.map(val=>`<td>${h(val)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`).join('')}
 <section class="clinical-section clinical-pearls"><h3>Pegadinhas e pontos para decorar</h3><ul>${d.pearls.map(x=>`<li>${h(x)}</li>`).join('')}</ul></section><p class="clinical-source">Base: ${d.sources.map(h).join(' · ')}</p></section>`;
}
function renderReview(){const names={maps:'Mapas mentais',summaries:'Resumos clínicos',due:'Para revisar hoje',errors:'Erros pendentes',favorites:'Favoritas',doubts:'Marcadas como dúvida',classic:'Casos clássicos',allerrors:'Histórico de erros'};const pool=matchingPool();const tabs=`<div class="segmented review-tab-list" style="margin:22px 0">${Object.entries(names).map(([id,name])=>`<button class="chip ${reviewTab===id?'active':''}" data-action="review-tab" data-tab="${id}">${name}</button>`).join('')}</div>`;
 if(reviewTab==='maps'||reviewTab==='summaries'){return `<div class="container-narrow"><div class="eyebrow">Revisão</div><h1>${reviewTab==='maps'?'Mapas mentais':'Resumos clínicos e condutas'}</h1><p class="muted">${reviewTab==='maps'?'Fluxos visuais e associação de conceitos para lembrar a sequência do atendimento.':'Quadro clínico, tratamento, urgência, escores e tabelas — separado dos mapas mentais.'}</p>${tabs}<div class="review-topic-list" role="group" aria-label="Escolha o assunto">${TOPIC_NAMES.map(t=>`<button data-action="review-topic" data-topic="${h(t)}" class="chip ${reviewTopic===t?'active':''}">${h(t)}</button>`).join('')}</div>${reviewTab==='maps'?reviewGuideTopic(reviewTopic):renderClinicalTopic(reviewTopic)}</div>`;}
 const groups=TOPICS.filter(t=>pool.some(q=>q.topic===t.name));return `<div class="container-narrow"><div class="eyebrow">Revisão</div><h1>Treino direcionado</h1><p class="muted">Erros, dúvidas, favoritas e casos clássicos ficam reunidos aqui.</p>${tabs}<section class="panel"><div class="block-title"><h2>${h(names[reviewTab])} <span class="pill">${pool.length}</span></h2></div>${pool.length?`<p class="muted small">Temas encontrados: ${groups.map(t=>h(t.name)).join(' · ')}</p><div class="small-actions" style="margin-bottom:18px"><button class="btn primary" data-action="study-pool" data-count="10">Treinar 10</button><button class="btn secondary" data-action="study-pool" data-count="999">Treinar todas (${pool.length})</button></div><div class="table-like">${pool.slice(0,60).map(q=>`<div class="list-item"><div><div class="topic-heading" style="margin-bottom:5px"><span class="topic-dot" ${selColor(q.topic)}></span><strong>${h(q.topic)}</strong> <span class="small muted">${h(q.mode==='casos'?'Caso clínico':'Decorar')}</span></div><p>${h(q.question.slice(0,125))}${q.question.length>125?'…':''}</p></div><button class="btn secondary" data-action="study-one" data-qid="${h(q.id)}">Rever</button></div>`).join('')}</div>`:`<div class="empty-state"><div class="emoji">🪿</div><h3>Nenhuma questão nesta lista</h3><p class="muted">Você pode começar uma sessão ou escolher outra categoria.</p><button class="btn primary" data-action="goto" data-view="home">Escolher uma sessão</button></div>`}</section></div>`;
}
function storeFlashProgress(){state.flashProgress={index:flashState.index,revealed:flashState.revealed};save();}
function advanceFlash(grade='good'){const card=flashState.deck[flashState.index];if(card)scheduleItem(state.cardSpaced,card.id,grade);if(!state.prefs.flashOnlyDue)flashState.index=flashState.index+1>=flashState.deck.length?0:flashState.index+1;flashState.revealed=false;storeFlashProgress();render();}
function renderFlashcards(){
 const deck=flashDeck();const newIDs=deck.map(x=>x.id).join('|');const oldIDs=flashState.deck.map(x=>x.id).join('|');if(newIDs!==oldIDs){flashState.deck=deck;flashState.index=Math.min(flashState.index,Math.max(0,deck.length-1));flashState.revealed=false;}
 const card=deck[flashState.index]||null;
 return `<div class="container-narrow"><div class="eyebrow">Flashcards</div><h1>Memorize com o Zoada</h1><p class="muted">Um toque revela a resposta. Outro toque no mesmo cartão leva ao próximo. Se preferir, marque a dificuldade para organizar revisões futuras.</p><section class="panel"><div class="block-title"><h2>Selecione os temas</h2><button class="btn secondary" data-action="flash-select-all">${state.prefs.flashTopics.length===TOPIC_NAMES.length?'Todos selecionados':'Selecionar todos'}</button></div><div class="topic-grid">${TOPICS.map(t=>`<button class="topic-tile ${state.prefs.flashTopics.includes(t.name)?'active':''}" ${selColor(t.name)} data-action="toggle-flash-topic" data-topic="${h(t.name)}"><div class="topic-heading"><span class="topic-dot"></span><b>${h(t.name)}</b></div><small>${FLASHCARDS.filter(f=>f.topic===t.name).length} flashcards</small></button>`).join('')}</div><div class="field-row" style="margin:18px 0 0"><label class="checkline"><input type="checkbox" data-action="flash-due-only" ${state.prefs.flashOnlyDue?'checked':''}> Flashcards novos ou para revisar hoje</label><span class="pill">${cardDueCount()} vencidos · ${FLASHCARDS.filter(c=>!state.cardSpaced[c.id]).length} novos</span></div></section>${card?`<section class="section panel flash-wrap"><div class="flash-hero"><img src="${flashState.revealed?ZOADA_IMAGES.prova:ZOADA_IMAGES.welcome}" alt="Zoada"><div><div class="pill">${h(card.topic)}</div><p class="muted small">Card ${flashState.index+1} de ${deck.length}</p><p class="small">Zoada: ${flashState.revealed?'Agora, você se lembrou com facilidade?':'Vamos lá, tenho uma pergunta para você!'}</p></div></div><button class="flash-card ${flashState.revealed?'revealed':''}" data-action="flip-card"><div class="flash-front"><small>Pergunta do Zoada</small><h3>${h(card.question)}</h3><p>Toque para ver a resposta</p></div><div class="flash-back"><small>Resposta</small><h3>${h(card.answer)}</h3><p>Toque novamente para o próximo card</p></div></button>${flashState.revealed?`<div class="flash-grade"><b>Como foi?</b><button class="chip" data-action="flash-grade" data-grade="again">Não lembrei</button><button class="chip" data-action="flash-grade" data-grade="hard">Difícil</button><button class="chip" data-action="flash-grade" data-grade="easy">Fácil</button></div>`:''}<div class="small-actions"><button class="btn secondary" data-action="flash-prev" ${flashState.index===0?'disabled':''}>← Anterior</button><button class="btn primary" data-action="flip-card">${flashState.revealed?'Próximo →':'Mostrar resposta'}</button></div></section>`:`<div class="empty-state"><h3>Sem flashcards vencidos</h3><p>Você está em dia. Desative o filtro para revisar todos os cartões quando quiser.</p></div>`}</div>`;
}
function weaknessData(){const all=[];for(const t of TOPIC_NAMES){for(const tag of ['Gasometria','Antibioticoterapia','Doses e medicamentos','Ventilação e oxigênio','Escalas e classificações','Reposição e fluidos','Atendimento inicial','Imagem e diagnóstico']){const qs=ALL.filter(q=>q.topic===t&&tagForQuestion(q).includes(tag)&&state.attempts[q.id]?.tries);if(qs.length<2)continue;const n=qs.length,correct=qs.filter(q=>state.attempts[q.id]?.lastCorrect).length;all.push({topic:t,tag,seen:n,correct,percent:Math.round(correct*100/n),ids:qs.map(q=>q.id)});}}return all.sort((a,b)=>a.percent-b.percent||b.seen-a.seen);}
function renderStats(){const gs=globalStats(),sorted=state.sessions.filter(s=>(s.course||'ue')===state.prefs.course).slice().reverse(),weak=weaknessData();const topics=TOPICS.map(t=>{const qq=ALL.filter(q=>q.topic===t.name&&state.attempts[q.id]?.tries);const right=qq.filter(q=>state.attempts[q.id]?.lastCorrect).length;return {t,count:qq.length,percent:qq.length?Math.round(100*right/qq.length):0};});
 return `<div class="container-narrow"><div class="eyebrow">Seu desempenho</div><h1>O Zoada acompanha sua evolução.</h1><div class="stats-strip" style="margin-bottom:22px"><div class="metric"><b>${gs.total}</b><small>Questões praticadas</small></div><div class="metric"><b>${gs.attempts}</b><small>Tentativas</small></div><div class="metric"><b>${gs.total?Math.round(gs.right/gs.total*100):0}%</b><small>Último acerto</small></div><div class="metric"><b>${dueCount()}</b><small>Revisões vencidas</small></div></div><section class="panel"><h2>Seus pontos fracos</h2><p class="hint">Análise baseada nos temas e no texto das questões que você respondeu; precisa de ao menos duas por categoria.</p>${weak.length?weak.slice(0,6).map(w=>`<div class="weak-row"><div><b>${h(w.tag)}</b><small>${h(w.topic)} · ${w.seen} questões</small></div><strong>${w.percent}%</strong><button class="btn secondary" data-action="train-weak" data-topic="${h(w.topic)}" data-tag="${h(w.tag)}">Treinar</button></div>`).join(''):'<div class="empty-state">Responda algumas questões para eu identificar os pontos fracos.</div>'}</section><section class="section panel"><h2>Acerto por matéria</h2>${topics.map(({t,count,percent})=>`<div class="stat-row"><span class="topic-heading"><span class="topic-dot" ${selColor(t.name)}></span>${h(t.name)}</span><div class="bar-track"><div class="bar-fill" style="width:${percent}%;background:${t.color}"></div></div><b style="font-size:13px;text-align:right">${count?percent+'%':'—'}</b></div>`).join('')}</section><section class="section panel"><div class="block-title"><h2>Histórico de sessões</h2><span class="pill">${sorted.length}</span></div>${sorted.length?`<div class="history-tools"><button class="btn warn" data-action="clear-history">🗑 Excluir todas as sessões desta disciplina</button><p class="hint">Remove o histórico de sessões, sem apagar os acertos acumulados nem os flashcards.</p></div>`+sorted.slice(0,25).map(sessionRow).join(''):'<div class="empty-state">Sem sessões ainda.</div>'}</section></div>`;
}
function renderPlanCalendar(diff,topics,priority,daily){
 if(diff===null||diff<0)return '';
 const planDays=Math.min(14,Math.max(1,diff+1));const today=new Date();today.setHours(12,0,0,0);
 let output=[];
 for(let i=0;i<planDays;i++){
  const when=new Date(today.getTime()+i*86400000);
  const daysLeft=diff-i;
  const dateStr=when.toLocaleDateString('pt-BR',{weekday:'short',day:'2-digit',month:'2-digit'});
  const key=priority[i%priority.length]?.topic||topics[i%topics.length];
  const second=priority[(i+1)%priority.length]?.topic||topics[(i+1)%topics.length];
  let label='',detail='';
  if(daysLeft<=0){label='Revisão leve na data da prova';detail='Revise só pontos essenciais: metas de oxigenação, Glasgow, doses, fluxogramas e seus erros mais frequentes. Evite uma maratona de novos conteúdos.';}
  else if(daysLeft<=2){label='Reta final — simulado misto';detail=`Reserve cerca de ${Math.round(daily*.6)} min para um simulado misto e ${Math.round(daily*.4)} min para revisar os erros e flashcards vencidos.`;}
  else if(daysLeft<=7){label=`Casos clínicos e erros · ${key}`;detail=`Use ${Math.round(daily*.4)} min em casos de ${key}, ${Math.round(daily*.35)} min em questões de ${second} e ${Math.round(daily*.25)} min em flashcards vencidos.`;}
  else{label=`Fixação · ${key} + ${second}`;detail=`Use ${Math.round(daily*.4)} min no Modo Decorar de ${key}, ${Math.round(daily*.35)} min em casos de ${second} e ${Math.round(daily*.25)} min em flashcards. Reserve tempo para revisar erros.`;}
  output.push(`<details class="plan-day" ${i===0?'open':''}><summary><span>${h(dateStr)}</span><b>${h(label)}</b></summary><p>${h(detail)}</p></details>`);
 }
 return `<section class="section panel"><div class="block-title"><h2>Roteiro por dia</h2><span class="pill">${planDays} dias visíveis</span></div><p class="hint">Sugestão adaptativa. O Zoada reorganiza a prioridade conforme você responde. Consulte esta tela diariamente.</p><div class="plan-calendar">${output.join('')}</div></section>`;
}
function renderPlan(){
 const p=state.prefs, raw=p.examDate;
 const diff=raw?Math.round((new Date(raw+'T12:00:00')-new Date(new Date().toDateString()+' 12:00:00'))/86400000):null;
 const topics=p.examTopics||TOPIC_NAMES;
 const weakness=weaknessData().filter(w=>topics.includes(w.topic));
 const priority=topics.map(t=>{const answers=ALL.filter(q=>q.topic===t&&state.attempts[q.id]?.tries);const correct=answers.filter(q=>state.attempts[q.id]?.lastCorrect).length;return {topic:t,percent:answers.length?Math.round(correct*100/answers.length):null,seen:answers.length};}).sort((a,b)=>(a.percent===null?-1:a.percent)-(b.percent===null?-1:b.percent));
 const daily=Math.max(10,Math.min(120,Number(p.dailyMinutes)||30));
 let tasks=[];
 if(diff===null)tasks=['Escolha a data para gerar seu plano personalizado.'];
 else if(diff<0)tasks=['Essa data já passou. Selecione a próxima prova para criar um novo plano.'];
 else if(diff===0)tasks=['Hoje: revisão curta dos seus erros e flashcards vencidos; evite começar assuntos novos.','Faça um simulado leve somente se houver tempo e energia.'];
 else{const main=priority.slice(0,3).map(w=>w.topic);tasks=[`Hoje: ${Math.max(10,Math.round(daily*.45))} min de Decorar nos temas ${main.join(', ')}.`,`Depois: ${Math.max(5,Math.round(daily*.35))} min de Casos Clínicos com raciocínio de conduta.`,`Finalize com ${Math.max(5,Math.round(daily*.2))} min de flashcards e erros vencidos.`];if(diff<=3)tasks.unshift('Últimos 3 dias: priorize erros frequentes, valores-chave e simulados mistos.');else if(diff<=7)tasks.unshift('Semana final: alternância de casos e números importantes com revisões diárias.');else tasks.unshift('Fase de preparação: distribua os temas, sem esquecer as revisões espaçadas.');}
 return `<div class="container-narrow"><div class="eyebrow">Planejamento de prova</div><h1>Seu plano até a prova</h1><p class="muted">Informe a data e os assuntos da avaliação. O Zoada organiza um plano diário conforme suas dificuldades e revisões agendadas.</p><section class="panel"><div class="field-row"><label for="exam-date"><b>Data da próxima prova</b></label><input class="input-select" type="date" id="exam-date" value="${h(raw)}"></div><div class="field-row"><label for="daily-minutes"><b>Tempo diário de estudo</b></label><select class="input-select" id="daily-minutes">${[15,30,45,60,90,120].map(v=>`<option value="${v}" ${daily===v?'selected':''}>${v} minutos</option>`).join('')}</select></div><div class="block-title"><h2>Temas da avaliação</h2><button class="btn secondary" data-action="exam-select-all">Selecionar todos</button></div><div class="topic-grid">${TOPICS.map(t=>`<button class="topic-tile ${topics.includes(t.name)?'active':''}" ${selColor(t.name)} data-action="toggle-exam-topic" data-topic="${h(t.name)}"><div class="topic-heading"><span class="topic-dot"></span><b>${h(t.name)}</b></div></button>`).join('')}</div></section><section class="section panel"><div class="block-title"><h2>Agenda sugerida</h2>${diff!==null&&diff>=0?`<span class="pill">Faltam ${diff} ${diff===1?'dia':'dias'}</span>`:''}</div><div class="study-plan-list">${tasks.map((t,i)=>`<div class="study-task"><span>${i+1}</span><p>${h(t)}</p></div>`).join('')}</div><div class="stats-strip" style="margin:14px 0"><div class="metric"><b>${dueCount()}</b><small>Questões a revisar</small></div><div class="metric"><b>${cardDueCount()}</b><small>Cards vencidos</small></div></div><div class="small-actions"><button class="btn primary" data-action="start-due" ${!dueCount()?'disabled':''}>Revisar questões vencidas</button><button class="btn secondary" data-action="goto" data-view="stats">Ver pontos fracos</button></div></section>${renderPlanCalendar(diff,topics,priority,daily)}<section class="section panel"><h2>Ordem de prioridade</h2>${priority.map((w,i)=>`<div class="weak-row"><div><b>${i+1}. ${h(w.topic)}</b><small>${w.seen} questões praticadas</small></div><strong>${w.percent===null?'Ainda não estudado':w.percent+'% de acerto'}</strong></div>`).join('')}<p class="hint">A prioridade é recalculada quando você pratica novas questões; temas ainda não estudados aparecem primeiro. O plano não envia notificações automáticas.</p></section></div>`;
}
function renderSettings(){const isDark=state.prefs.theme==='dark'; return `<div class="container-narrow"><div class="eyebrow">Preferências</div><h1>Ajuste o seu plantão.</h1><section class="panel"><h2>Visual</h2><div class="field-row"><div><b>Modo escuro</b><p class="hint">Mais confortável para estudar à noite.</p></div><button class="btn secondary" data-action="theme">${isDark?'☀ Usar modo claro':'☾ Usar modo escuro'}</button></div>${zoadaSwitch()}</section><section class="section panel"><h2>Seus dados e backups</h2><p class="muted">As respostas, agenda de revisões, flashcards e o planejamento são salvos automaticamente neste navegador e neste endereço do site. A versão 7.0 preserva o histórico das versões 2.0–6.0, quando disponível no mesmo endereço.</p><div class="small-actions"><button class="btn primary" data-action="export">⇩ Exportar meu progresso</button><button class="btn secondary" data-action="import">⇧ Importar backup</button><input id="backup-file" type="file" accept=".json,application/json"></div></section><section class="section panel"><h2>Limpar dados</h2><p class="muted">Atenção: essa operação remove suas respostas, sessões e marcações somente deste navegador.</p><button class="btn warn" data-action="clear">Apagar meu progresso</button></section></div>`;}

function render(){
 document.documentElement.dataset.theme=state.prefs.theme;
 document.body.dataset.view=view;
 const th=document.getElementById('theme-toggle');if(th)th.textContent=state.prefs.theme==='dark'?'☀':'☾';const subt=document.querySelector('.brand-label small');if(subt)subt.textContent=state.prefs.course==='tutoria'?'Tutoria · MT3':'Urgência & Emergência';
 for(const el of document.querySelectorAll('[data-nav]')) el.classList.toggle('active',el.dataset.nav===view);
 switch(view){
   case 'quiz': root.innerHTML=renderQuiz(); break;
   case 'results': root.innerHTML=renderResults(); break;
   case 'review': root.innerHTML=renderReview(); break;
   case 'flashcards': root.innerHTML=renderFlashcards(); break;
   case 'plan': root.innerHTML=renderPlan(); break;
   case 'stats': root.innerHTML=renderStats(); break;
   case 'settings': root.innerHTML=renderSettings(); break;
   default: root.innerHTML=renderHome();
 }
 updateTimer();
}

function updateTimer(){if(clockInterval){clearInterval(clockInterval); clockInterval=null;} const s=active(); if(view==='quiz'&&s&&s.mode==='prova'&&state.prefs.clock){function tick(){const el=document.getElementById('elapsed-time'); if(!el)return; const ms=(s.finished?s.finishedAt:Date.now())-s.createdAt; const sec=Math.max(0,Math.floor(ms/1000)); const min=Math.floor(sec/60); el.textContent=`${String(min).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`;} tick(); if(!s.finished) clockInterval=setInterval(tick,1000);}}
function exportProgress(){const blob=new Blob([JSON.stringify({...state,exportedAt:new Date().toISOString(),exportFormat:'plantao-ganso-backup-v3'},null,2)],{type:'application/json'}); const a=document.createElement('a'); const u=URL.createObjectURL(blob); a.href=u; a.download=`backup-plantao-do-ganso-${new Date().toISOString().slice(0,10)}.json`; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(u),1200); toast('Backup exportado.');}
async function importProgress(file){if(!file)return;try{if(file.size>20_000_000)throw Error('Arquivo muito grande');const raw=JSON.parse(await file.text());if(!Array.isArray(raw.sessions)||!raw.prefs||!raw.attempts)throw Error('Backup incompatível');if(!confirm('Importar backup? O progresso atual será substituído pelo arquivo escolhido.'))return;const s=DEFAULT();s.sessions=(raw.sessions||[]).filter(x=>x&&Array.isArray(x.ids)).map(x=>({...x,ids:x.ids.filter(id=>BYID.has(id)),answers:Object.fromEntries(Object.entries(x.answers||{}).filter(([id])=>BYID.has(id)))})).filter(x=>x.ids.length).slice(-80);s.attempts=Object.fromEntries(Object.entries(raw.attempts||{}).filter(([id])=>BYID.has(id)));s.favorites=Object.fromEntries(Object.entries(raw.favorites||{}).filter(([id])=>BYID.has(id)));s.doubts=Object.fromEntries(Object.entries(raw.doubts||{}).filter(([id])=>BYID.has(id)));s.spaced=Object.fromEntries(Object.entries(raw.spaced||{}).filter(([id])=>BYID.has(id)));s.cardSpaced=Object.fromEntries(Object.entries(raw.cardSpaced||{}).filter(([id])=>FLASHCARDS.some(c=>c.id===id)));s.prefs={...s.prefs,...raw.prefs};s.activeSessionId=s.sessions.some(x=>x.id===raw.activeSessionId)?raw.activeSessionId:null;s.flashProgress=raw.flashProgress||{index:0,revealed:false};s.version=4;state=s;syncCourseRuntime();flashState.index=s.flashProgress.index;flashState.revealed=s.flashProgress.revealed;flashState.deck=[];save();navigate('home');toast('Backup importado com sucesso!');}catch(e){toast('Erro ao importar: '+e.message);}}
function handleClick(event){const el=event.target.closest('[data-action]'); if(!el||el.disabled)return; const a=el.dataset.action; try{ switch(a){
 case 'goto': navigate(el.dataset.view); break;
 case 'select-course': selectCourse(el.dataset.course); break;
 case 'mark-tip': {if(!state.prefs.tipMastery)state.prefs.tipMastery={};const tipId=el.dataset.tip;state.prefs.tipMastery[tipId]=!state.prefs.tipMastery[tipId];save();render();break;}
 case 'practice-tip': {if(state.prefs.course!=='tutoria')break;const tip=(window.ZOADA_EXAM_TIPS?.[state.prefs.course]||[]).find(t=>t.id===el.dataset.tip);if(!tip)break;const filtered=ALL.filter(q=>q.topic===tip.topic&&q.dica);fromPool(filtered.map(q=>q.id),`Dica da prova · ${tip.title}`,Math.min(20,filtered.length));break;}
 case 'theme': state.prefs.theme=state.prefs.theme==='dark'?'light':'dark'; save(); render(); break;
 case 'scroll-setup': document.getElementById('study')?.scrollIntoView({behavior:'smooth'}); break;
 case 'set-mode': if(el.dataset.mode==='dicas' && state.prefs.course!=='tutoria')break; modeTouched=true; state.prefs.studyMode=el.dataset.mode; save(); render(); break;
 case 'select-all': state.prefs.selectedTopics=[...TOPIC_NAMES]; save(); render(); break;
 case 'toggle-topic': {const t=el.dataset.topic; let s=state.prefs.selectedTopics; if(s.length===TOPIC_NAMES.length)s=[t]; else if(s.includes(t)){ if(s.length===1){toast('Mantenha ao menos um tema selecionado.'); return;} s=s.filter(x=>x!==t);} else s=[...s,t]; state.prefs.selectedTopics=TOPIC_NAMES.filter(x=>s.includes(x)); save(); render(); break;}
 case 'exam-bank': state.prefs.examBank=el.dataset.value; save(); render(); break;
 case 'order': state.prefs.order=el.dataset.value; save(); render(); break;
 case 'toggle-zoada': toggleZoada(); break;
 case 'dismiss-block': {const s=active(); if(s&&s.pendingReviewBlock!==null&&s.pendingReviewBlock!==undefined){s.reviewedBlocks=s.reviewedBlocks||[]; if(!s.reviewedBlocks.includes(s.pendingReviewBlock)) s.reviewedBlocks.push(s.pendingReviewBlock); s.pendingReviewBlock=null; save(); render();} break;}
 case 'start': start(); break;
 case 'resume': {const ss=state.sessions.find(s=>s.id===el.dataset.sid);if(!ss)break;if((ss.course||'ue')!==state.prefs.course)selectCourse(ss.course||'ue',false);state.activeSessionId=ss.id;save();navigate(active()?.finished?'results':'quiz');break;}
 case 'delete-session': {const ss=state.sessions.find(s=>s.id===el.dataset.sid);if(!ss)break;if(!confirm('Excluir esta sessão do histórico? As estatísticas de questões, favoritos e flashcards serão preservados.'))break;state.sessions=state.sessions.filter(s=>s.id!==ss.id);if(state.activeSessionId===ss.id)state.activeSessionId=null;save();render();toast('Sessão excluída do histórico.');break;}
 case 'clear-history': {const course=state.prefs.course;const n=state.sessions.filter(s=>(s.course||'ue')===course).length;if(!n)break;if(!confirm(`Excluir as ${n} sessões de ${course==='ue'?'Urgência e Emergência':'Tutoria'}? Os acertos e flashcards não serão apagados.`))break;const removing=new Set(state.sessions.filter(s=>(s.course||'ue')===course).map(s=>s.id));state.sessions=state.sessions.filter(s=>!removing.has(s.id));if(removing.has(state.activeSessionId))state.activeSessionId=null;save();render();toast('Histórico da disciplina apagado.');break;}
 case 'choose': choose(Number(el.dataset.index)); break;
 case 'retry': {const s=active(), id=s.ids[s.currentIndex]; if(s.mode==='prova') return; s.answers[id]={}; save(); render(); break;}
 case 'favorite': {const id=el.dataset.qid; state.favorites[id]=!state.favorites[id]; save(); render(); break;}
 case 'doubt': {const id=el.dataset.qid; state.doubts[id]=!state.doubts[id]; save(); render(); break;}
 case 'previous': {const s=active(); if(s.currentIndex>0) jump(s.currentIndex-1); break;}
 case 'next': {const s=active(); if(s.currentIndex<s.ids.length-1) jump(s.currentIndex+1); else if(s.infinite&&!s.finished)appendInfinite(s);else finish(); break;}
 case 'jump': jump(el.dataset.index); break;
 case 'finish': finish(); break;
 case 'results': navigate('results'); break;
 case 'review-session': {const s=active(); s.currentIndex=0; save(); navigate('quiz'); break;}
 case 'jump-to-review': {const s=active(); s.currentIndex=Number(el.dataset.index); save(); navigate('quiz'); break;}
 case 'review-tab': reviewTab=el.dataset.tab; render(); break;
 case 'review-topic': reviewTopic=el.dataset.topic; render(); break;
 case 'study-pool': fromPool(matchingPool().map(q=>q.id),`Revisão · ${reviewTab}`,Number(el.dataset.count)); break;
 case 'study-one': fromPool([el.dataset.qid],'Questão escolhida',1); break;
 case 'export': exportProgress(); break;
 case 'import': document.getElementById('backup-file')?.click(); break;
 case 'clear': if(confirm('Deseja realmente apagar TODO o progresso salvo neste navegador?')){const theme=state.prefs.theme;state=DEFAULT();state.prefs.theme=theme;syncCourseRuntime();save();navigate('home');toast('Progresso limpo.');} break;
 case 'flip-card': if(!flashState.revealed){flashState.revealed=true;storeFlashProgress();render();}else advanceFlash('good'); break;
 case 'flash-grade': advanceFlash(el.dataset.grade); break;
 case 'grade-q': {const ss=active(),id=ss?.ids[ss.currentIndex],a=ss?.answers[id];if(a?.submitted){a.grade=el.dataset.grade;adjustItem(state.spaced,id,el.dataset.grade);save();render();}break;}
 case 'toggle-map': navExpanded=!navExpanded;render();break;
 case 'start-due':{const pool=ALL.filter(q=>state.spaced[q.id]&&state.spaced[q.id].dueAt<=Date.now()).map(q=>q.id);fromPool(pool,'Revisão espaçada de hoje',50);break;}
 case 'train-weak':{const pool=ALL.filter(q=>q.topic===el.dataset.topic&&tagForQuestion(q).includes(el.dataset.tag)).map(q=>q.id);fromPool(pool,`Ponto fraco: ${el.dataset.tag}`,30);break;}
 case 'exam-select-all':state.prefs.examTopics=[...TOPIC_NAMES];save();render();break;
 case 'toggle-exam-topic':{const t=el.dataset.topic;let ts=state.prefs.examTopics||TOPIC_NAMES;if(ts.length===TOPIC_NAMES.length)ts=[t];else if(ts.includes(t)){if(ts.length===1){toast('Selecione ao menos um tema.');break;}ts=ts.filter(x=>x!==t);}else ts=[...ts,t];state.prefs.examTopics=TOPIC_NAMES.filter(x=>ts.includes(x));save();render();break;}
 case 'order-pick':{const ss=active(),id=ss?.ids[ss.currentIndex],q=qOf(id),a=ss.answers[id]||{};if(a.submitted)return;const chosen=Array.isArray(a.choice)?[...a.choice]:[],value=Number(el.dataset.index);if(chosen.includes(value))break;chosen.push(value);if(chosen.length===q.steps.length){completeInteractive(chosen,chosen.every((v,i)=>v===i));}else{ss.answers[id]={...a,choice:chosen,submitted:false};save();render();}break;}
 case 'order-undo':{const ss=active(),id=ss?.ids[ss.currentIndex],a=ss.answers[id]||{};if(!a.submitted&&Array.isArray(a.choice)){a.choice.pop();save();render();}break;}
 case 'match-left':{const ss=active(),id=ss?.ids[ss.currentIndex],a=ss.answers[id]||{};if(a.submitted)return;a.selectedLeft=Number(el.dataset.index);a.choice=a.choice&&typeof a.choice==='object'&&!Array.isArray(a.choice)?a.choice:{};ss.answers[id]=a;save();render();break;}
 case 'match-right':{const ss=active(),id=ss?.ids[ss.currentIndex],q=qOf(id),a=ss.answers[id]||{};if(a.submitted||a.selectedLeft===undefined)return;const rights=q.pairs.map(x=>x[1]).reverse(),chosen=a.choice&&typeof a.choice==='object'&&!Array.isArray(a.choice)?{...a.choice}:{},val=rights[Number(el.dataset.index)];if(Object.values(chosen).includes(val))return;chosen[a.selectedLeft]=val;delete a.selectedLeft;if(Object.keys(chosen).length===q.pairs.length){completeInteractive(chosen,q.pairs.every((pair,i)=>chosen[i]===pair[1]));}else{a.choice=chosen;ss.answers[id]=a;save();render();}break;}
 case 'match-reset':{const ss=active(),id=ss?.ids[ss.currentIndex];if(ss&&!ss.answers[id]?.submitted){ss.answers[id]={};save();render();}break;}
 case 'flash-next': if(flashState.revealed)advanceFlash('good');else{flashState.index=flashState.index+1>=flashState.deck.length?0:flashState.index+1;flashState.revealed=false;storeFlashProgress();render();}break;
 case 'flash-prev': if(flashState.index>0){flashState.index--;flashState.revealed=false;storeFlashProgress();render();}break;
 case 'toggle-flash-topic': {const t=el.dataset.topic; let s=state.prefs.flashTopics; if(s.length===TOPIC_NAMES.length)s=[t]; else if(s.includes(t)){ if(s.length===1){toast('Mantenha ao menos um tema selecionado.'); return;} s=s.filter(x=>x!==t);} else s=[...s,t]; state.prefs.flashTopics=TOPIC_NAMES.filter(x=>s.includes(x)); flashState.index=0;flashState.revealed=false;flashState.deck=[];storeFlashProgress();render();break;}
 case 'flash-select-all': state.prefs.flashTopics=[...TOPIC_NAMES];flashState.index=0;flashState.revealed=false;flashState.deck=[];storeFlashProgress();render();break;
 }
 }catch(err){console.error(err); toast('Ocorreu um problema. Seu progresso foi preservado.');}}

document.addEventListener('click',handleClick);
document.addEventListener('change',e=>{const t=e.target;if(t?.dataset.action==='clock'){state.prefs.clock=!!t.checked;save();render();}if(t?.dataset.action==='flash-due-only'){state.prefs.flashOnlyDue=!!t.checked;flashState.index=0;flashState.deck=[];flashState.revealed=false;storeFlashProgress();render();}if(t?.id==='backup-file'){importProgress(t.files[0]);t.value='';}if(t?.id==='exam-date'){state.prefs.examDate=t.value;save();render();}if(t?.id==='daily-minutes'){state.prefs.dailyMinutes=Number(t.value);save();render();}});
document.addEventListener('submit',e=>{if(e.target?.id!=='fill-form')return;e.preventDefault();const s=active(),q=qOf(s.ids[s.currentIndex]),value=document.getElementById('fill-input')?.value||'';if(!value.trim()){toast('Digite sua resposta antes de conferir.');return;}const correct=q.accepted.some(v=>normalizeValue(v)===normalizeValue(value));completeInteractive(value,correct);});
render();
if('serviceWorker' in navigator&&location.protocol.startsWith('http')) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
})();
