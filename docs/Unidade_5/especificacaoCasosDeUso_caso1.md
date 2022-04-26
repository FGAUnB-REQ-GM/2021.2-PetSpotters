# Especificação de Caso de Uso: <Acessar a plataforma>

## Histório da Revisão

|Data|Versão|Descrição|Autores|
|----|------|---------|-------|
|26/04/22|<1.0>|Criação do Documento|[Levi Queiroz](https://github.com/LeviQ27)|

## 1. Breve Descrição
<div style="text-align: justify">

Neste caso de uso será demonstrado o momento em que o cliente ou usuário acessa a plataforma app para fazer algumas ação, sendo assim, vai ser dito sobre o cadastro do cliente na plataforma, a solicitação de login e a redefinição de senha.

</div>

## 2. Fluxo Básico de Eventos
<div style="text-align: justify">

O usuário baixa o aplicativo e o acessa. O sistema mostra na interface as opçẽs de login e cadastro. O usuário clica em cadastrar. O sistema apresenta inputs e botôes necessários para realizar o cadastro. O usuário insere suas informações e clica em cadastrar. O sistema guarda suas informações e o volta para a tela de cadastro e login. O usuário clica em fazer login. O sistema apresenta os inputs e botôes necessários para fazer o login. O usuário insere suas informações e clica em entrar. O sistema valida as informações e trafega para a tela inicial do app. 

</div>

## 3. Fluxos Alternativos

### 3.1 Login
<A1 - Erro ao fazer login sem ter cadastro>
<div style="text-align: justify">

O usuário baixa o aplicativo e o acessa. O sistema mostra na interface as opções de login e cadastro. O usuário clica em login. O sistema apresenta inputs e botões necessários para realizar o login. O usuário insere as informações e clica em entrar. O sistema encontra erro ao validar pois não tem cadastro e retorna o erro para o usuário.

</div>
<A2 - Erro ao fazer login errando a senha>