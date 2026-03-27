// Referências visuais reais para cada categoria de projeto.
// Imagens do Pexels (licença Pexels - uso livre, atribuição não obrigatória).
// URL format: https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w=640&fit=max

export interface ReferenceImage {
    url: string;
    alt: string;
    credit?: string;
}

const px = (id: number) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=640&fit=max`;

// Mapa de categoria → lista de imagens de referência
const CATEGORY_IMAGES: Record<string, ReferenceImage[]> = {
    "tapetes-redondos": [
        { url: px(36740524), alt: "Padrão de crochê colorido geométrico", credit: "Pexels" },
        { url: px(6462889), alt: "Camadas de crochê coloridas com textura", credit: "Pexels" },
        { url: px(7585570), alt: "Peça redonda de crochê branco sendo feita", credit: "Pexels" },
        { url: px(7297165), alt: "Círculo de crochê marrom com linha e agulha", credit: "Pexels" },
        { url: px(7177578), alt: "Peça de crochê amarela com agulha", credit: "Pexels" },
        { url: px(36238478), alt: "Mãos fazendo crochê com fio azul", credit: "Pexels" },
    ],
    "tapetes-retangulares": [
        { url: px(6462889), alt: "Texteis de crochê coloridos em camadas", credit: "Pexels" },
        { url: px(36740524), alt: "Padrão geométrico de crochê vermelho e azul", credit: "Pexels" },
        { url: px(4609020), alt: "Crianças brincando sobre tapete de crochê", credit: "Pexels" },
        { url: px(7585231), alt: "Mulher sentada com fios sobre tapete", credit: "Pexels" },
        { url: px(4609011), alt: "Crianças deitadas sobre tapete artesanal", credit: "Pexels" },
        { url: px(7585792), alt: "Artesã fazendo crochê com agulha em casa", credit: "Pexels" },
    ],
    passadeiras: [
        { url: px(6462889), alt: "Tecido de crochê com padrão e textura", credit: "Pexels" },
        { url: px(36740524), alt: "Crochê geométrico colorido", credit: "Pexels" },
        { url: px(7585792), alt: "Tecido de crochê artesanal de perto", credit: "Pexels" },
        { url: px(7585570), alt: "Peça circular de crochê com fio", credit: "Pexels" },
        { url: px(3639038), alt: "Agulhas de crochê variadas coloridas", credit: "Pexels" },
        { url: px(4601228), alt: "Agulha de crochê com fios coloridos", credit: "Pexels" },
    ],
    "porta-copos": [
        { url: px(7177578), alt: "Peça pequena de crochê amarela com agulha", credit: "Pexels" },
        { url: px(7297165), alt: "Círculo de crochê marrom sendo feito", credit: "Pexels" },
        { url: px(7585570), alt: "Crochê redondo branco em progresso", credit: "Pexels" },
        { url: px(3693221), alt: "Fio teal com agulha de crochê", credit: "Pexels" },
        { url: px(3693232), alt: "Detalhe de textura de crochê teal", credit: "Pexels" },
        { url: px(36238478), alt: "Crochê detalhado com fio azul", credit: "Pexels" },
    ],
    "porta-papel": [
        { url: px(7585792), alt: "Artesã com agulha e tecido de crochê", credit: "Pexels" },
        { url: px(3945638), alt: "Agulha de crochê e fio branco", credit: "Pexels" },
        { url: px(7585296), alt: "Pessoa fazendo crochê de perto", credit: "Pexels" },
        { url: px(7585569), alt: "Mãos fazendo crochê com agulha rosa", credit: "Pexels" },
        { url: px(3945634), alt: "Mulher fazendo crochê com fio branco", credit: "Pexels" },
        { url: px(7585268), alt: "Detalhes de crochê artesanal", credit: "Pexels" },
    ],
    bolsas: [
        { url: px(6654139), alt: "Bolsa de crochê marrom com frutas", credit: "Pexels" },
        { url: px(2557040), alt: "Bolsas de crochê bege e rosa", credit: "Pexels" },
        { url: px(2557039), alt: "Bolsas de crochê marrom e roxo", credit: "Pexels" },
        { url: px(2557043), alt: "Flores brancas em bolsa de crochê", credit: "Pexels" },
        { url: px(7262477), alt: "Bolsas de crochê e macramê bege", credit: "Pexels" },
        { url: px(6654123), alt: "Bolsas de crochê penduradas em cabide", credit: "Pexels" },
    ],
    mesa: [
        { url: px(7585570), alt: "Peça redonda de crochê branco", credit: "Pexels" },
        { url: px(6462889), alt: "Texteis de crochê coloridos", credit: "Pexels" },
        { url: px(36740524), alt: "Padrão de crochê geométrico", credit: "Pexels" },
        { url: px(5807027), alt: "Detalhe de tecido de crochê cinza", credit: "Pexels" },
        { url: px(7177578), alt: "Peça de crochê amarela redonda", credit: "Pexels" },
        { url: px(3639038), alt: "Conjunto de agulhas de crochê", credit: "Pexels" },
    ],
    decoracao: [
        { url: px(7262477), alt: "Bolsas e peças de crochê decorativas", credit: "Pexels" },
        { url: px(6654123), alt: "Decoração com bolsas de crochê", credit: "Pexels" },
        { url: px(5807008), alt: "Fios e plantas decorativas", credit: "Pexels" },
        { url: px(4792062), alt: "Fio rosa sobre sofá aconchegante", credit: "Pexels" },
        { url: px(6462889), alt: "Tecidos de crochê coloridos", credit: "Pexels" },
        { url: px(7297165), alt: "Fio e agulha formando círculo", credit: "Pexels" },
    ],
    utilitarios: [
        { url: px(2557043), alt: "Bolsa de crochê com flores", credit: "Pexels" },
        { url: px(3737681), alt: "Sacola de malha branca artesanal", credit: "Pexels" },
        { url: px(6654139), alt: "Bolsa de crochê com frutas amarelas", credit: "Pexels" },
        { url: px(6654128), alt: "Bolsa de crochê com bananas", credit: "Pexels" },
        { url: px(4020563), alt: "Pimentões em bolsa de crochê", credit: "Pexels" },
        { url: px(2557038), alt: "Bolsa de crochê rosa", credit: "Pexels" },
    ],
    infantil: [
        { url: px(4609020), alt: "Crianças deitadas sobre tapete de crochê", credit: "Pexels" },
        { url: px(4609011), alt: "Menino e menina sobre tapete artesanal", credit: "Pexels" },
        { url: px(36364965), alt: "Bolsa azul com brinquedo de crochê", credit: "Pexels" },
        { url: px(7585570), alt: "Crochê redondo branco artesanal", credit: "Pexels" },
        { url: px(4601228), alt: "Fios coloridos para crochê infantil", credit: "Pexels" },
        { url: px(7177578), alt: "Peça de crochê amarela alegre", credit: "Pexels" },
    ],
    cozinha: [
        { url: px(4020563), alt: "Pimentões vermelhos em bolsa de crochê", credit: "Pexels" },
        { url: px(6654139), alt: "Bolsa de crochê com frutas", credit: "Pexels" },
        { url: px(6654128), alt: "Frutas em sacola de crochê artesanal", credit: "Pexels" },
        { url: px(5807008), alt: "Fios com plantas na cozinha", credit: "Pexels" },
        { url: px(7585570), alt: "Crochê redondo para apoio de panela", credit: "Pexels" },
        { url: px(3639038), alt: "Agulhas de crochê coloridas", credit: "Pexels" },
    ],
};

/** Retorna imagens de referência para um projeto, baseado na categoryId */
export function getProjectReferences(categoryId: string, limit = 6): ReferenceImage[] {
    return (CATEGORY_IMAGES[categoryId] || CATEGORY_IMAGES["decoracao"] || []).slice(0, limit);
}

/** Retorna imagens de referência para a Customização (pelo tipo de peça selecionada) */
export function getInspirationImages(categoryId: string, limit = 8): ReferenceImage[] {
    return (CATEGORY_IMAGES[categoryId] || CATEGORY_IMAGES["decoracao"] || []).slice(0, limit);
}
