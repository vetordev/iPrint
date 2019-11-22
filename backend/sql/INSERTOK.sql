use iprint;

insert into tb_endereco value('1','Apartamento','jd. vista alegre','embu das artes','sp');
insert into tb_endereco value('2','Casa','jd. tereza','embu das artes','sp');
insert into tb_endereco value('3','Apartamento','jd. amora','taboão da serra','sp');
insert into tb_endereco value('4','casa','jd. vazame','campo limpo','sp');
insert into tb_endereco value('5','condominio','jd. pedreira','pinheirinho','sp');
insert into tb_endereco value('6','casa','jd. mimas','butantã','sp');
insert into tb_endereco value('7','Apartamento','jd. peruibe','taboão da serra','sp');
insert into tb_endereco value('8','Apartamento','jd. maracanã','itapecerica','sp');
insert into tb_endereco value('9','condominio','jd. engenho velho','embu das artes','sp');
insert into tb_endereco value('10','Apartamento','jd. barra nova','pirajussara','sp');

insert into tb_juridica value('1','Empres@Fern','Empresa Fernandinho','11944457165','fern.emp@gmail.com','78587591658472','89489516','ActivaTec','Fernando Oliveira','11945721954','47046997');
insert into tb_juridica value('2','Empresa123','Empresa Carrefour','11944857865','carrefourp@gmail.com','15445191658472','15489516','Carrefour','Jaime Andrade','1191238495','47048495');
insert into tb_juridica value('3','145emp.i','Empresa Lopes','11934812165','lopes@gmail.com','35487591548472','35489916','Lopes','Lucas Fort','11978495162','47048520');
insert into tb_juridica value('4','emptec','Empresa delicia','11974898165','delicia@gmail.com','44487591988472','44489616','Delicius','Mariana Melo','119597218461','47047410');
insert into tb_juridica value('5','empInova','Empresa InovaArt','11454857165','InovaArt@gmail.com','14487591658472','45189516','InovaArt','Pamella Souza','11916902354','47049632');

insert into tb_fisica value('1','jubi.rodrigues14@gmail.com','fale34','2003-05-18','47046880','11944708194','Júlia Oliveira','41014787831','549587612');
insert into tb_fisica value('2','claudio.lima@gmail.com','arvoFr2','1997-06-21','47049958','11948591675','Claudio Lima','45887794581','459863210');
insert into tb_fisica value('3','Beatris.melo@gmail.com','JeviVal','1977-09-20','47047859','11912548956','Beatris Oliveira Melo','26756635816','102320159');
insert into tb_fisica value('4','Erica.leite@gmail.com','LoucoFome','1968-04-14','47041562','11958946781','Erica Leite','56948157569','102365487');
insert into tb_fisica value('5','sss.mandrak@gmail.com','MesLado','1980-06-09','47044587','11915489563','Sergio Souza da Silva','20136594878','954876123');

insert into tb_clienteEnd value('1','1','1',null,'4','Condominio');
insert into tb_clienteEnd value('2','2','2',null,'5','Casa');
insert into tb_clienteEnd value('3',null,'3','3','4','Apartamento');
insert into tb_clienteEnd value('4',null,'4','4','7','Condominio');
insert into tb_clienteEnd value('5','5','5',null,'8','Apartamento');

insert into tb_forn value('1','1','Valeria Silva','val.forn@gmail.com','458719564','15498562345871','4');
insert into tb_forn value('2','2','Jonatas Oliveira','jonatas@gmail.com','741258963','41587296514826','6');
insert into tb_forn value('3','3','Douglas Lopes','dodo.lo@gmail.com','654789321','59481623715482','2');
insert into tb_forn value('4','4','Cleiton Junior','cleiton.junior@gmail.com','456321789','49561849562374','3');
insert into tb_forn value('5','5','Maria de Souza','maria.fornecedora@gmail.com','951753826','15948263571584','9');

insert into tb_prod value('1','2','Impressora Canon','Multifuncional Canon Jato De Tinta Color Pixma Mg2510o','mg2510o','CJUanon','Preta','2013-09-13','130.00','200.00','D:\Etec\Ensino Tecnico\LPOO\Iprint\dados\sql\imagens\c15e3c03023d3836e35d2e42feaff865');
insert into tb_prod value('2','1','Impressora Hp','Multifuncional Laserjet Color HP Pro M180nw','m180nw','Hp','Branca','2016-07-10','880.00','690.05','D:\Etec\Ensino Tecnico\LPOO\Iprint\dados\sql\imagens\images');
insert into tb_prod value('3','4','Impressora Epson','Multifuncional Epson Ecotank L396 Wi-Fi','l396','Epson','Preta','2018-10-22','550.00','741.19','D:\Etec\Ensino Tecnico\LPOO\Iprint\dados\sql\imagens\imagens (1)');
insert into tb_prod value('4','3','Impressora Samsung','Impressora Samsung Laser Monocromática Wi-Fi','mono wifi','Samsung','Preta','2015-05-25','180.00','514.71','D:\Etec\Ensino Tecnico\LPOO\Iprint\dados\sql\imagens\sinekdi2nri3n4kij5563jk');
insert into tb_prod value('5','5','Impressora Hp','Impressora Multifuncional HP Deskjet Ink Advantage 2676 Aio','2676 aio','Hp','Branca','2017-10-17','460.00','500.60','D:\Etec\Ensino Tecnico\LPOO\Iprint\dados\sql\imagens\images (2)');

insert into tb_estoq value('1','2','2019-05-04','45','Estoque de Antecipação');
insert into tb_estoq value('2','5','2017-08-04','50','Estoque Consignado');
insert into tb_estoq value('3','1','2019-09-20','75','Estoque de Contingência');
insert into tb_estoq value('4','4','2018-04-30','60','Estoque Inativo');
insert into tb_estoq value('5','3','2019-02-10','85','Estoque Médio');

insert into tb_compra value('1','2019-06-20',null,'3');
insert into tb_compra value('2','2018-05-25','2',null);
insert into tb_compra value('3','2019-04-14',null,'1');
insert into tb_compra value('4','2019-03-30',null,'5');
insert into tb_compra value('5','2019-12-12','5',null);

insert into tb_carrinho value('1','5','3','5');
insert into tb_carrinho value('2','1','1','10');
insert into tb_carrinho value('3','4','4','13');
insert into tb_carrinho value('4','2','2','50');
insert into tb_carrinho value('5','3','5','100');

insert into Wishlist value('1','3','1','4','2019-07-13');
insert into Wishlist value('2', '4', '2', '1', '2019-08-28'); 
insert into Wishlist value('3', '2','4', '2', '2019-07-17'); 
insert into Wishlist value('4','5','5','5','2019-11-18'); 
insert into Wishlist value('5', '1', '3', '3', '2019-12-05');

use iPrint;

CREATE VIEW select_wish AS SELECT 'p.nome', 'p.descricao_prod', 'p.preco_prod', 'p.id_prod', 'w.id_wishlist'
FROM Wishlist w join tb_prod p 
on (w.id_prod = p.id_prod)
and w.id_pj = 3;


INSERT INTO `Wishlist`(`id_prod`, `id_pj`) VALUES ('1','1');

#DELETE FROM `Wishlist` WHERE `id_wishlist` = 1;

select * from Wishlist;