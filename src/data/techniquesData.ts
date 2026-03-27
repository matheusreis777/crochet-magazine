export interface TechniqueStep {
    title: string;
    description: string;
}

export interface Technique {
    id: string;
    categoryId: string;
    name: string;
    description: string;
    difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
    steps: TechniqueStep[];
    tips: string[];
}

export interface TechniqueCategory {
    id: string;
    name: string;
    description: string;
    icon: string;
}

export const TECHNIQUE_CATEGORIES: TechniqueCategory[] = [
    { id: 'iniciar-pecas', name: 'Iniciar Peças', description: 'Técnicas para começar trabalhos com segurança.', icon: '🚀' },
    { id: 'troca-cores', name: 'Troca de Cores', description: 'Como misturar e trocar cores sem nós visíveis.', icon: '🎨' },
    { id: 'emendas-fios', name: 'Emendas de Fios', description: 'Métodos para emendar fios de forma invisível.', icon: '🔗' },
    { id: 'acabamento', name: 'Acabamento', description: 'Técnicas para finalizar peças com perfeição.', icon: '✨' },
    { id: 'leitura-graficos', name: 'Leitura de Gráficos', description: 'Como interpretar gráficos e diagramas de crochê.', icon: '📐' },
];

export const TECHNIQUES: Technique[] = [
    // ─── INICIAR PEÇAS ─────────────────────
    {
        id: 'anel-magico',
        categoryId: 'iniciar-pecas',
        name: 'Anel Mágico (Magic Ring)',
        description: 'O método profissional para iniciar qualquer trabalho circular sem buraco no centro.',
        difficulty: 'Iniciante',
        steps: [
            { title: 'Formar o Laço', description: 'Enrole o fio ao redor dos dedos indicador e médio, formando um "X" com a ponta do fio por cima.' },
            { title: 'Inserir a Agulha', description: 'Passe a agulha por baixo do primeiro fio e por cima do segundo, puxando uma laçada.' },
            { title: 'Fixar com Corrente', description: 'Faça 1 corrente para fixar. Essa corrente NÃO conta como ponto.' },
            { title: 'Pontos Dentro do Anel', description: 'Faça os pontos necessários (geralmente 6 pb ou 12 pa) inserindo a agulha dentro do anel duplo.' },
            { title: 'Fechar o Anel', description: 'Puxe a ponta do fio para fechar o anel completamente. O buraco central desaparece.' },
            { title: 'Fixar com Ponto Baixíssimo', description: 'Faça 1 ponto baixíssimo no primeiro ponto para fechar a carreira.' },
        ],
        tips: [
            'Se o anel não fechar, você provavelmente puxou o fio errado. Tente o outro.',
            'Pratique com fio grosso antes — é mais fácil de visualizar.',
            'Deixe a ponta do fio com pelo menos 10cm para esconder depois.',
        ],
    },
    {
        id: 'corrente-base',
        categoryId: 'iniciar-pecas',
        name: 'Corrente Base Perfeita',
        description: 'Como fazer uma corrente de base solta e uniforme, essencial para peças retangulares.',
        difficulty: 'Iniciante',
        steps: [
            { title: 'Nó Inicial', description: 'Faça um nó corrediço e coloque na agulha. Deve deslizar facilmente.' },
            { title: 'Primeira Corrente', description: 'Laçe o fio (yarn over) e puxe através do laço. Essa é sua primeira correntinha.' },
            { title: 'Manter a Tensão', description: 'Segure a corrente entre o polegar e o indicador, mantendo tensão uniforme no fio.' },
            { title: 'Ritmo Constante', description: 'Repita o movimento no mesmo ritmo. Cada corrente deve ter o mesmo tamanho.' },
            { title: 'Teste de Frouxidão', description: 'A corrente deve passar facilmente pela agulha. Se não passar, está apertada demais.' },
        ],
        tips: [
            'Se sua corrente fica muito apertada, use uma agulha 1 tamanho maior só para a corrente base.',
            'Conte as correntes a cada 10 pontos para não perder a contagem.',
            'A primeira corrente na agulha NUNCA é contada.',
        ],
    },
    {
        id: 'inicio-oval',
        categoryId: 'iniciar-pecas',
        name: 'Início Oval para Bases',
        description: 'Técnica para criar bases ovais perfeitas, usada em bolsas, cestos e tapetes ovais.',
        difficulty: 'Intermediário',
        steps: [
            { title: 'Corrente Central', description: 'Faça uma corrente do comprimento desejado. Ex: 15 correntes para uma base de bolsa.' },
            { title: 'Trabalhar um Lado', description: 'Faça pontos ao longo de toda a corrente (1 em cada). No último ponto, faça 3 no mesmo.' },
            { title: 'Virar e Trabalhar o Outro Lado', description: 'Continue fazendo pontos na parte de baixo da corrente (nas alças inferiores).' },
            { title: 'Fechar a Volta', description: 'Ao chegar no primeiro ponto, faça 3 pontos no mesmo e feche com pbx.' },
            { title: 'Próximas Carreiras', description: 'Continue aumentando apenas nas pontas (3 pontos em cada extremidade) por 3-5 carreiras.' },
        ],
        tips: [
            'A corrente central determina o comprimento do oval. Mais correntes = oval mais alongado.',
            'Marque os pontos centrais das pontas para saber onde aumentar.',
            'Se a base enrolar, está faltando aumento. Se ondular, está sobrando.',
        ],
    },

    // ─── TROCA DE CORES ────────────────────
    {
        id: 'troca-limpa',
        categoryId: 'troca-cores',
        name: 'Troca de Cor Limpa',
        description: 'Método para trocar de cor sem nós visíveis, com transição perfeita entre as cores.',
        difficulty: 'Iniciante',
        steps: [
            { title: 'Último Ponto da Cor Atual', description: 'Faça o último ponto da cor A mas NÃO termine a última laçada.' },
            { title: 'Puxar Cor Nova', description: 'Com 2 alças restantes na agulha, laçe com a cor B e puxe através das 2 alças.' },
            { title: 'Continuar com Cor Nova', description: 'A partir daqui, todos os pontos serão na cor B. O primeiro ponto já sai na cor certa.' },
            { title: 'Esconder o Fio', description: 'Deixe o fio da cor A solto por trás do trabalho. Vai esconder depois.' },
        ],
        tips: [
            'A troca sempre acontece na ÚLTIMA laçada do ponto anterior, não no início do próximo.',
            'Para listar em espiral, a mudança de cor cria uma "costura" visível. Posicione-a em um lugar discreto.',
            'Não corte o fio se vai usar a mesma cor em carreiras futuras — carregue-o por trás.',
        ],
    },
    {
        id: 'tapestry-crochet',
        categoryId: 'troca-cores',
        name: 'Tapestry Crochet (Jacquard)',
        description: 'Técnica de carregar 2 ou mais cores simultaneamente, criando desenhos e padrões gráficos.',
        difficulty: 'Avançado',
        steps: [
            { title: 'Preparação dos Fios', description: 'Prepare as cores que serão usadas. O fio que não está em uso fica por trás do trabalho.' },
            { title: 'Crochetar por Cima', description: 'Ao fazer cada ponto, passe a agulha POR CIMA do fio da cor inativa para escondê-lo.' },
            { title: 'Trocar Conforme o Gráfico', description: 'Siga o gráfico pixel a pixel. Cada quadrado = 1 ponto baixo na cor indicada.' },
            { title: 'Tensão dos Fios', description: 'Mantenha o fio inativo com tensão similar ao ativo para não repuxar o trabalho.' },
            { title: 'Leitura do Gráfico', description: 'Carreiras ímpares: leia da direita para a esquerda. Carreiras pares: da esquerda para a direita.' },
        ],
        tips: [
            'Use ponto baixo para tapestry crochet — ele cria um tecido mais denso e uniforme.',
            'O fio da cor inativa deve ficar escondido DENTRO dos pontos, não solto atrás.',
            'Comece com desenhos simples de 2 cores antes de tentar padrões multicoloridos.',
            'Mantenha a tensão uniforme — tapestry crochet tende a ficar mais apertado que o crochê normal.',
        ],
    },
    {
        id: 'degradee',
        categoryId: 'troca-cores',
        name: 'Efeito Degradê (Ombré)',
        description: 'Como criar transições suaves de cor usando fios de tons próximos ou técnica de mesclado.',
        difficulty: 'Intermediário',
        steps: [
            { title: 'Seleção de Cores', description: 'Escolha 3-5 tons da mesma família de cor, do mais claro ao mais escuro.' },
            { title: 'Planejamento das Faixas', description: 'Divida o projeto em faixas iguais. Ex: 5 cores em 50 carreiras = 10 carreiras por cor.' },
            { title: 'Transição Gradual', description: 'Troque de cor a cada X carreiras, indo do tom mais claro para o mais escuro (ou vice-versa).' },
            { title: 'Transição Suave (Opcional)', description: 'Na carreira de transição, use 1 fio de cada cor juntos por 1-2 carreiras para mesclar.' },
        ],
        tips: [
            'Compre todas as cores da mesma marca e linha para garantir a mesma espessura.',
            'O degradê fica mais bonito com pelo menos 4 tons.',
            'Em peças circulares, a mudança de cor cria uma "espiral" de transição — normalmente fica bonito.',
        ],
    },

    // ─── EMENDAS DE FIOS ───────────────────
    {
        id: 'emenda-invisivel',
        categoryId: 'emendas-fios',
        name: 'Emenda Invisível (Russian Join)',
        description: 'Método que une dois fios sem nó, criando uma emenda completamente invisível.',
        difficulty: 'Intermediário',
        steps: [
            { title: 'Preparar a Agulha de Tapeçaria', description: 'Enfie a ponta do fio antigo (cor A) em uma agulha de tapeçaria de ponta romba.' },
            { title: 'Passar por Dentro do Próprio Fio', description: 'Insira a agulha no centro da fibra do fio A, passando por dentro dele por 3-4cm.' },
            { title: 'Criar o Laço', description: 'Antes de puxar completamente, passe o fio B pelo laço que se formou.' },
            { title: 'Repetir com Fio B', description: 'Faça o mesmo com o fio B: passe a agulha por dentro dele mesmo, com o fio A já preso no laço.' },
            { title: 'Puxar e Ajustar', description: 'Puxe ambas as pontas para fechar os laços. O fio ficará levemente mais grosso no ponto da emenda.' },
        ],
        tips: [
            'Funciona melhor com fios de fibras naturais (algodão, lã) que se "agarram".',
            'A emenda fica quase invisível em peças de textura — é mais notável em peças lisas de fio fino.',
            'Corte as pontas excedentes rente ao fio depois de apertar.',
        ],
    },
    {
        id: 'emenda-no-magico',
        categoryId: 'emendas-fios',
        name: 'Nó Mágico (Magic Knot)',
        description: 'Nó que se esconde dentro dos pontos e não desmonta jamais, ideal para fios lisos.',
        difficulty: 'Iniciante',
        steps: [
            { title: 'Posicionar os Fios', description: 'Coloque os dois fios paralelos, com as pontas em direções opostas, sobrepostos por 10cm.' },
            { title: 'Primeiro Nó', description: 'Faça um nó simples com o fio A ao redor do fio B (não aperte ainda).' },
            { title: 'Segundo Nó', description: 'Faça um nó simples com o fio B ao redor do fio A (não aperte ainda).' },
            { title: 'Apertar Simultaneamente', description: 'Puxe as pontas longas dos dois fios ao mesmo tempo. Os nós vão deslizar e se encontrar.' },
            { title: 'Cortar Pontas', description: 'Corte as pontas curtas bem rente ao nó. Ele não vai soltar.' },
        ],
        tips: [
            'O nó mágico é a forma mais rápida de emendar fios, mas cria um ponto levemente mais grosso.',
            'Ideal para barbante e fios de malha onde pequenos nós não são visíveis.',
            'Teste o nó puxando forte antes de continuar o trabalho.',
        ],
    },

    // ─── ACABAMENTO ────────────────────────
    {
        id: 'esconder-pontas',
        categoryId: 'acabamento',
        name: 'Esconder Pontas Corretamente',
        description: 'A técnica correta para esconder as pontas de fio sem que soltem ou apareçam.',
        difficulty: 'Iniciante',
        steps: [
            { title: 'Agulha de Tapeçaria', description: 'Enfie a ponta do fio (mínimo 10cm) em uma agulha de tapeçaria de ponta romba.' },
            { title: 'Seguir a Direção dos Pontos', description: 'Passe a agulha por dentro dos pontos, seguindo a mesma direção da carreira (horizontal).' },
            { title: 'Mudar de Direção', description: 'Após 5-6 pontos, mude de direção (suba ou desça 1 carreira) e continue por mais 5-6 pontos.' },
            { title: 'Cortar Rente', description: 'Estirique levemente o tecido e corte o fio rente à superfície. Ao soltar, a ponta se recolhe.' },
        ],
        tips: [
            'Nunca esconda pontas de cores diferentes no mesmo trecho — a cor pode aparecer pela frente.',
            'Em peças que vão ser lavadas, faça o percurso em "zigue-zague" para maior segurança.',
            'Em crochê de fio fino, as pontas são mais difíceis de esconder. Use 15cm de fio mínimo.',
        ],
    },
    {
        id: 'bloqueio-pecas',
        categoryId: 'acabamento',
        name: 'Bloqueio e Modelagem',
        description: 'Como bloquear (esticar e moldar) peças para que fiquem com o formato e medidas corretas.',
        difficulty: 'Intermediário',
        steps: [
            { title: 'Lavar a Peça', description: 'Lave a peça com sabão neutro em água morna. Não torça — aperte suavemente.' },
            { title: 'Remover Excesso de Água', description: 'Enrole a peça em uma toalha e pressione para absorver a água.' },
            { title: 'Preparar a Superfície', description: 'Use uma placa de isopor, colchonete de EVA ou até a cama coberta com plástico.' },
            { title: 'Esticar e Prender', description: 'Estique a peça no formato desejado e prenda com alfinetes inoxidáveis a cada 2-3cm.' },
            { title: 'Secar Completamente', description: 'Deixe secar naturalmente (12-24h). Não use secador ou sol direto.' },
            { title: 'Remover Alfinetes', description: 'Retire os alfinetes. A peça manterá o formato enquanto não for lavada novamente.' },
        ],
        tips: [
            'Bloqueio é ESSENCIAL para peças rendadas — sem ele, a renda não mostra seu padrão.',
            'Fios de algodão mantêm o bloqueio por mais tempo que fios acrílicos.',
            'Para peças de acrílico, use vapor (ferro a vapor a 10cm de distância) em vez de água.',
        ],
    },
    {
        id: 'costura-invisivel',
        categoryId: 'acabamento',
        name: 'Costura Invisível para Unir Peças',
        description: 'Como unir partes de crochê (squares, hexágonos, painéis) de forma praticamente invisível.',
        difficulty: 'Intermediário',
        steps: [
            { title: 'Alinhar as Peças', description: 'Coloque as duas peças lado a lado, com os pontos alinhados. Use alfinetes para fixar.' },
            { title: 'Enfiar Agulha de Tapeçaria', description: 'Use a mesma cor de fio da peça. Enfie na agulha de tapeçaria.' },
            { title: 'Ponto Mattress (Colchão)', description: 'Passe a agulha por baixo de 1 alça do ponto na peça A, depois 1 alça na peça B. Alterne.' },
            { title: 'Puxar a Cada 3-4 Pontos', description: 'A cada 3-4 pontos, puxe o fio para fechar. A costura fica invisível pelo lado direito.' },
            { title: 'Arrematar', description: 'Ao terminar, esconda a ponta do fio por dentro da costura.' },
        ],
        tips: [
            'Para peças de cores diferentes, use a cor mais escura para costurar.',
            'Não puxe demais o fio — a costura deve ter a mesma elasticidade do crochê.',
            'Ponto baixíssimo pelo avesso é uma alternativa mais rápida, mas cria uma "costela" visível.',
        ],
    },

    // ─── LEITURA DE GRÁFICOS ──────────────
    {
        id: 'simbolos-basicos',
        categoryId: 'leitura-graficos',
        name: 'Símbolos Básicos de Gráficos',
        description: 'Guia para interpretar os símbolos mais comuns em gráficos e diagramas de crochê.',
        difficulty: 'Iniciante',
        steps: [
            { title: 'Corrente (○)', description: 'Um círculo ou oval pequeno. Cada círculo = 1 corrente.' },
            { title: 'Ponto Baixo (+)', description: 'Um sinal de mais ou X. Cada símbolo = 1 ponto baixo.' },
            { title: 'Ponto Alto (T)', description: 'Um T com traço no meio. 1 traço = ponto alto. 2 traços = ponto alto duplo.' },
            { title: 'Ponto Baixíssimo (•)', description: 'Um ponto cheio. Usado para fechar carreiras e unir pontos.' },
            { title: 'Aumento (V)', description: 'Dois símbolos saindo do mesmo ponto de base. Significa 2 pontos no mesmo ponto.' },
            { title: 'Diminuição (∧)', description: 'Dois símbolos convergindo para um ponto no topo. Significa 2 pontos fechados juntos.' },
        ],
        tips: [
            'Gráficos circulares são lidos de dentro para fora, no sentido anti-horário.',
            'Gráficos retangulares: linhas ímpares = direita para esquerda. Linhas pares = esquerda para direita.',
            'Cada gráfico pode usar variações dos símbolos. Sempre consulte a legenda.',
        ],
    },
    {
        id: 'grafico-circular',
        categoryId: 'leitura-graficos',
        name: 'Ler Gráficos Circulares',
        description: 'Como seguir gráficos de projetos circulares como tapetes, sousplats e porta-copos.',
        difficulty: 'Intermediário',
        steps: [
            { title: 'Identificar o Centro', description: 'O gráfico começa no centro. Procure o anel mágico ou as correntes iniciais.' },
            { title: 'Primeira Carreira', description: 'Siga os símbolos ao redor do centro, no sentido anti-horário (ou conforme indicado).' },
            { title: 'Identificar Aumentos', description: 'Procure os pontos em "V" — são os aumentos que fazem o círculo crescer.' },
            { title: 'Repetições', description: 'Muitos gráficos mostram apenas 1 seção (1/4 ou 1/6 do círculo) com indicação de repetir.' },
            { title: 'Carreiras de Cor', description: 'Se houver trocas de cor, cada carreira pode ter uma cor de linha diferente no gráfico.' },
        ],
        tips: [
            'Numere as carreiras no gráfico antes de começar para não se perder.',
            'Em gráficos grandes, use um marcador para indicar onde parou.',
            'Se o gráfico mostra apenas metade, use um espelho mental — o outro lado é espelhado.',
        ],
    },
];
