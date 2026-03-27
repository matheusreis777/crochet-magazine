export interface Step {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  categoryId: string;
  name: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  description: string;
  materials: string[];
  steps: Step[];
  image: string;
  estimatedYarn: string;
  hookRecommended: string;
  beginnerTip: string;
  tags: string[];
  estimatedTime: string;
  stitchesUsed: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Stitch {
  id: string;
  name: string;
  abbr: string;
  description: string;
  steps: string[];
}

export const CATEGORIES: Category[] = [
  { id: 'tapetes-redondos', name: 'Tapetes Redondos', description: 'Modelos circulares básicos e lisos.', icon: '⭕' },
  { id: 'tapetes-retangulares', name: 'Tapetes Retangulares', description: 'Tapetes de porta em pontos simples.', icon: '⬛' },
  { id: 'passadeiras', name: 'Passadeiras', description: 'Caminhos de mesa em uma ou mais cores.', icon: '📏' },
  { id: 'porta-copos', name: 'Porta-Copos', description: 'O projeto ideal para seu primeiro dia.', icon: '🥛' },
  { id: 'porta-papel', name: 'Porta Papel Higiênico', description: 'Organizador básico para iniciantes.', icon: '🧻' },
  { id: 'bolsas', name: 'Sacolas e Bolsas', description: 'Modelos tipo sacola simples e práticos.', icon: '👜' },
  { id: 'mesa', name: 'Mesa Posta', description: 'Jogo americano, sousplat e caminhos de mesa.', icon: '🍽️' },
  { id: 'decoracao', name: 'Decoração', description: 'Almofadas, cachepôs e peças decorativas.', icon: '🏠' },
  { id: 'utilitarios', name: 'Utilitários', description: 'Cestos, nécessaires e organizadores.', icon: '🧺' },
  { id: 'infantil', name: 'Infantil', description: 'Tapetes e peças para quarto de criança.', icon: '🧸' },
  { id: 'cozinha', name: 'Cozinha', description: 'Panos de prato, pegadores e capas.', icon: '🍳' },
];

export const PROJECTS: Project[] = [
  // ─── TAPETES REDONDOS ────────────────────
  {
    id: 'tapete-redondo-basico',
    categoryId: 'tapetes-redondos',
    name: 'Tapete Redondo Básico',
    difficulty: 'Iniciante',
    description: 'Um tapete circular liso, excelente para praticar aumentos circulares.',
    materials: ['Barbante número 6 (400g)', 'Agulha 3.5mm', 'Tesoura'],
    estimatedYarn: '400g (1 novelo)',
    hookRecommended: '3.5mm',
    image: '',
    beginnerTip: 'O segredo do círculo perfeito é não apertar demais os pontos iniciais.',
    tags: ['circular', 'liso', 'básico'],
    estimatedTime: '4-6 horas',
    stitchesUsed: ['corr', 'pa', 'pb'],
    steps: [
      { title: 'Início com Anel Mágico', description: 'Faça um círculo com o fio e suba 3 correntes. Isso conta como seu primeiro ponto alto.' },
      { title: 'Base Circular', description: 'Faça mais 11 pontos altos dentro do círculo. Feche com um ponto baixíssimo.' },
      { title: 'Primeiro Aumento', description: 'Suba 3 correntes. Faça 2 pontos altos em cada buraquinho da carreira anterior. Você terá 24 pontos agora.' },
      { title: 'Crescimento', description: 'Alterne: 1 ponto alto sozinho, e 2 pontos altos juntos no próximo. Siga assim até o tamanho desejado.' },
      { title: 'Borda e Arremate', description: 'Faça uma carreira de pontos baixos para firmar a borda. Corte o fio e esconda com a própria agulha.' }
    ]
  },
  {
    id: 'tapete-redondo-pipoca',
    categoryId: 'tapetes-redondos',
    name: 'Tapete Redondo Ponto Pipoca',
    difficulty: 'Intermediário',
    description: 'Tapete com relevo usando ponto pipoca intercalado, dando textura tridimensional à peça.',
    materials: ['Barbante número 6 (600g)', 'Agulha 4.0mm', 'Tesoura', 'Agulha de tapeçaria'],
    estimatedYarn: '600g (2 novelos)',
    hookRecommended: '4.0mm',
    image: '',
    beginnerTip: 'O ponto pipoca consome mais fio que o normal. Compre sempre 20% a mais de barbante.',
    tags: ['circular', 'textura', 'pipoca', 'relevo'],
    estimatedTime: '8-12 horas',
    stitchesUsed: ['corr', 'pa', 'pb', 'pipoca'],
    steps: [
      { title: 'Anel Mágico e Base', description: 'Faça 12 pontos altos no anel mágico. Feche com ponto baixíssimo.' },
      { title: 'Segunda Carreira — Aumento Total', description: 'Suba 3 correntes. Faça 2 pontos altos em cada ponto. Total: 24 pontos.' },
      { title: 'Terceira Carreira — Introduzindo Pipoca', description: 'Faça 1 ponto alto, 1 ponto pipoca (5 pontos altos fechados juntos), alternando ao redor.' },
      { title: 'Carreiras de Expansão', description: 'Continue aumentando como tapete redondo normal, inserindo ponto pipoca a cada 2ª carreira.' },
      { title: 'Carreiras Intermediárias Lisas', description: 'Entre as carreiras de pipoca, faça carreiras inteiras de ponto alto simples para contraste.' },
      { title: 'Borda Decorativa', description: 'Finalize com 2 carreiras de ponto baixo e 1 carreira de ponto picô para decorar a borda.' }
    ]
  },
  {
    id: 'tapete-redondo-espiral',
    categoryId: 'tapetes-redondos',
    name: 'Tapete Espiral Bicolor',
    difficulty: 'Intermediário',
    description: 'Tapete circular com efeito espiral usando duas cores alternadas, criando um visual hipnótico.',
    materials: ['Barbante número 6 cor A (300g)', 'Barbante número 6 cor B (300g)', 'Agulha 4.0mm'],
    estimatedYarn: '600g (2 cores)',
    hookRecommended: '4.0mm',
    image: '',
    beginnerTip: 'Ao trocar de cor, puxe o fio da nova cor pela última laçada do ponto anterior para uma transição limpa.',
    tags: ['circular', 'bicolor', 'espiral', 'troca de cor'],
    estimatedTime: '10-14 horas',
    stitchesUsed: ['corr', 'pa', 'pb'],
    steps: [
      { title: 'Início com Cor A', description: 'Faça anel mágico com cor A e 6 pontos altos dentro do anel.' },
      { title: 'Introdução da Cor B', description: 'Sem fechar a carreira, prenda a cor B e faça 6 pontos altos continuando em espiral.' },
      { title: 'Espiral Contínua', description: 'Continue alternando: 1 seção de cor A, 1 seção de cor B, sempre aumentando proporcionalmente.' },
      { title: 'Aumentos em Espiral', description: 'Faça os aumentos sempre no mesmo ponto relativo de cada seção para manter as espirais retas.' },
      { title: 'Uniformidade', description: 'Use um marcador de ponto no início de cada seção de cor para não perder a contagem.' },
      { title: 'Finalização', description: 'Arremate escondendo os fios de ambas as cores por dentro da peça com agulha de tapeçaria.' }
    ]
  },

  // ─── TAPETES RETANGULARES ────────────────
  {
    id: 'tapete-retangular-simples',
    categoryId: 'tapetes-retangulares',
    name: 'Tapete de Porta Simples',
    difficulty: 'Iniciante',
    description: 'Tapete retangular clássico, ideal para treinar carreiras de ida e volta.',
    materials: ['Barbante número 6 (500g)', 'Agulha 4.0mm'],
    estimatedYarn: '500g (1 novelo grande)',
    hookRecommended: '4.0mm',
    image: '',
    beginnerTip: 'Sempre conte seus pontos no final de cada carreira para garantir que o tapete não fique torto.',
    tags: ['retangular', 'liso', 'básico'],
    estimatedTime: '5-7 horas',
    stitchesUsed: ['corr', 'pa'],
    steps: [
      { title: 'Corrente Base', description: 'Faça 50 correntinhas bem soltinhas para a base não repuxar.' },
      { title: 'Carreira de Ida', description: 'Suba 3 correntes (seu 1º ponto) e vá fazendo um ponto alto em cada correntinha até o fim.' },
      { title: 'Virando o Trabalho', description: 'Vire a peça, suba 3 correntes e repita o processo voltando.' },
      { title: 'Repetição', description: 'Continue assim até atingir o comprimento de aproximadamente 60cm.' },
      { title: 'Arremate Final', description: 'Corte o fio deixando 10cm para esconder por entre os pontos.' }
    ]
  },
  {
    id: 'tapete-retangular-relevo',
    categoryId: 'tapetes-retangulares',
    name: 'Tapete Retangular em Relevo',
    difficulty: 'Intermediário',
    description: 'Tapete com textura tridimensional usando pontos altos em relevo pela frente e por trás.',
    materials: ['Barbante número 6 (700g)', 'Agulha 4.0mm', 'Agulha de tapeçaria'],
    estimatedYarn: '700g (2 novelos)',
    hookRecommended: '4.0mm',
    image: '',
    beginnerTip: 'O ponto relevo pela frente cria uma "costela" que salta do tecido. Pratique em uma amostra antes.',
    tags: ['retangular', 'relevo', 'textura', '3D'],
    estimatedTime: '10-14 horas',
    stitchesUsed: ['corr', 'pa', 'par-frente', 'par-costas'],
    steps: [
      { title: 'Corrente Base', description: 'Faça 55 correntes soltinhas. Lembre-se: ponto relevo consome mais fio, então deixe folga.' },
      { title: 'Carreira Base Lisa', description: 'Faça 1 carreira inteira de ponto alto simples. Esta será a base para os relevos.' },
      { title: 'Ponto Relevo pela Frente', description: 'Na próxima carreira, insira a agulha ao redor do corpo do ponto alto da carreira anterior, pela frente.' },
      { title: 'Alternância de Relevo', description: 'Alterne: 1 ponto relevo pela frente, 1 ponto relevo por trás. Isso cria o efeito de cesto trançado.' },
      { title: 'Padrão de Xadrez', description: 'A cada 2 carreiras, inverta a posição dos relevos para criar um padrão quadriculado.' },
      { title: 'Borda Firme', description: 'Finalize com 2 carreiras de ponto baixo bem apertado para dar estrutura às bordas.' }
    ]
  },

  // ─── PASSADEIRAS ─────────────────────────
  {
    id: 'passadeira-basica',
    categoryId: 'passadeiras',
    name: 'Passadeira Fácil de Mesa',
    difficulty: 'Iniciante',
    description: 'Uma passadeira longa e lisa, perfeita para mesas ou corredores.',
    materials: ['Barbante número 4 ou 6', 'Agulha 3.5mm'],
    estimatedYarn: '800g a 1kg',
    hookRecommended: '3.5mm',
    image: '',
    beginnerTip: 'Use um fio número 4 se quiser uma peça mais delicada para mesa de jantar.',
    tags: ['longo', 'liso', 'mesa'],
    estimatedTime: '8-12 horas',
    stitchesUsed: ['corr', 'pa'],
    steps: [
      { title: 'Cálculo de Tamanho', description: 'Meça sua mesa. A passadeira deve ser 20cm menor que o tampo ou cair 15cm de cada lado.' },
      { title: 'Início Longo', description: 'Faça uma corrente gigante que cubra o comprimento desejado.' },
      { title: 'Ponto Alto Simples', description: 'Preencha toda a corrente com pontos altos. Isso dará a estrutura da peça.' },
      { title: 'Carreiras Laterais', description: 'Trabalhe 5 carreiras de cada lado para dar a largura necessária.' }
    ]
  },
  {
    id: 'passadeira-rendada',
    categoryId: 'passadeiras',
    name: 'Passadeira Rendada Elegante',
    difficulty: 'Avançado',
    description: 'Passadeira com padrão rendado usando pontos leque e espaços vazados, ideal para mesa de jantar.',
    materials: ['Linha de crochê fina (500g)', 'Agulha 2.0mm', 'Tesoura', 'Alfinetes para bloqueio'],
    estimatedYarn: '500g (linha fina)',
    hookRecommended: '2.0mm',
    image: '',
    beginnerTip: 'Peças rendadas precisam de bloqueio (molhar e esticar com alfinetes) para ficarem perfeitas.',
    tags: ['rendado', 'elegante', 'leque', 'vazado', 'fino'],
    estimatedTime: '20-30 horas',
    stitchesUsed: ['corr', 'pa', 'pb', 'leque', 'pico'],
    steps: [
      { title: 'Corrente Base Longa', description: 'Faça uma corrente múltipla de 8+3 para o padrão de leques. Ex: 163 correntes para 1m de passadeira.' },
      { title: 'Carreira de Leques', description: 'Pule 4 correntes, faça 5 pontos altos no mesmo ponto (leque), pule 4, 1 ponto baixo. Repita.' },
      { title: 'Carreira de Arcos', description: 'Faça arcos de 5 correntes conectando o centro de cada leque da carreira anterior.' },
      { title: 'Repetição do Padrão', description: 'Alterne entre carreiras de leque e arcos até atingir a largura desejada (aprox. 30-40cm).' },
      { title: 'Bordas Laterais', description: 'Trabalhe uma carreira de ponto baixo nas laterais longas para dar acabamento uniforme.' },
      { title: 'Franja ou Picô', description: 'Nas pontas curtas, faça uma borda de pontos picô (3 correntes + 1 ponto baixíssimo) para decorar.' },
      { title: 'Bloqueio Final', description: 'Lave a peça, estique sobre uma superfície plana e prenda com alfinetes até secar completamente.' }
    ]
  },

  // ─── PORTA-COPOS ─────────────────────────
  {
    id: 'porta-copos-facil',
    categoryId: 'porta-copos',
    name: 'Porta-Copos Minimalista',
    difficulty: 'Iniciante',
    description: 'O menor e mais rápido projeto para treinar o círculo perfeito.',
    materials: ['Restos de linha', 'Agulha 3.0mm'],
    estimatedYarn: '20g',
    hookRecommended: '3.0mm',
    image: '',
    beginnerTip: 'É o projeto perfeito para usar aquelas sobrinhas de fio que estão guardadas.',
    tags: ['pequeno', 'rápido', 'circular'],
    estimatedTime: '30 min',
    stitchesUsed: ['corr', 'pa', 'pb'],
    steps: [
      { title: 'Centro', description: 'Faça 12 pontos altos dentro de um anel mágico.' },
      { title: 'Aumento Único', description: 'Na segunda carreira, faça 2 pontos altos em cada ponto. Total 24.' },
      { title: 'Borda Decorativa', description: 'Faça (1 ponto baixo, 2 correntes) em cada ponto para criar um detalhe delicado.' }
    ]
  },
  {
    id: 'porta-copos-textura',
    categoryId: 'porta-copos',
    name: 'Porta-Copos com Textura',
    difficulty: 'Iniciante',
    description: 'Porta-copos quadrado com textura moss stitch, moderno e funcional.',
    materials: ['Fio de algodão 100% (50g)', 'Agulha 3.5mm'],
    estimatedYarn: '50g',
    hookRecommended: '3.5mm',
    image: '',
    beginnerTip: 'O moss stitch é simplesmente alternar 1 ponto baixo e 1 corrente. Simples e bonito!',
    tags: ['quadrado', 'textura', 'moss stitch', 'moderno'],
    estimatedTime: '1 hora',
    stitchesUsed: ['corr', 'pb'],
    steps: [
      { title: 'Corrente Base', description: 'Faça 22 correntes. A peça terá aproximadamente 10cm x 10cm.' },
      { title: 'Primeira Carreira Moss', description: 'Pule 1 corrente, 1 ponto baixo, 1 corrente, pule 1, 1 ponto baixo. Repita até o fim.' },
      { title: 'Carreiras Seguintes', description: 'Suba 2 correntes. Faça 1 ponto baixo no espaço de corrente da carreira anterior, 1 corrente. Repita.' },
      { title: 'Repetição', description: 'Continue o padrão até ter um quadrado perfeito (10-11 carreiras).' },
      { title: 'Borda Final', description: 'Faça 1 carreira de ponto baixo ao redor de todo o quadrado, com 3 pontos baixos nos cantos.' }
    ]
  },

  // ─── PORTA-PAPEL ─────────────────────────
  {
    id: 'porta-papel-basico',
    categoryId: 'porta-papel',
    name: 'Organizador de Banheiro Simples',
    difficulty: 'Iniciante',
    description: 'Estrutura básica de crochê para 2 rolos de papel.',
    materials: ['Barbante número 6', 'Agulha 4.0mm'],
    estimatedYarn: '300g',
    hookRecommended: '3.5mm a 4.0mm',
    image: '',
    beginnerTip: 'Certifique-se de que o retângulo é largo o suficiente para o rolo girar livremente.',
    tags: ['banheiro', 'organizador', 'funcional'],
    estimatedTime: '3-4 horas',
    stitchesUsed: ['corr', 'pa', 'pb'],
    steps: [
      { title: 'Base Reta', description: 'Faça 25 correntinhas e trabalhe em pontos altos.' },
      { title: 'Comprimento', description: 'Continue subindo carreiras até atingir 50cm de altura.' },
      { title: 'Montagem', description: 'Dobre a base e costure com pontos baixíssimos para criar os espaços.' },
      { title: 'Alça', description: 'Faça 15 correntes no topo para pendurar no suporte.' }
    ]
  },
  {
    id: 'porta-papel-decorado',
    categoryId: 'porta-papel',
    name: 'Porta-Papel com Aplique Floral',
    difficulty: 'Intermediário',
    description: 'Porta-papel com aplicação de flores em crochê, unindo utilidade e decoração.',
    materials: ['Barbante número 6 (300g)', 'Restos de barbante colorido', 'Agulha 3.5mm', 'Agulha de tapeçaria'],
    estimatedYarn: '350g total',
    hookRecommended: '3.5mm',
    image: '',
    beginnerTip: 'Faça as flores separadamente e costure depois. Assim você pode reposicionar antes de fixar.',
    tags: ['banheiro', 'decorativo', 'flores', 'aplique'],
    estimatedTime: '6-8 horas',
    stitchesUsed: ['corr', 'pa', 'pb', 'leque'],
    steps: [
      { title: 'Corpo do Porta-Papel', description: 'Faça a base retangular com 30 correntes e 60 carreiras de ponto alto.' },
      { title: 'Flores Avulsas', description: 'Faça 3 flores: anel mágico, 5 pétalas de (3 pontos altos, 1 ponto baixo) cada.' },
      { title: 'Folha Decorativa', description: 'Faça 10 correntes, volte em ponto baixo, suba com ponto alto no centro, desça em ponto baixo.' },
      { title: 'Montagem da Base', description: 'Costure as laterais do retângulo formando um tubo. Deixe abertura para o rolo.' },
      { title: 'Aplicação dos Apliques', description: 'Posicione flores e folhas na parte frontal e costure com pontos invisíveis.' },
      { title: 'Alça de Pendurar', description: 'Faça uma corrente reforçada de 18 correntes trabalhadas em ponto baixo para a alça.' }
    ]
  },

  // ─── BOLSAS ──────────────────────────────
  {
    id: 'sacola-basica',
    categoryId: 'bolsas',
    name: 'Sacola de Compras Simples',
    difficulty: 'Iniciante',
    description: 'Uma bolsa tipo "tote" sem forro, ideal para carregar o seu material de crochê.',
    materials: ['Fio de Algodão resistente', 'Agulha 4.5mm'],
    estimatedYarn: '400g',
    hookRecommended: '4.5mm',
    image: '',
    beginnerTip: 'Use pontos bem apertados na base para que a bolsa não estique demais com o peso.',
    tags: ['sacola', 'funcional', 'simples'],
    estimatedTime: '6-8 horas',
    stitchesUsed: ['corr', 'pb'],
    steps: [
      { title: 'Base da Bolsa', description: 'Faça um retângulo de 30x10cm usando apenas pontos baixos.' },
      { title: 'Subida', description: 'Trabalhe ao redor de toda a base, subindo em espiral para criar o corpo da bolsa.' },
      { title: 'Alças Incorporadas', description: 'Ao chegar na altura desejada, pule 20 pontos e faça 40 correntes no ar para criar as alças.' },
      { title: 'Reforço', description: 'Faça uma última carreira de pontos baixos por cima de tudo, incluindo as alças.' }
    ]
  },
  {
    id: 'bolsa-fio-malha',
    categoryId: 'bolsas',
    name: 'Bolsa de Fio de Malha',
    difficulty: 'Intermediário',
    description: 'Bolsa estruturada feita com fio de malha (trapilho), perfeita para o dia a dia.',
    materials: ['Fio de malha / trapilho (400g)', 'Agulha 8.0mm ou 10.0mm', 'Argola de bambu para alça'],
    estimatedYarn: '400g fio de malha',
    hookRecommended: '8.0mm',
    image: '',
    beginnerTip: 'Fio de malha é pesado. Use agulha grossa e não aperte demais para a bolsa não ficar dura.',
    tags: ['bolsa', 'fio de malha', 'trapilho', 'estruturada', 'moderno'],
    estimatedTime: '4-6 horas',
    stitchesUsed: ['corr', 'pb', 'pa'],
    steps: [
      { title: 'Base Oval', description: 'Faça 15 correntes. Trabalhe ao redor em ponto baixo, com 3 pontos nos cantos para formar o oval.' },
      { title: 'Aumento da Base', description: 'Continue 3 carreiras aumentando nos mesmos pontos dos cantos. A base terá ~25x12cm.' },
      { title: 'Subida Sem Aumento', description: 'Pare de aumentar e continue em espiral reta por 20 carreiras para formar o corpo.' },
      { title: 'Diminuição Leve', description: 'Nas 2 últimas carreiras, diminua 4 pontos em cada para afunilar levemente a boca.' },
      { title: 'Fixação das Alças', description: 'Passe o fio de malha pela argola de bambu e costure firmemente nas laterais da bolsa.' },
      { title: 'Acabamento', description: 'Esconda todas as pontas por dentro da peça. O fio de malha se esconde facilmente.' }
    ]
  },
  {
    id: 'bolsa-ponto-fantasia',
    categoryId: 'bolsas',
    name: 'Clutch Ponto Fantasia',
    difficulty: 'Avançado',
    description: 'Clutch elegante com ponto fantasia intercalado, fecho magnético e forro interno.',
    materials: ['Fio de algodão mercerizado (200g)', 'Agulha 2.5mm', 'Fecho magnético', 'Tecido para forro', 'Cola têxtil'],
    estimatedYarn: '200g fio mercerizado',
    hookRecommended: '2.5mm',
    image: '',
    beginnerTip: 'Faça uma amostra de 10x10cm do ponto fantasia antes para calcular o tamanho exato.',
    tags: ['clutch', 'elegante', 'fantasia', 'forro', 'festa'],
    estimatedTime: '12-16 horas',
    stitchesUsed: ['corr', 'pa', 'pb', 'paf', 'leque'],
    steps: [
      { title: 'Corrente Base', description: 'Faça uma corrente múltipla de 6+1, com 49 correntes para uma clutch de 25cm.' },
      { title: 'Ponto Fantasia', description: 'Carreira 1: 1 pb, pule 2, 5 pa no mesmo ponto, pule 2. Carreira 2: 3 pa no pb, 1 pb no centro do leque.' },
      { title: 'Corpo da Clutch', description: 'Repita o padrão por 30 carreiras. A peça terá formato retangular plano.' },
      { title: 'Montagem', description: 'Dobre ao meio e costure as laterais com ponto baixíssimo pelo avesso.' },
      { title: 'Aba de Fechamento', description: 'Continue trabalhando apenas a parte de trás por mais 8 carreiras, diminuindo 2 pontos em cada lateral.' },
      { title: 'Fecho Magnético', description: 'Costure uma parte do fecho na aba e outra na frente da bolsa, reforçando com um quadrado de tecido.' },
      { title: 'Forro Interno', description: 'Corte o tecido do forro no mesmo tamanho, costure e cole por dentro com cola têxtil.' }
    ]
  },

  // ─── MESA POSTA ──────────────────────────
  {
    id: 'jogo-americano',
    categoryId: 'mesa',
    name: 'Jogo Americano Clássico',
    difficulty: 'Iniciante',
    description: 'Jogo americano oval e firme, protege a mesa e decora com charme artesanal.',
    materials: ['Barbante número 6 (200g por unidade)', 'Agulha 4.0mm'],
    estimatedYarn: '200g por peça',
    hookRecommended: '4.0mm',
    image: '',
    beginnerTip: 'Para um jogo uniforme, use sempre o mesmo lote de barbante em todas as peças.',
    tags: ['mesa', 'oval', 'funcional', 'jogo'],
    estimatedTime: '3-4h por peça',
    stitchesUsed: ['corr', 'pa', 'pb'],
    steps: [
      { title: 'Corrente Central', description: 'Faça 30 correntes. Esta será o eixo central do oval.' },
      { title: 'Primeira Volta Oval', description: 'Trabalhe pontos altos ao longo da corrente. No final, faça 5 pontos altos no mesmo ponto para virar.' },
      { title: 'Expansão Oval', description: 'Continue trabalhando ao redor, aumentando 5 pontos em cada ponta a cada carreira.' },
      { title: 'Tamanho Ideal', description: 'Continue até atingir aproximadamente 45x30cm — tamanho padrão de jogo americano.' },
      { title: 'Borda de Acabamento', description: 'Faça 1 carreira de ponto baixo apertado e 1 de ponto caranguejo (ponto baixo ao contrário) para borda elegante.' }
    ]
  },
  {
    id: 'sousplat-croche',
    categoryId: 'mesa',
    name: 'Sousplat de Crochê',
    difficulty: 'Intermediário',
    description: 'Sousplat circular para base de prato, com textura elaborada e borda decorativa.',
    materials: ['Barbante número 6 (250g)', 'Agulha 3.5mm', 'Base de MDF 33cm (opcional)'],
    estimatedYarn: '250g',
    hookRecommended: '3.5mm',
    image: '',
    beginnerTip: 'Se usar base de MDF, faça a capa 1cm maior que a base para encaixar perfeitamente.',
    tags: ['mesa', 'circular', 'sousplat', 'decorativo', 'elegante'],
    estimatedTime: '4-6 horas',
    stitchesUsed: ['corr', 'pa', 'pb', 'leque'],
    steps: [
      { title: 'Centro do Círculo', description: 'Anel mágico com 12 pontos altos. O sousplat deve ter 33cm de diâmetro final.' },
      { title: 'Aumentos Regulares', description: 'Siga a regra de aumentos circulares: carreira 2 = 24 pts, carreira 3 = 36 pts, e assim por diante.' },
      { title: 'Textura Central', description: 'Da carreira 5 em diante, alterne 1 carreira de ponto alto e 1 de ponto relevo para dar textura.' },
      { title: 'Verificação de Tamanho', description: 'Ao atingir 30cm, pare os aumentos e faça 1 carreira reta para começar a borda.' },
      { title: 'Borda em Leque', description: 'Faça leques de 5 pontos altos espaçados por 1 ponto baixo ao redor para a borda final.' },
      { title: 'Encaixe na Base', description: 'Se usar MDF, encaixe a peça e fixe com cola quente nos pontos de contato.' }
    ]
  },
  {
    id: 'caminho-mesa',
    categoryId: 'mesa',
    name: 'Caminho de Mesa Elegante',
    difficulty: 'Avançado',
    description: 'Caminho de mesa longo com padrão de losangos e franjas nas pontas, peça sofisticada para decoração.',
    materials: ['Linha de crochê grossa (600g)', 'Agulha 2.5mm', 'Alfinetes de bloqueio'],
    estimatedYarn: '600g',
    hookRecommended: '2.5mm',
    image: '',
    beginnerTip: 'Trabalhe em blocos de losangos. Termine cada bloco antes de começar o próximo para não perder o padrão.',
    tags: ['mesa', 'longo', 'losango', 'franja', 'sofisticado'],
    estimatedTime: '25-35 horas',
    stitchesUsed: ['corr', 'pa', 'pb', 'paf', 'leque', 'pico'],
    steps: [
      { title: 'Corrente Base', description: 'Faça uma corrente com comprimento da mesa + 40cm de folga (aprox. 200 correntes).' },
      { title: 'Base de Filé', description: 'Trabalhe em técnica de filé: 1 ponto alto, 2 correntes, pule 2, 1 ponto alto. Cria uma grade.' },
      { title: 'Padrão de Losangos', description: 'Preencha quadrados alternados da grade com pontos altos para formar os losangos.' },
      { title: 'Bordas Laterais', description: 'Trabalhe uma borda de ponto baixo + ponto picô nas laterais longas.' },
      { title: 'Franjas', description: 'Corte fios de 30cm. Dobre ao meio e passe pelo espaço de borda com nó de cabeça de cotovia.' },
      { title: 'Bloqueio', description: 'Lave, estique e prenda com alfinetes em superfície plana até secar.' }
    ]
  },

  // ─── DECORAÇÃO ───────────────────────────
  {
    id: 'almofada-croche',
    categoryId: 'decoracao',
    name: 'Capa de Almofada Quadrada',
    difficulty: 'Intermediário',
    description: 'Capa de almofada com textura em ponto waffle, aconchegante e moderna.',
    materials: ['Fio de algodão macio (400g)', 'Agulha 4.0mm', 'Almofada 40x40cm', 'Botões decorativos (3)'],
    estimatedYarn: '400g',
    hookRecommended: '4.0mm',
    image: '',
    beginnerTip: 'O ponto waffle cria quadradinhos em relevo. Parece difícil mas é só alternar ponto relevo frente/costas.',
    tags: ['almofada', 'decoração', 'waffle', 'textura', 'sala'],
    estimatedTime: '10-14 horas',
    stitchesUsed: ['corr', 'pa', 'par-frente', 'par-costas'],
    steps: [
      { title: 'Corrente Base', description: 'Faça 80 correntes (para almofada de 40cm). Faça uma amostra de 10x10cm antes para ajustar.' },
      { title: 'Padrão Waffle — Carreira A', description: '1 ponto alto, 1 ponto relevo pela frente, alternando até o fim.' },
      { title: 'Padrão Waffle — Carreira B', description: '1 ponto relevo pela frente, 1 ponto alto, alternando (inverso da carreira A).' },
      { title: 'Repetição', description: 'Alterne carreiras A e B até ter um quadrado de 40x80cm (frente + verso da almofada).' },
      { title: 'Dobra e Costura', description: 'Dobre ao meio, costure 2 lados. No terceiro lado, faça casas de botão espaçadas.' },
      { title: 'Botões', description: 'Costure 3 botões alinhados com as casas. Insira a almofada e feche.' }
    ]
  },
  {
    id: 'cachepot-croche',
    categoryId: 'decoracao',
    name: 'Cachepô para Vasos',
    difficulty: 'Iniciante',
    description: 'Cachepô de crochê para cobrir vasos de plantas, adicionando aconchego ao ambiente.',
    materials: ['Fio de algodão cru (200g)', 'Agulha 4.0mm'],
    estimatedYarn: '200g',
    hookRecommended: '4.0mm',
    image: '',
    beginnerTip: 'Meça o vaso antes de começar. O cachepô deve ser 1cm menor que o vaso para ficar justo.',
    tags: ['cachepô', 'plantas', 'decoração', 'rápido'],
    estimatedTime: '2-3 horas',
    stitchesUsed: ['corr', 'pb', 'pa'],
    steps: [
      { title: 'Base Circular', description: 'Faça um círculo de ponto baixo até atingir o diâmetro da base do vaso.' },
      { title: 'Subida Reta', description: 'Pare de aumentar e continue em espiral reta (sem aumentos) para formar as paredes.' },
      { title: 'Textura Opcional', description: 'A cada 3 carreiras, faça 1 carreira de ponto relevo pela frente para criar linhas horizontais.' },
      { title: 'Altura Ideal', description: 'Continue até a altura do vaso ou um pouco abaixo da borda.' },
      { title: 'Borda Dobrada', description: 'Faça 3 carreiras extras e dobre para fora, criando uma borda elegante no topo.' }
    ]
  },
  {
    id: 'almofada-textura-avancada',
    categoryId: 'decoracao',
    name: 'Almofada Mandala Circular',
    difficulty: 'Avançado',
    description: 'Almofada circular com padrão mandala em múltiplas cores, uma verdadeira obra de arte têxtil.',
    materials: ['Fio de algodão em 5 cores (100g cada)', 'Agulha 3.5mm', 'Almofada redonda 45cm', 'Zíper invisível 30cm'],
    estimatedYarn: '500g (5 cores)',
    hookRecommended: '3.5mm',
    image: '',
    beginnerTip: 'Planeje as cores antes. Desenhe a sequência no papel para não se perder nas trocas.',
    tags: ['almofada', 'mandala', 'multicolorido', 'circular', 'arte'],
    estimatedTime: '18-24 horas',
    stitchesUsed: ['corr', 'pa', 'pb', 'leque', 'pipoca', 'pico'],
    steps: [
      { title: 'Centro Cor A', description: 'Anel mágico com 12 pontos altos na cor principal. Feche e troque para cor B.' },
      { title: 'Carreira de Leques Cor B', description: 'Faça leques de 5 pontos altos espaçados por 1 ponto baixo. Troque para cor C.' },
      { title: 'Carreira de Pipocas Cor C', description: 'Faça pontos pipoca entre os leques anteriores, conectados por correntes.' },
      { title: 'Expansão Multicolor', description: 'Continue alternando cores e padrões a cada 2 carreiras, sempre mantendo os aumentos regulares.' },
      { title: 'Frente Completa', description: 'Continue até atingir 45cm de diâmetro. Repita para o verso (pode ser mais simples, em cor única).' },
      { title: 'União e Zíper', description: 'Costure frente e verso juntos, inserindo o zíper invisível em uma seção de 30cm.' },
      { title: 'Acabamento', description: 'Insira a almofada, feche o zíper e ajuste a posição da mandala centralizada.' }
    ]
  },

  // ─── UTILITÁRIOS ─────────────────────────
  {
    id: 'necessaire-croche',
    categoryId: 'utilitarios',
    name: 'Nécessaire com Zíper',
    difficulty: 'Intermediário',
    description: 'Nécessaire prática feita em crochê com forro interno e zíper, ideal para o dia a dia.',
    materials: ['Fio de algodão (150g)', 'Agulha 3.0mm', 'Zíper 20cm', 'Tecido para forro', 'Linha e agulha de costura'],
    estimatedYarn: '150g',
    hookRecommended: '3.0mm',
    image: '',
    beginnerTip: 'Costure o zíper com pontos pequenos e firmes. Use alfinetes para fixar antes de costurar.',
    tags: ['nécessaire', 'zíper', 'funcional', 'presente'],
    estimatedTime: '4-6 horas',
    stitchesUsed: ['corr', 'pb', 'pa'],
    steps: [
      { title: 'Painel Retangular (x2)', description: 'Faça 2 retângulos iguais: 40 correntes, 25 carreiras de ponto baixo. Aprox. 22x15cm cada.' },
      { title: 'Fundo e Laterais', description: 'Faça uma tira de 8 correntes x 80 carreiras em ponto baixo. Será o fundo e laterais.' },
      { title: 'União dos Painéis', description: 'Costure a tira ao redor dos dois painéis retangulares, formando uma caixa.' },
      { title: 'Forro Interno', description: 'Corte o tecido de forro no mesmo formato, costure e encaixe por dentro.' },
      { title: 'Instalação do Zíper', description: 'Costure o zíper na abertura superior, fixando no crochê e no forro simultaneamente.' },
      { title: 'Acabamento', description: 'Reforce as costuras nos cantos e esconda todas as pontas de fio por dentro do forro.' }
    ]
  },
  {
    id: 'cesto-organizador',
    categoryId: 'utilitarios',
    name: 'Cesto Organizador Multiuso',
    difficulty: 'Iniciante',
    description: 'Cesto firme de crochê para organizar fios, controles, revistas ou brinquedos.',
    materials: ['Fio de malha / trapilho (500g)', 'Agulha 10.0mm'],
    estimatedYarn: '500g fio de malha',
    hookRecommended: '10.0mm',
    image: '',
    beginnerTip: 'Quanto mais apertado o ponto, mais firme o cesto fica em pé. Não tenha medo de apertar!',
    tags: ['cesto', 'organizador', 'fio de malha', 'decoração funcional'],
    estimatedTime: '2-3 horas',
    stitchesUsed: ['corr', 'pb'],
    steps: [
      { title: 'Base Circular', description: 'Anel mágico com 6 pontos baixos. Aumente uniformemente até atingir 20cm de diâmetro.' },
      { title: 'Transição Base-Parede', description: 'Faça 1 carreira pegando apenas a alça de trás do ponto. Isso cria a "dobra" da base.' },
      { title: 'Paredes Retas', description: 'Continue em espiral sem aumentos por 15-20 carreiras para a altura desejada.' },
      { title: 'Alças Laterais', description: 'Nos lados opostos, pule 5 pontos e faça 10 correntes. Na próxima carreira, trabalhe sobre as correntes.' },
      { title: 'Borda Superior', description: 'Faça 1 carreira final de ponto caranguejo (ponto baixo ao contrário) para uma borda decorativa.' }
    ]
  },
  {
    id: 'organizador-parede',
    categoryId: 'utilitarios',
    name: 'Organizador de Parede',
    difficulty: 'Intermediário',
    description: 'Organizador suspenso com 3 bolsos para guardar materiais de crochê, controles ou acessórios.',
    materials: ['Barbante cru número 6 (400g)', 'Agulha 4.0mm', 'Bastão de madeira 40cm', 'Cordão para pendurar'],
    estimatedYarn: '400g',
    hookRecommended: '4.0mm',
    image: '',
    beginnerTip: 'Faça os bolsos um pouco maiores do que imagina — eles encolhem depois de cheios.',
    tags: ['organizador', 'parede', 'bolsos', 'decoração funcional'],
    estimatedTime: '8-10 horas',
    stitchesUsed: ['corr', 'pa', 'pb'],
    steps: [
      { title: 'Painel Traseiro', description: 'Faça um retângulo de 38x60cm em ponto alto (80 correntes, 50 carreiras).' },
      { title: 'Bolso Grande (inferior)', description: 'Faça um retângulo de 38x20cm em ponto baixo. Costure nas laterais e na base ao painel.' },
      { title: 'Bolsos Médios (x2)', description: 'Faça 2 retângulos de 18x15cm. Costure lado a lado acima do bolso grande.' },
      { title: 'Detalhes Decorativos', description: 'Faça uma borda de ponto caranguejo ao redor de cada bolso para destacar.' },
      { title: 'Passante Superior', description: 'Dobre a parte superior do painel criando um túnel para passar o bastão de madeira.' },
      { title: 'Montagem Final', description: 'Insira o bastão, amarre o cordão nas pontas e pendure na parede.' }
    ]
  },

  // ─── INFANTIL ────────────────────────────
  {
    id: 'tapete-infantil-urso',
    categoryId: 'infantil',
    name: 'Tapete Infantil Ursinho',
    difficulty: 'Intermediário',
    description: 'Tapete circular com carinha de urso, perfeito para quarto de bebê ou espaço de brincar.',
    materials: ['Barbante marrom claro (600g)', 'Barbante marrom escuro (100g)', 'Barbante preto (50g)', 'Agulha 4.0mm'],
    estimatedYarn: '750g total (3 cores)',
    hookRecommended: '4.0mm',
    image: '',
    beginnerTip: 'Faça as orelhas e o focinho separados e costure depois. É mais fácil acertar o posicionamento.',
    tags: ['infantil', 'ursinho', 'quarto de bebê', 'fofo', 'personagem'],
    estimatedTime: '12-16 horas',
    stitchesUsed: ['corr', 'pa', 'pb'],
    steps: [
      { title: 'Base Circular (Rosto)', description: 'Com barbante marrom claro, faça um círculo de 60cm de diâmetro em ponto alto.' },
      { title: 'Orelhas (x2)', description: 'Com marrom claro: círculo de 12cm. Com marrom escuro: círculo interno de 8cm. Costure um sobre o outro.' },
      { title: 'Focinho', description: 'Com marrom claro: oval de 10x8cm. Borde a boca e o nariz com barbante preto.' },
      { title: 'Olhos', description: 'Com barbante preto: 2 círculos de 3cm. Posicione acima do focinho com espaço de 8cm.' },
      { title: 'Montagem do Rosto', description: 'Costure orelhas no topo, olhos e focinho nas posições corretas. Use alfinetes para marcar antes.' },
      { title: 'Borda Antiderrapante', description: 'Faça 2 carreiras extras de ponto baixo apertado. Opcionalmente, cole tela antiderrapante por baixo.' }
    ]
  },
  {
    id: 'tapete-infantil-arco-iris',
    categoryId: 'infantil',
    name: 'Tapete Arco-Íris Semicircular',
    difficulty: 'Iniciante',
    description: 'Meio círculo colorido com as cores do arco-íris, divertido e educativo para crianças.',
    materials: ['Barbante em 7 cores (100g cada)', 'Agulha 4.0mm'],
    estimatedYarn: '700g (7 cores)',
    hookRecommended: '4.0mm',
    image: '',
    beginnerTip: 'Siga a ordem das cores do arco-íris de dentro para fora: vermelho, laranja, amarelo, verde, azul, anil, violeta.',
    tags: ['infantil', 'arco-íris', 'colorido', 'semicircular', 'educativo'],
    estimatedTime: '6-8 horas',
    stitchesUsed: ['corr', 'pa', 'pb'],
    steps: [
      { title: 'Semicírculo Base', description: 'Com a cor vermelha, faça um semicírculo de 5 carreiras em ponto alto.' },
      { title: 'Trocas de Cor', description: 'A cada 3 carreiras, troque para a próxima cor do arco-íris.' },
      { title: 'Aumentos em Semicírculo', description: 'Aumente apenas nas extremidades e no centro do arco para manter a forma de meia-lua.' },
      { title: 'Base Reta', description: 'A borda reta (base do semicírculo) deve ser trabalhada sem aumentos para ficar rente ao chão.' },
      { title: 'Borda em Branco', description: 'Finalize com 2 carreiras de ponto baixo em barbante branco para emoldurar as cores.' }
    ]
  },

  // ─── COZINHA ─────────────────────────────
  {
    id: 'pano-prato-barrado',
    categoryId: 'cozinha',
    name: 'Pano de Prato com Barrado',
    difficulty: 'Iniciante',
    description: 'Barrado de crochê aplicado em pano de prato, o presente artesanal mais clássico do Brasil.',
    materials: ['Pano de prato liso', 'Linha de crochê (100g)', 'Agulha 2.0mm', 'Agulha de costura'],
    estimatedYarn: '100g linha',
    hookRecommended: '2.0mm',
    image: '',
    beginnerTip: 'Lave o pano de prato antes para ele já encolher. Assim o barrado não vai repuxar depois.',
    tags: ['cozinha', 'barrado', 'pano de prato', 'presente'],
    estimatedTime: '2-3 horas',
    stitchesUsed: ['corr', 'pa', 'pb', 'pico'],
    steps: [
      { title: 'Preparação do Pano', description: 'Dobre a bainha inferior do pano e faça furinhos com agulha espaçados a cada 0.5cm.' },
      { title: 'Base no Pano', description: 'Faça pontos baixos passando a agulha pelos furinhos, criando uma fileira de crochê presa ao pano.' },
      { title: 'Primeira Carreira Decorativa', description: 'Suba 3 correntes e faça pontos altos em toda a extensão.' },
      { title: 'Padrão de Ondas', description: 'Intercale: 5 pontos altos no mesmo ponto (montanha), pule 2, 1 ponto baixo (vale), pule 2. Repita.' },
      { title: 'Borda de Picô', description: 'Finalize com (1 ponto baixo, 3 correntes, 1 ponto baixíssimo no primeiro) ao longo de toda a borda.' }
    ]
  },
  {
    id: 'pegador-panela',
    categoryId: 'cozinha',
    name: 'Pegador de Panela Duplo',
    difficulty: 'Intermediário',
    description: 'Pegador de panela com duas camadas para proteção térmica, funcional e decorativo.',
    materials: ['Fio de algodão 100% (200g)', 'Agulha 3.5mm'],
    estimatedYarn: '200g',
    hookRecommended: '3.5mm',
    image: '',
    beginnerTip: 'Use APENAS fio de algodão 100%. Fios sintéticos derretem com calor e podem queimar a mão.',
    tags: ['cozinha', 'pegador', 'funcional', 'proteção'],
    estimatedTime: '3-4 horas',
    stitchesUsed: ['corr', 'pb', 'pa'],
    steps: [
      { title: 'Face A — Círculo Denso', description: 'Anel mágico, 6 pontos baixos. Aumente até 18cm de diâmetro com ponto baixo apertado.' },
      { title: 'Face B — Idêntica', description: 'Repita o mesmo círculo para ter 2 discos iguais.' },
      { title: 'Alça', description: 'Faça uma corrente de 15 e trabalhe 3 carreiras de ponto baixo. Será a alça de pendurar.' },
      { title: 'União', description: 'Junte os dois discos face a face e costure ao redor com ponto baixíssimo, inserindo a alça.' },
      { title: 'Borda Decorativa', description: 'Faça uma carreira de ponto caranguejo ao redor para dar acabamento e segurar as duas camadas.' }
    ]
  },
  {
    id: 'capa-galao',
    categoryId: 'cozinha',
    name: 'Capa para Galão de Água',
    difficulty: 'Intermediário',
    description: 'Capa decorativa para galão de água de 20L, com abertura para torneira e alças.',
    materials: ['Barbante número 6 (500g)', 'Agulha 4.0mm', 'Elástico largo 3cm'],
    estimatedYarn: '500g',
    hookRecommended: '4.0mm',
    image: '',
    beginnerTip: 'Meça seu galão antes! Diferentes marcas têm diâmetros ligeiramente diferentes.',
    tags: ['cozinha', 'galão', 'capa', 'decorativo', 'funcional'],
    estimatedTime: '8-10 horas',
    stitchesUsed: ['corr', 'pa', 'pb'],
    steps: [
      { title: 'Topo Circular', description: 'Faça um círculo de ponto alto até atingir o diâmetro do topo do galão (aprox. 28cm).' },
      { title: 'Corpo Cilíndrico', description: 'Pare de aumentar e continue em carreiras retas por 35-40cm para cobrir o corpo do galão.' },
      { title: 'Abertura da Torneira', description: 'Na altura da torneira, deixe uma abertura de 10cm fazendo ida e volta em vez de espiral.' },
      { title: 'Parte Inferior', description: 'Continue até a base. Faça diminuições leves para acompanhar a curvatura do galão.' },
      { title: 'Elástico na Base', description: 'Faça uma bainha na última carreira passando o elástico para fixar a capa no galão.' },
      { title: 'Decoração', description: 'Adicione flores, laços ou bordados em crochê para personalizar a capa.' }
    ]
  },
];

export const ALL_TAGS: string[] = [...new Set(PROJECTS.flatMap(p => p.tags))].sort();

export const STITCHES: Stitch[] = [
  {
    id: 'corr',
    name: 'Correntinha',
    abbr: 'corr',
    description: 'O início de tudo.',
    steps: ['Puxar o fio por dentro da laçada inicial.']
  },
  {
    id: 'pb',
    name: 'Ponto Baixo',
    abbr: 'pb',
    description: 'Ponto curto e básico.',
    steps: ['Inserir, laçar, puxar (2 alças), laçar, puxar tudo.']
  },
  {
    id: 'pa',
    name: 'Ponto Alto',
    abbr: 'pa',
    description: 'Ponto médio para crescer o trabalho.',
    steps: ['Laçar, inserir, laçar, puxar (3 alças), laçar, puxar 2, laçar, puxar 2.']
  }
];

export const COLOR_PALETTES = [
  { name: 'Cores Neutras', colors: ['#EAE2B7', '#FCBF49', '#F77F00', '#D62828'] },
  { name: 'Pastel Relax', colors: ['#B5EAD7', '#E2F0CB', '#FFDAC1', '#FFB7B2'] },
  { name: 'Contrastes', colors: ['#003049', '#D62828', '#F77F00', '#FCBF49'] }
];
