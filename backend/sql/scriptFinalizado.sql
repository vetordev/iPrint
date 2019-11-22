drop database if exists iprint;
create database if not exists iprint;
use iprint;

create table tb_endereco(
	cep char(8) primary key ,
    logra_endereco varchar(70),
    bairro_endereco varchar(45),
    cidade_endereco varchar(45),
    uf_endereco varchar(45)
);

create table tb_juridica(
	id_pj int primary key auto_increment,
    email_pj varchar(45),
    senha_pj varchar(100),
    rs_pj varchar(45),
    cnpj_pj varchar(45),
    ie_pj varchar(45),
    nomeFant_pj varchar(45),
    nomeResp_pj varchar(45),
    telComerc_pj varchar(45),
    telResid_pj varchar(45),
    telCel_pj varchar(45),
	UNIQUE (email_pj), UNIQUE (cnpj_pj), UNIQUE (telComerc_pj), UNIQUE (telResid_pj), UNIQUE (telCel_pj)
);

create table tb_fisica(
	id_pf int primary key auto_increment,
    email_pf varchar(45),
    senha_pf varchar(100),
    ddn_pf DATE,
    telefone_pf varchar(13),
    celular_pf varchar(13),
    nome_pf varchar(45),
    cpf_pf varchar(11),
    rg_pf varchar(14),
    UNIQUE (email_pf), UNIQUE (telefone_pf), UNIQUE (celular_pf), UNIQUE (cpf_pf), UNIQUE (rg_pf)
);

create table tb_clienteEnd(
	id_clienteEnd int primary key auto_increment,
    id_pf int null,
    constraint fk_idPF foreign key (id_pf) references tb_fisica (id_pf)
	on update cascade on delete cascade,
    cep char(8),
	constraint fk_cep foreign key (cep) references tb_endereco (cep)
    on update cascade on delete cascade,
    id_pj int null,
	constraint fk_idPJ foreign key (id_pj) references tb_juridica (id_pj)
	on update cascade on delete cascade,
    numero_clienteEnd varchar(10),
    comp_endereco varchar(15)
);

create table tb_forn(
	id_forn int primary key auto_increment,
	cep char(8),
	constraint fk_CepForn foreign key (cep) references tb_endereco (cep)
	on update cascade on delete cascade,
    nome_forn varchar(45),
    email_forn varchar(45),
    ie_forn varchar(45),
    cnpj_forn varchar(45),
    numero_forn varchar(45),
    UNIQUE (email_forn), UNIQUE (cnpj_forn), UNIQUE (ie_forn)
);

create table tb_prod(
	id_prod int primary key auto_increment,
	id_forn int,
	constraint fk_ProdForn foreign key (id_forn) references tb_forn (id_forn)
	on update cascade on delete cascade,
    nome varchar(100),
    descricao_prod varchar(100),
    modelo_prod varchar(100),
    marca_prod varchar(100),
    cor_prod varchar(100),
    ultAtt_prod varchar(100),
    saldo_prod varchar(100),
    preco_prod varchar(100),
    imagem blob
);

create table tb_estoq(
	id_estoq int primary key auto_increment,
    	id_prod int,
    	constraint fk_EstoqProd foreign key (id_prod) references tb_prod (id_prod)
    	on update cascade on delete cascade,
    data_estoq date,
    quantidade_estoq int,
    tipoMov_estoq varchar(45)
);

create table tb_compra(
	id_compra int primary key auto_increment,
	data_compra date,
		id_pj int,
    		constraint fk_compraPJ foreign key (id_pj) references tb_juridica (id_pj)
    		on update cascade on delete cascade,
		id_pf int,
    		constraint fk_compraPF foreign key (id_pf) references tb_fisica (id_pf)
    		on update cascade on delete cascade
);
create table tb_carrinho(
	id_carrinho int primary key auto_increment,
		id_prod int,
    		constraint fk_EstoqiProd foreign key (id_prod) references tb_prod (id_prod)
    		on update cascade on delete cascade,
		id_compra int,
    		constraint fk_compra foreign key (id_compra) references tb_compra (id_compra)
    		on update cascade on delete cascade,
	quantidade_carrinho varchar(3)
);

create table  Wishlist(
	id_wishlist int primary key auto_increment,
    id_prod int, 
		constraint fk_prodwish foreign key (id_prod) references tb_prod (id_prod)
		on update cascade on delete cascade,
	id_pj int,
		constraint fk_wishPJ foreign key (id_pj) references tb_juridica (id_pj)
		on update cascade on delete cascade,
	id_pf int,
		constraint fk_wishPF foreign key (id_pf) references tb_fisica (id_pf)
        on update cascade on delete cascade,
	data_inicial date
    
);




SET SQL_SAFE_UPDATES = 0;
SET SQL_SAFE_UPDATES = 0;