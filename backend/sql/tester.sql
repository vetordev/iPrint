insert into tb_fisica values ('',  "vitor13m2003@gmail.com", 'e10adc3949ba59abbe56e057f20f883e', '45646', '456', '54654', 'Vitor da Silva', '4545', '' );
insert into tb_juridica values ('', 'heyvitoria.lopes@gmail.com', '', 'Vitoria', '', '', 'Loja Vitorias', '', '', '', '' );
insert into tb_endereco values('06763270', 'Avenida Doutor José Maciel', 'Jardim Maria Rosa', 'Taboão da Serra', 'SP');
SELECT * FROM tb_endereco;
SELECT * FROM tb_fisica;
SELECT * FROM tb_clienteend;
SELECT * FROM tb_juridica;

SELECT `CEP` FROM `TB_ENDEREÇO` WHERE `CEP` = '06763270';
SELECT ID_pf FROM TB_FISICA WHERE EMAIL_PF = 'vito@vito.com' AND SENHA_PF = 'b1b26a61361b82f9dcdd';

DELETE FROM `tb_clienteend` WHERE `id_clienteEnd` = 8;
DELETE FROM `tb_fisica` WHERE `id_pf` = 6;



DESC tb_clienteend;
UPDATE `tb_fisica` SET `nome_pf` = 'vitor', `senha_pf` = 'e10adc3949ba59abbe56e057f20f883e', `ddn_pf` = '2002-03-12', `telefone_pf` = '40028922' WHERE `id_pf` = 1;
UPDATE `tb_juridica` SET `nomeFant_pj` = 'raioto', `nomeResp_pj` = 'vitorio', `telCel_pj` = '40028922', `telResid_pj` = '40028922', `telComerc_pj` = '40028922' WHERE `id_pj` = 3;