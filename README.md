# IHeros

## BackEnd

O Backend foi desenvolvido com ruby on rails.

A aplicação disponibiliza os endpoints para que o frontend possa consumir.

Autenticação é feita via token JWT.

Dentro do diretório api/v1/controllers optei por criar um um controller chamado api_controller, ele implementa as regras de validação de por token e os controllers users e heros extendem o api_controller e não o application_controller. Criei desta forma pois em caso de ter uma segunda versão da api e se essa segunda versão tiver uma forma diferente de autenticação a versão v1 não seria impactada.


- Ruby: Version - 2.6.3

- Rails: Version 5.2.4

Gem's

- bcrypt - Utilizada para criptografia da senha

- jwt - Geração token autenticação

- rack-cors - Permitir o compartilhamento de recurso

## Executando o Backend

1.  Instalação do Ruby

Para executar o backend é necessário ter o ruby instalado, caso não tenha o ruby instalado a instalação pode ser feita com o gerenciador rvm.

[Clique aqui para ver como instalar o rvm](https://rvm.io/rvm/install)

Após instalar o rvm, instale a versão do ruby

[Como instalar um rubie](https://rvm.io/rubies/installing)


2. Apoś instalar o ruby, faça o clone e pelo terminal navegue até a pasta "challenges/dev/iheros" e execute os seguintes comandos:

```ruby. 
bundle install
```

Para baixar e instalar todas as gems(libs) do projeto

```ruby. 
rake db:create
```

Criar o banco de dados. Para simplificar utilizei o banco sqlite

```ruby. 
rails db:seed
```
Popular o banco de dados com os dados iniciais.

Neste caso vai criar o usuário - email: test@zrp.com.br - password: zrptest

Agora é só rodar
```ruby. 
rails -s -p 3001
```

Rails s - Starta a aplicação e o  -p indica em qual porta a aplicação deve subir (Subir na porta 3001 porque o front esta configurado para rodar na porta 3000).

### Endpoints

Login :[POST] http://localhost:3001/api/v1/login/

```postman
ex payload: {"email": "test@zrp.com.br", "password": "zrptest"}
```

Cadastrar Herói : [POST] http://localhost:3001/api/v1/heros/

```postman
ex payload: {"name":"Homem Codorna", "hero_class": "S", "lat": "23.2136093", "lng": "-45.9096892"}
```

Editar Herói : [PUT] http://localhost:3001/api/v1/heros/{id}

```postman
ex payload: {"name":"Homem Codorna", "hero_class": "S", "lat": "23.2136093", "lng": "-45.9096892"}
```

Deletar Herói : [DELETE] http://localhost:3001/api/v1/heros/{id}

Listar Heróis : [GET] http://localhost:3001/api/v1/heros/

## FrontEnd

O FrontEnd foi criado* utilizando o react

- React: Version - 16.13.1

- Node: Version v12.14.1

Bibliotecas

 - react-router-dom
 - styled-components
 - axios
 
## Executando o frontend

Para rodar o frontend é necessário ter o node instalado

[Clique aqui para ver como instalar o node](https://nodejs.org/en/)

Ou instale o gerenciador nvm

Depois, abra o terminal em uma nova aba e navegue até a pasta "challenges/dev/iheros_client" e execute

```node. 
npm install
```

Depois execute

```node. 
npm start
```

Acesse no browser

```node. 
http://localhost:3000/
```

Página inicial

```node. 
http://localhost:3000/signin
```

Página de login

```node. 
http://localhost:3000/logout
```

Página de logoff

```node. 
http://localhost:3000/register
```

Cadastar Herói (Necessário estar logado)

```node. 
http://localhost:3000/list
```
Listar Heróis (Necessário estar logado)
