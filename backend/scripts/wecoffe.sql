select * from usuarios 
select * from chefes
select * from cardapios

create table usuarios (
    id_usuario serial primary key, 
    nome_usuario varchar(50) not null,
    email_usuario varchar(50) not null unique,
    senha_usuario varchar(100) not null,
    tipo varchar(50) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_cardapio serial
)

create table cardapios (
    id_cardapio serial primary key,
    id_usuario serial,
    bebida_cardapio varchar(60),
    comida_cardapio varchar(60),
)