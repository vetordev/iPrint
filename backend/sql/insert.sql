USE `iprint`;

INSERT INTO `tb_fisica` VALUES (1, 'vitor@gov', 'e10adc3949ba59abbe56e057f20f883e', '2003-06-12', '952316039', '', 'vitasso', '48302352845', '');
INSERT INTO `tb_endereco` VALUES ('06763270' , 'Avenida Doutor José Maciel', 'Jardim Maria Rosa', 'Taboão da Serra', 'SP');
INSERT INTO `tb_clienteEnd`(id_pf, cep, numero_clienteEnd) VALUES (1, '06763270', 33);


/*10:11:55	INSERT INTO `tb_clienteEnd` VALUES (1, 1, 06763270, '', 33, '')	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`iprint`.`tb_clienteend`, CONSTRAINT `fk_cep` FOREIGN KEY (`cep`) REFERENCES `tb_endereco` (`cep`) ON DELETE CASCADE ON UPDATE CASCADE)	0.047 sec