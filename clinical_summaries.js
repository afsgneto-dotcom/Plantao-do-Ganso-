/* Fichas clínicas independentes dos mapas mentais; revisão educacional, novembro/2026. */
window.UE_CLINICAL_SUMMARIES = {
 'Asma':{
  intro:'GINA 2026 · Asma aguda no pronto-socorro e tratamento controlador no acompanhamento. As etapas GINA não são classificações da gravidade de uma crise.',
  sections:[
   {title:'Quadro clínico e sinais de alerta',items:['Sintomas variáveis: dispneia, sibilância, tosse, aperto torácico; possível história de atopia e gatilhos.','Na crise: avaliar fala, FR, FC, SpO₂, musculatura acessória, PFE (se possível), consciência e ausculta.','Ameaça à vida: sonolência/confusão, exaustão, tórax silencioso, cianose ou hipoxemia persistente. A ausência de sibilos NÃO exclui gravidade.']},
   {title:'O que fazer na emergência',items:['ABC, monitorização, posição confortável; O₂ se necessário, titulando SpO₂ para 92–95% em adultos e crianças ≥6 anos (GINA 2026).','Salbutamol inalatório com espaçador ou nebulização, repetido na primeira hora conforme gravidade e protocolo; ipratrópio como adjuvante na crise mais importante.','Prednisona/prednisolona 40–50 mg/dia VO por 5–7 dias em adultos com exacerbação significativa; via IV se VO inviável.','Reavaliar resposta após medidas iniciais; considerar MgSO₄ IV em crise grave refratária e suporte de via aérea por equipe experiente quando houver deterioração.','Alta exige terapia contendo corticoide inalatório, técnica inalatória, plano de ação e seguimento próximo. Evitar SABA isolado como estratégia de manutenção.']}
  ],
  tables:[
   {title:'GINA 2026 — etapas de tratamento em adultos e adolescentes (≥12 anos)',note:'Track 1 preferencial. A dose exata e o dispositivo dependem do esquema prescrito; não confundir com medicação de resgate da crise grave.',cols:['Etapa','Tratamento controlador / alívio preferencial'],rows:[['1–2','CI-formoterol em baixa dose, quando necessário (AIR-only).'],['3','CI-formoterol baixa dose, manutenção + alívio (MART).'],['4','CI-formoterol dose média, manutenção + alívio (MART).'],['5','Avaliação especializada, fenotipagem e terapias adicionais: LAMA, biológicos, entre outras, conforme perfil.']]},
   {title:'GINA 2026 — controle dos sintomas nas últimas 4 semanas',note:'Cada resposta SIM conta como um problema de controle: sintomas diurnos >2 vezes/semana, despertar noturno, alívio >2 vezes/semana ou limitação de atividade.',cols:['Respostas SIM','Classificação'],rows:[['0','Bem controlada'],['1–2','Parcialmente controlada'],['3–4','Não controlada']]},
   {title:'Avaliação da crise — pistas práticas',cols:['Achado','Interpretação'],rows:[['Fala em frases, sem esforço importante','Crise menos grave, mas exige reavaliação.'],['Fala palavras, FR elevada, retrações, PFE baixo','Crise grave: intensificar tratamento e observar de perto.'],['Tórax silencioso, exaustão, alteração do sensório','Ameaça à vida: suporte avançado e equipe experiente.']]}
  ],
  pearls:['CI = corticoide inalatório; MART = manutenção e alívio com CI-formoterol.','Diferencie controle crônico (etapas 1–5) de classificação da exacerbação (urgência).'],
  sources:['GINA 2026 Summary Guide, figuras 5–7 e 9','Slides Asma e DPOC da disciplina']
 },
 'DPOC':{
  intro:'GOLD 2027 · GOLD 1–4 descreve limitação do fluxo aéreo; GOLD A/B/E usa sintomas e exacerbações para orientar o tratamento de manutenção. São classificações diferentes.',
  sections:[
   {title:'Quadro clínico e sinais de alerta',items:['Dispneia persistente/progressiva, tosse crônica e expectoração; frequentemente exposição a tabaco ou biomassa.','Exacerbação: piora aguda de dispneia, tosse e/ou escarro; avaliar aumento de volume e purulência (tríade de Anthonisen).','Gravidade: uso de musculatura acessória, FR elevada, SpO₂ reduzida, alteração do sensório, exaustão, acidose e hipercapnia. Investigar pneumonia, IC, TEP e pneumotórax como diferenciais.']},
   {title:'O que fazer na emergência',items:['ABCDE, monitorização, oxigênio controlado com SpO₂ alvo 88–92%; reavaliar gasometria conforme contexto.','Broncodilatadores de curta ação (SABA ± SAMA); prednisona 40 mg VO ao dia por 5 dias em exacerbações que requerem terapia sistêmica.','Antibióticos quando indicados por sinais clínicos de provável infecção bacteriana, purulência do escarro, gravidade ou necessidade de suporte ventilatório — não para toda exacerbação.','VNI é preferida na insuficiência respiratória hipercápnica com acidose (por exemplo pH ≤7,35 e PaCO₂ elevada), se possível proteger a via aérea.','Falha/contraindicação à VNI, instabilidade ou incapacidade de proteger a via aérea → considerar ventilação invasiva.']}
  ],
  tables:[
   {title:'GOLD 1–4: grau espirométrico após broncodilatador',note:'Confirmar obstrução com VEF₁/CVF pós-broncodilatador <0,70 antes de graduar.',cols:['Grau','VEF₁ (% do previsto)','Descrição'],rows:[['GOLD 1','≥80%','Obstrução leve'],['GOLD 2','50–79%','Moderada'],['GOLD 3','30–49%','Grave'],['GOLD 4','<30%','Muito grave']]},
   {title:'GOLD 2027: grupos A/B/E e tratamento inicial',note:'Referência: pacientes sem tratamento de manutenção prévio; decisões individualizadas. Os grupos não são definidos pelo GOLD 1–4.',cols:['Grupo','Critério (últimos 12 meses)','Tratamento inicial'],rows:[['A','Nenhuma exacerbação moderada/grave; mMRC 0–1 e CAAT <10','LAMA preferencial; broncodilatador curto se LAMA não disponível.'],['B','Nenhuma exacerbação moderada/grave; mMRC ≥2 ou CAAT ≥10','LABA + LAMA.'],['E','≥1 exacerbação moderada/grave, independentemente dos sintomas','LABA + LAMA; considerar CI na tripla terapia quando eosinófilos ≥300 células/µL.']]},
   {title:'Gasometria e decisão na exacerbação',cols:['Situação','Conduta / cuidado'],rows:[['SpO₂ abaixo da meta','O₂ titulado a 88–92%, não hiperóxia indiscriminada.'],['pH ≤7,35 + hipercapnia com desconforto','Considerar VNI com vigilância e gasometrias seriadas.'],['Piora do sensório, falha de VNI, instabilidade','Reavaliar via aérea e necessidade de intubação.']]}
  ],
  pearls:['GOLD 2027 passou a priorizar LAMA no grupo A; materiais antigos podem recomendar qualquer broncodilatador.','mMRC, CAAT e histórico de exacerbação complementam a espirometria; não são intercambiáveis.'],
  sources:['GOLD 2027 Pocket Guide, classificação e tratamento inicial','Apostila de Urgência e Emergência']
 },
 'Sepse':{
  intro:'Surviving Sepsis Campaign 2026 · Sepse é disfunção orgânica ameaçadora à vida decorrente da resposta desregulada à infecção. O manejo depende da probabilidade de infecção e da presença de choque.',
  sections:[
   {title:'Quadro clínico e suspeita',items:['Suspeitar diante de infecção com disfunção: confusão, oligúria, taquipneia, hipoxemia, hipotensão, hipoperfusão; febre não é obrigatória (idosos podem ter hipotermia).','Avaliar lactato, função renal, plaquetas, coagulação, oxigenação e evolução hemodinâmica; procurar foco (pulmonar, urinário, abdominal, cateter etc.).','Choque séptico: necessidade de vasopressor para PAM ≥65 mmHg e lactato >2 mmol/L apesar de reposição volêmica apropriada, no contexto de sepse.']},
   {title:'O que fazer na emergência',items:['Reconhecer gravidade e iniciar estabilização ABC, monitorização, culturas antes do antibiótico se não houver atraso relevante, lactato e investigação do foco.','Choque séptico ou sepse provável/definida: iniciar antimicrobiano imediatamente, idealmente em até 1 hora do reconhecimento.','Sepse apenas possível, sem choque: avaliação rápida; se a suspeita persistir, antibiótico em até 3 horas da primeira suspeita.','Em hipoperfusão/choque, fluidos cristaloides iniciais (geralmente 30 mL/kg nas primeiras 3 h, individualizados); monitorar resposta e risco de sobrecarga.','Se hipotensão persistir, noradrenalina como primeira escolha; PAM inicial alvo de 65 mmHg; controle de foco precoce, idealmente em até 6 h quando a situação exigir intervenção.']}
  ],
  tables:[
   {title:'Triagem e disfunção orgânica — escores',cols:['Ferramenta','Critérios / interpretação'],rows:[['qSOFA','1 ponto por FR ≥22/min; PAS ≤100 mmHg; alteração do estado mental. ≥2 indica maior risco, mas NÃO diagnostica sepse isoladamente.'],['SOFA (conceito Sepsis-3)','Aumento de ≥2 pontos em contexto de infecção é evidência de disfunção orgânica; avaliar múltiplos sistemas.'],['NEWS/NEWS2','Ferramentas de alerta precoce podem ajudar na triagem, sem substituir julgamento clínico.']]},
   {title:'Tempo da antibioticoterapia — SSC 2026',cols:['Cenário','Prazo orientativo'],rows:[['Choque ou sepse provável/definida','Imediatamente; preferencialmente ≤1 hora.'],['Sepse possível, SEM choque','Investigar rapidamente; se suspeita persistir, ≤3 horas.'],['Baixa probabilidade de infecção sem choque','Reavaliar diagnósticos diferenciais; não usar antibiótico automaticamente.']]},
   {title:'Ressuscitação e monitorização',cols:['Parâmetro','Valor / conduta'],rows:[['PAM alvo inicial','65 mmHg em adultos com choque séptico.'],['Fluidos na hipoperfusão/choque','Cristaloides, frequentemente 30 mL/kg nas primeiras 3 horas, com reavaliação.'],['Vasopressor','Noradrenalina primeira escolha se hipotensão persistente.'],['Controle do foco','Remover/drenar a causa tratável precocemente, idealmente ≤6 h quando indicado.']]}
  ],
  pearls:['Não use qSOFA como triagem única.','O prazo de antibiótico varia conforme choque e probabilidade de sepse; não há regra única de 1 hora para todo paciente febril.'],
  sources:['Surviving Sepsis Campaign 2026','Apostila da disciplina: Sepse e choque séptico']
 },
 'Queimaduras':{
  intro:'Queimado grave: priorize ABCDE, lesão inalatória, extensão/profundidade e perfusão. Fórmulas de reposição são estimativas iniciais e não substituem reavaliação.',
  sections:[
   {title:'Quadro clínico e extensão',items:['Superficial: eritema e dor, sem bolhas; parcial: bolhas e dor, podendo ser superficial ou profunda; espessura total: aspecto esbranquiçado/escurecido e sensibilidade reduzida.','Considerar na SCQ apenas queimaduras de espessura parcial e total; regra dos nove em adultos: cabeça 9%, cada braço 9%, cada perna 18%, tronco anterior 18%, posterior 18%, períneo 1%.','Incêndio em espaço fechado + rouquidão progressiva, estridor, fuligem oral, queimadura facial/cervical: risco de lesão inalatória.']},
   {title:'O que fazer na emergência',items:['Interromper exposição, resfriar queimadura recente com água corrente fria (não gelo), retirar adornos, prevenir hipotermia e avaliar ABCDE.','Lesão inalatória progressiva: avaliar proteção precoce da via aérea por profissional experiente; O₂ suplementar conforme necessidade e avaliação de intoxicação por fumaça.','Analgesia, curativo apropriado, acesso venoso em queimaduras extensas, estimativa de SCQ e cálculo inicial de fluidos quando indicado.','Titular fluidos com perfusão e diurese (adultos, usualmente alvo ≥0,5 mL/kg/h); observar síndrome compartimental e necessidade de escarotomia em queimadura constritiva.','Encaminhar para centro especializado se queimadura extensa/profunda, mãos/face/períneo, elétrica/química, lesão inalatória ou comorbidades relevantes.']}
  ],
  tables:[
   {title:'Regra dos nove — adulto',cols:['Região','% SCQ'],rows:[['Cabeça e pescoço','9%'],['Cada membro superior','9%'],['Tronco anterior / posterior','18% cada'],['Cada membro inferior','18%'],['Períneo','1%']]},
   {title:'Reposição inicial — comparação de fórmulas',note:'Parkland clássica é frequentemente cobrada em provas; ABA 2024 recomenda início com menor volume para adultos com ≥20% SCQ. Sempre titular pela resposta clínica.',cols:['Esquema','Cálculo inicial nas primeiras 24 h','Observação'],rows:[['Parkland clássica','4 mL × kg × %SCQ','Metade nas primeiras 8 h a partir da queimadura; restante nas 16 h seguintes.'],['ABA 2024','2 mL × kg × %SCQ','Estimativa inicial recomendada para adultos com ≥20% SCQ; ajustes por diurese e perfusão.']]}
  ],
  pearls:['Superficial sem bolha (primeiro grau) não entra na SCQ para ressuscitação.','Não confunda fórmula didática com prescrição automática de volume.'],
  sources:['American Burn Association 2024','Apostila de Queimaduras térmicas e prova enviada']
 },
 'Politraumatismo':{
  intro:'ATLS — atendimento sistematizado XABCDE com prioridade para ameaças imediatas à vida e reavaliação frequente.',
  sections:[
   {title:'Quadro clínico e sinais de gravidade',items:['Mecanismo de alta energia, sangramento externo/oculto, choque, esforço respiratório, alteração do nível de consciência, hipotermia.','Choque hemorrágico: taquicardia, palidez, sudorese, perfusão reduzida, alteração mental e pressão baixa (hipotensão pode ser tardia).','Exame secundário completo só após ameaças à vida terem sido abordadas.']},
   {title:'O que fazer na emergência',items:['X: conter hemorragia externa maciça imediatamente com compressão/hemostático/torniquete quando indicado.','A: via aérea com proteção cervical; B: ventilação e identificação de pneumotórax hipertensivo/hemotórax, intervindo sem atraso.','C: procurar fontes de sangramento, estabilizar pelve quando indicado, ativar transfusão maciça com hemoderivados balanceados na hemorragia importante e buscar controle definitivo.','D: Glasgow, pupilas e glicemia quando indicado; E: exposição completa e prevenção de hipotermia.','TXA pode ser considerado precocemente em sangramento traumático significativo conforme protocolo, preferencialmente ≤3 horas do trauma.']}
  ],
  tables:[
   {title:'XABCDE — checklist',cols:['Etapa','Pergunta na sala de trauma','Ação prioritária'],rows:[['X','Há exsanguinação?','Controlar imediatamente.'],['A','Via aérea pérvia? Coluna protegida?','Proteger via aérea e estabilizar cervical.'],['B','Ventila? Há lesão torácica letal?','Corrigir ameaça respiratória.'],['C','Perfusão/hemorragia?','Hemostasia, ressuscitação e controle definitivo.'],['D','Glasgow, pupilas?','Identificar comprometimento neurológico.'],['E','Lesões ocultas / hipotermia?','Expor, examinar e aquecer.']]},
   {title:'Choque hemorrágico — pistas clássicas',cols:['Situação','Interpretação'],rows:[['Classe I–II (ensino clássico)','Hipovolemia inicial; PA pode permanecer normal.'],['Classe III–IV (ensino clássico)','Comprometimento progressivo da perfusão, potencial necessidade de sangue e cirurgia.'],['Sangramento maciço','Protocolo transfusional balanceado, controle cirúrgico/endovascular conforme lesão.']]}
  ],
  pearls:['A classificação por classes é um modelo didático; decisão real usa perfusão, mecanismo, tendência e resposta.','Evitar reposição indiscriminada de grandes volumes de cristaloide em hemorragia grave.'],
  sources:['ATLS 11ª edição / slides da disciplina','Apostila de Politrauma']
 },
 'TCE':{
  intro:'TCE: o principal objetivo inicial é prevenir lesão cerebral secundária enquanto identifica lesões expansivas e necessidade neurocirúrgica.',
  sections:[
   {title:'Quadro clínico e sinais de gravidade',items:['Cefaleia, vômitos, amnésia, confusão, déficit focal, anisocoria, convulsões, alteração do nível de consciência.','Glasgow E+V+M (3–15); avaliar pupilas e piora seriada. Sinais de herniação exigem abordagem imediata.','Epidural: coleção biconvexa, possível intervalo lúcido; subdural: coleção em crescente; hemorragias podem coexistir.']},
   {title:'O que fazer na emergência',items:['ABCDE, evitar hipóxia e hipotensão; imobilização cervical segundo mecanismo/achados.','Avaliação neurológica seriada (Glasgow por componentes, pupilas, lateralização); TC de crânio quando indicada, após estabilização.','TCE grave ou rebaixamento importante com incapacidade de proteger via aérea: equipe experiente para suporte avançado.','Sinais de lesão expansiva/hipertensão intracraniana: acionar neurocirurgia, otimizar oxigenação, perfusão e medidas temporizadoras conforme protocolo.','Evitar sedação, hiperventilação e terapias osmóticas indiscriminadas fora de indicações apropriadas.']}
  ],
  tables:[
   {title:'Glasgow — componentes',cols:['Componente','Pontos'],rows:[['Abertura ocular (E)','4 espontânea; 3 à voz; 2 à dor; 1 ausente'],['Resposta verbal (V)','5 orientada; 4 confusa; 3 palavras inadequadas; 2 sons; 1 ausente'],['Resposta motora (M)','6 obedece; 5 localiza dor; 4 retira; 3 flexão anormal; 2 extensão; 1 ausente']]},
   {title:'Gravidade do TCE pelo Glasgow',cols:['Classificação','ECG'],rows:[['Leve','13–15'],['Moderado','9–12'],['Grave','3–8']]},
   {title:'Glasgow-P (quando usado)',cols:['Reatividade pupilar','Pontuação subtraída'],rows:[['Ambas reativas','0'],['Uma não reativa','1'],['Nenhuma reativa','2']]}
  ],
  pearls:['Glasgow-P = pontuação Glasgow tradicional menos 0, 1 ou 2 conforme reatividade pupilar.','Intervalo lúcido é clássico para epidural, mas não é obrigatório.'],
  sources:['Slides TCE da disciplina','Apostila de TCE']
 },
 'Trauma torácico':{
  intro:'Trauma torácico: reconhecer lesões imediatamente fatais no B e no C do XABCDE e intervir antes de exames que atrasariam conduta.',
  sections:[
   {title:'Quadro clínico e suspeitas',items:['Dispneia, dor torácica, assimetria ventilatória, hipoxemia, turgência jugular, desvio traqueal (tardio), enfisema subcutâneo.','Pneumotórax hipertensivo: deterioração hemodinâmica/respiratória com MV reduzido unilateral; diagnóstico principalmente clínico.','Hemotórax maciço: MV reduzido, macicez, sinais de choque; tórax instável: movimento paradoxal e provável contusão pulmonar.']},
   {title:'O que fazer na emergência',items:['ABCDE, oxigênio/suporte ventilatório conforme necessidade e procura de lesões fatais.','Pneumotórax hipertensivo: descompressão imediata conforme técnica/recursos e drenagem definitiva quando indicada; não aguardar RX em paciente instável.','Pneumotórax aberto: cobertura torácica ventilada e avaliação de drenagem; monitorar progressão para tensão.','Hemotórax significativo: drenagem torácica, ressuscitação e avaliação cirúrgica se sangramento maciço/persistente.','Tórax instável/contusão: analgesia eficaz, higiene pulmonar e suporte ventilatório quando necessário.']}
  ],
  tables:[
   {title:'Lesões clássicas e ação prioritária',cols:['Achado','Lesão provável','Ação inicial'],rows:[['Hipertimpanismo, MV abolido, hipotensão','Pneumotórax hipertensivo','Descomprimir imediatamente.'],['Macicez, choque, MV reduzido','Hemotórax importante','Drenagem + ressuscitação.'],['Ferida soprante','Pneumotórax aberto','Curativo ventilado + avaliação para dreno.'],['Movimento paradoxal','Tórax instável','Analgesia e suporte respiratório.']]},
   {title:'Drenagem pleural — alertas clássicos',cols:['Situação','Conduta'],rows:[['Drenagem imediata ≥1.500 mL de sangue','Avaliar intervenção cirúrgica urgente, conforme quadro.'],['Sangramento persistente ~200 mL/h por várias horas','Considerar cirurgia conforme estabilidade e contexto.']]}
  ],
  pearls:['Lesões por desaceleração: lembrar lesão de aorta; em paciente estável, considerar angiotomografia.','Desvio de traqueia é sinal tardio; ausência não exclui tensão.'],
  sources:['Slides Trauma torácico','Apostila de Urgência e Emergência']
 },
 'Trauma abdominal':{
  intro:'Trauma abdominal: a estabilidade hemodinâmica orienta diagnóstico e intervenção. FAST e TC respondem a perguntas diferentes.',
  sections:[
   {title:'Quadro clínico e sinais de alerta',items:['Dor, distensão, defesa/peritonite, equimoses e sinais de choque; ausência de dor não exclui lesões.','Sinal do cinto aumenta suspeita de lesão intestinal/mesentérica; impacto no epigástrio pode lesar pâncreas/duodeno.','Lesões de baço e fígado são importantes fontes de hemorragia; ferimentos penetrantes têm avaliação específica.']},
   {title:'O que fazer na emergência',items:['ABCDE, avaliar perfusão e controlar hemorragia. Não atrasar reanimação para realizar exames demorados.','Instável com suspeita de sangramento intra-abdominal: FAST pode contribuir na decisão imediata; acionar equipe cirúrgica e controle definitivo conforme quadro.','Estável com suspeita significativa: TC com contraste quando indicada, exame clínico seriado e observação; FAST negativo não exclui víscera oca.','Peritonite, instabilidade persistente ou lesão com indicação cirúrgica: acionar abordagem definitiva rapidamente.','Reavaliar abdômen e hemodinâmica; investigar tórax, pelve e retroperitônio em choque sem foco claro.']}
  ],
  tables:[
   {title:'Conduta por estabilidade',cols:['Situação','Investigação / ação inicial'],rows:[['Instável com suspeita de hemorragia','Reanimação; FAST à beira-leito quando útil; controle definitivo urgente.'],['Estável com mecanismo/achado suspeito','TC com contraste e reavaliações quando indicadas.'],['FAST negativo, mas clínica preocupante','Não descartar lesão de víscera oca/mesentério; continuar investigação.']]},
   {title:'FAST — janelas clássicas',cols:['Janela','Avalia'],rows:[['Hepatorrenal (Morrison)','Quadrante superior direito'],['Esplenorrenal','Quadrante superior esquerdo'],['Suprapúbica','Pelve'],['Subxifoide','Pericárdio']]}
  ],
  pearls:['FAST pesquisa líquido livre; não identifica todas as lesões e depende de contexto/operador.','O quadro clínico e a perfusão orientam prioridade, não apenas a imagem.'],
  sources:['Slides Trauma abdominal final p8','Apostila de Trauma abdominal']
 }
};
