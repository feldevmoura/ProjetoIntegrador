CREATE TABLE produto(
id INT AUTO_INCREMENT PRIMARY KEY,
descricao VARCHAR(200),
nome VARCHAR (50),
cor VARCHAR(20),
preco DECIMAL(7,2) NOT NULL,
url VARCHAR(150)
);

 CREATE TABLE usuario (
 id              INT AUTO_INCREMENT PRIMARY KEY,
 nome            VARCHAR(50) NOT NULL,
 email           VARCHAR(100) NOT NULL UNIQUE,
 senha           VARCHAR(25) NOT NULL, 
 genero          VARCHAR(50),
 celular         VARCHAR(20) NOT NULL,
 telefone        VARCHAR(20),
 cpf             VARCHAR(20) NOT NULL,
 data_nascimento DATE NOT NULL,
 endereco_id int
 );
 
CREATE TABLE endereco(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
cep INT NOT NULL,
rua VARCHAR(50),
numero INT NOT NULL,
complemento VARCHAR(50),
referencia VARCHAR(100),
bairro VARCHAR(100),
cidade VARCHAR(50) NOT NULL,
estado VARCHAR(50),
usuario_id int
);

 ALTER TABLE usuario
 ADD CONSTRAINT endereco_id foreign key (endereco_id) references endereco(id)
 ON DELETE CASCADE
 ON UPDATE CASCADE;

INSERT INTO produto (descricao, nome, cor, preco, url)
VALUES ('Smartphone Samsung Galaxy S22 Ultra 256GB 5G - 12GB RAM 6,8 Câm. Quádrupla + Selfie 40MP','Samsung Galaxy S22 Ultra', 'Vinho', 8550.00, '/images/phones/samsung/Ultra/Vinho/FrontBack.png'),
       ('Smartphone Samsung Galaxy S22 Ultra 256GB 5G - 12GB RAM 6,8 Câm. Quádrupla + Selfie 40MP','Samsung Galaxy S22 Ultra', 'Branco', 8550.00, '/images/phones/samsung/Ultra/Branco/FrontBack.png'),
       ('Smartphone Samsung Galaxy S22 Ultra 256GB 5G - 12GB RAM 6,8 Câm. Quádrupla + Selfie 40MP','Samsung Galaxy S22 Ultra', 'Preto', 8550.00, '/images/phones/samsung/Ultra/Preto/FrontBack.png'),
       ('Smartphone Samsung Galaxy S22 Ultra 256GB 5G - 12GB RAM 6,8 Câm. Quádrupla + Selfie 40MP','Samsung Galaxy S22 Ultra', 'Azul', 8550.00, '/images/phones/samsung/Ultra/Azul/FrontBack.png'),
       ('Smartphone Samsung Galaxy S22+ 128GB - 8GB RAM Tela 6,6” Câm. Tripla + Selfie 10MP','Samsung Galaxy S22 Plus', 'Preto', 6299.10, '/images/phones/samsung/Plus/Preto/FrontBack.webp'),
	   ('Smartphone Samsung Galaxy S22 128GB 5G - 8GB RAM Tela 6,1” Câm. Tripla + Selfie 10MP','Samsung Galaxy S22 5G', 'Preto', 5399.10, '/images/phones/samsung/FrontBack.webp'),
	   ('Apple iPhone 13 Pro Max 256GB - Tela 6,7” 12MP iOS','Iphone 13 Pro max', 'Preto', 8598.07, '/images/phones/apple/ProMax/Preto/FrontBack.webp'),
	   ('Apple iPhone 13 Pro 256GB 6,1','Iphone 13 Pro', 'Preto', 7998.82, '/images/phones/apple/Pro/Preto/FrontBack.webp'),
	   ('Apple Smartphone iPhone 13 Mini 6gb/256gb 5.4','Iphone 13 Mini', 'Preto', 5219.00, '/images/phones/apple/Mini/Preto/FrontBack.png'),
       ('Apple Smartphone iPhone 13 Mini 6gb/256gb 5.4','Iphone 13 Mini', 'Branco', 5219.00, '/images/phones/apple/Mini/Branco/FrontBack.png'),
       ('Apple Smartphone iPhone 13 Mini 6gb/256gb 5.4','Iphone 13 Mini', 'Rosa', 5219.00, '/images/phones/apple/Mini/Rosa/FrontBack.png'),
       ('Apple Smartphone iPhone 13 Mini 6gb/256gb 5.4','Iphone 13 Mini', 'Azul', 5219.00, '/images/phones/apple/Mini/Azul/FrontBack.png'),
	   ('Motorola Edge 30 Pro 256GB Azul - 5G 12GB RAM 6,7','Motorola Edge 30 Pro', 'Azul', 5399.10, '/images/phones/motorola/MotorolaEdge30Pro/FrontBack.webp'),
	   ('Motorola Edge 20 Pro 256GB 5G - 12GB RAM Tela 6,7','Motorola Edge 20 Pro', 'Azul', 3599.10, '/images/phones/motorola/MotorolaEdge20Pro/FrontBack.webp'),
	   ('Motorola Edge 30 256GB 5G - Octa-Core 8GB RAM 6,5','Motorola Edge 5G', 'Azul', 3149.10, '/images/phones/motorola/MotorolaEdge30/FrontBack.webp'),
	   ('Mi 11 Midnight Gray Xiaomi, com Tela de 6,81, 5G, 256GB e Câmera Tripla de 108MP + 13MP + 5MP - CX318CIN','Xiaomi MI 11 5G', 'Cinza', 9199.99, '/images/phones/xiaomi/XiaomiMi11/FrontBack.jpg'),
	   ('Xiaomi 12 5g / Dual Sim / Tela 6.28 / 8gb Ram / 256gb Armazenamento / Versão Global','Xiaomi 12 256GB', 'Cinza', 8739.99, '/images/phones/xiaomi/Xiaomi12/FrontBack.webp'),
	   ('Xiaomi redmi note 11 pro 128/6gb tela 6.67 5g dual sim','Xiaomi Redmi Note 11 Pro 5G', 'Cinza', 3679.99, '/images/phones/xiaomi/XiaomiRedmiNote11/FrontBack.webp'),
       ('Suporte de Mesa para Celular Ajustável Articulado Tablet Smartphone','Suporte de Mesa', 'Preto', 21.00, '/images/acessorios/acessorio1Suporte-5.png'),
       ('SAMSUNG Fone de Ouvido Wireless Galaxy Buds Pro','Samsung Fone de Ouvido', 'Preto', 747.11, '/images/acessorios/acessorio2Buds-5.png'),
       ('Capa Protetora Galaxy S22 Ultra Smart Clear View','Capa Protetora Galaxy S22 Ultra', 'Preto', 323.10, '/images/acessorios/acesorio3Case-5.png'),
       ('Carregador Rápido Sem Fio Slim','Carregador sem fio Slim', 'Preto', 229.00, '/images/acessorios/acessorio4Charger-5.png'),
       ('Carregador Rápido Sem Fio Slim','Capa de Silicone Iphone 13 Mini', 'Preto', 179.10, '/images/acessorios/acessorio5CaseIphone-5.png');

CREATE TABLE pedido(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
numeroPedido INT NOT NULL,
usuario_id INT NOT NULL,
produto_quantidade INT NOT NULL,
produto_id INT NOT NULL,
acessorio_produto_id INT,
acessorio_quantidade INT
);

CREATE TABLE carrinho (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
usuario_id INT NOT NULL,
produto_id INT,
produto_quantidade INT,
acessorio_produto_id INT,
acessorio_quantidade INT
);

CREATE TABLE acessorios (
id INT PRIMARY KEY AUTO_INCREMENT,
carrinhoId INT ,
usuarioId INT ,
acessorioId INT,
quantidadeAcessorio INT
);

INSERT INTO `phone-9`.`carrinho` (`id`,`usuario_id`, `produto_id`, `produto_quantidade`, `acessorio_produto_id`, `acessorio_quantidade`) 
VALUES (1,1, 1, 1, 19, 1);

UPDATE carrinho SET acessorio_produto_id = 20, acessorio_quantidade = 1 WHERE id = 4;
UPDATE `phone-9`.`carrinho` SET `acessorio_quantidade` = null WHERE (`id` = '1');
UPDATE produto SET preco = 8550.10 WHERE id = 1;

INSERT INTO `phone-9`.`carrinho` (`usuario_id`, `acessorio_produto_id`, `acessorio_quantidade`) 
VALUES (4, 19, 1);
