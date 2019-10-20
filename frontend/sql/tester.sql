insert into tb_fisica values ('',  "vitor13m2003@gmail.co", 'e10adc3949ba59abbe56e057f20f883e', '45646', '456', '54654', 'Vitor da Silva', '4545', '' );
insert into tb_juridica values ('', 'heyvitoria.lopes@gmail.com', '', 'Vitoria', '', '', 'Loja Vitorias', '', '', '', '' );
insert into tb_endereco values('06763270', 'Avenida Doutor José Maciel', 'Jardim Maria Rosa', 'Taboão da Serra', 'SP');
SELECT * FROM tb_endereco;
SELECT * FROM tb_fisica;
SELECT * FROM tb_clienteend;
SELECT * FROM tb_juridica;

SELECT `CEP` FROM `TB_ENDEREÇO` WHERE `CEP` = '06763270';
SELECT ID_pf FROM TB_FISICA WHERE EMAIL_PF = 'vito@vito.com' AND SENHA_PF = 'b1b26a61361b82f9dcdd';


DELETE FROM `tb_fisica` WHERE `id_pf` = 5;