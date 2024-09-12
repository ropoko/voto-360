export type ElectoralUnit = Partial<{
	id: number;
	sigla: string;
	nome: string;
	regiao: string;
	cargos: any;
	diretorios: any;
	codigo: string;
	capital: boolean;
	estado: string;
}>;

export type Role = {
	codigo: number;
	sigla: string | null;
	nome: string;
	codSuperior: number;
	titular: boolean;
	contagem: number;
};

export type Party = Partial<{
	numero: number;
	sigla: string;
	nome: string;
	sqPrestadorConta: number;
}>;

export type Election = Partial<{
	id: number;
	siglaUF: string;
	localidadeSgUe: string;
	ano: number;
	codigo: string;
	nomeEleicao: string;
	tipoEleicao: string;
	turno: string;
	tipoAbrangencia: string;
	dataEleicao: string;
	codSituacaoEleicao: number;
	descricaoSituacaoEleicao: string;
	descricaoEleicao: string;
}>;


export type Candidate = Partial<{
	id: number;
	nomeUrna: string;
	numero: number;
	idCandidatoSuperior: number;
	nomeCompleto: string;
	descricaoSexo: string;
	dataDeNascimento: string;
	tituloEleitor: string;
	cpf: string;
	descricaoEstadoCivil: string;
	descricaoCorRaca: string;
	descricaoSituacao: string;
	nacionalidade: string;
	grauInstrucao: string;
	ocupacao: string;
	gastoCampanha1T: number;
	gastoCampanha2T: number;
	sgUfNascimento: string;
	nomeMunicipioNascimento: string;
	localCandidatura: string;
	ufCandidatura: string;
	ufSuperiorCandidatura: string;
	codigoSituacaoCandidatoSuperior: number;
	dataUltimaAtualizacao: string;
	fotoUrl: string;
	fotoUrlPublicavel: boolean;
	fotoDataUltimaAtualizacao: string;
	descricaoTotalizacao: string;
	nomeColigacao: string;
	composicaoColigacao: string;
	descricaoTipoDrap: string;
	numeroProcessoDrap: string;
	numeroProcessoDrapEncrypt: string;
	numeroProcesso: string;
	numeroProcessoEncrypt: string;
	numeroProcessoPrestContas: string;
	numeroProcessoPrestContasEncrypt: string;
	numeroProtocolo: string;
	cargo: Role;
	bens: any;
	totalDeBens: number;
	vices: {
		DT_ULTIMA_ATUALIZACAO: string;
		nomeColigacao: string | null;
		composicaoColigacao: string | null;
		stRegistro: string | null;
		situacaoCandidato: string | null;
		codigoSituacaoCandidatoSuperior: number;
		urlFoto: string;
		urlFotoPublicavel: boolean;
		generoPublicavel: boolean;
		orientacaoSexualPublicavel: boolean;
		sg_UE: string;
		dt_ULTIMA_ATUALIZACAO: number;
		sq_CANDIDATO: number;
		sq_CANDIDATO_SUPERIOR: number | null;
		nr_CANDIDATO: string;
		nm_URNA: string;
		nm_CANDIDATO: string;
		ds_CARGO: string;
		nm_PARTIDO: string;
		sg_PARTIDO: string;
		candidatoApto: boolean;
		sq_ELEICAO: number;
	}[];
	partido: Party;
	eleicao: Election;
	emails: any;
	sites: any;
	arquivos: any;
	eleicoesAnteriores: any;
	substituto: any;
	motivos: any;
	motivoSituacao: string;
	codigoSituacaoCandidato: number;
	descricaoSituacaoCandidato: string;
	isCandidatoInapto: boolean;
	codigoSituacaoPartido: number;
	descricaoSituacaoPartido: string;
	isCandFechado: boolean;
	infoComplementar: string;
	cdSituacaoCassacao: number;
	cdSituacaoDiploma: number;
	legenda: string;
	cnpjcampanha: string;
	gastoCampanha: number;
	st_DIVULGA_BENS: boolean;
	st_DIVULGA_ARQUIVOS: boolean;
	st_SUBSTITUIDO: boolean;
	candidatoApto: boolean;
	descricaoNaturalidade: string;
	st_MOTIVO_FICHA_LIMPA: boolean;
	st_MOTIVO_ABUSO_PODER: boolean;
	st_MOTIVO_COMPRA_VOTO: boolean;
	st_MOTIVO_CONDUTA_VEDADA: boolean;
	st_MOTIVO_GASTO_ILICITO: boolean;
	ds_MOTIVO_OUTROS: string;
	st_MOTIVO_AUSENCIA_REQUISITO: boolean;
	st_MOTIVO_IND_PARTIDO: boolean;
	st_DIVULGA: boolean;
	st_REELEICAO: boolean;
}>;

export type RootObject = {
	unidadeEleitoral: ElectoralUnit;
	cargo: Role;
	candidatos: Candidate[];
};
