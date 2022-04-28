# Especificação de Caso de Uso: <Notificar Matchs>

 ## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 28/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando especificação do caso de uso | 1.0    |

## 1 Breve Descrição
<div style="text-align: justify">
Caso de uso que engloba o fluxo de atividades relativas à troca de mensagens, em que o usuário passou pela avaliação de usuários, efetuou um like, recebeu uma notificação de match, tem o match listado e deseja realizar uma troca de mensagens com um ou mais matchs. 
</div>


## 2 Atores

### 2.1   Clientes
   <div style="text-align: justify">
   2.1.1  Donos de pets que buscam proporcionar momentos de diversão e lazer aos seus amigos de 4 patas por meio de interações com outros animais. Com isso, ele deseja realizar um bate-papo com os usuários, individualmente com cada um, que correspoenderam ao like e formaram um match.
   </div>

## 3 Condições Prévias

Usuário fez login, cadastrou seu pet, avaliou os perfis, recebeu a notificação de match, acessou a lista de matchs.
  
## 4 Fluxo Básico de Eventos (FB)

<div style="text-align: justify">

1. Este caso de uso se inicia quando o usuário deseja trocar mensagens com usuários que deram match (RN01).
2. O sistema verifica se o usuário ao qual é desejado que receba uma mensagem está presenta na lista de matches (RN02)(FE01).
3. Caso afirmativo, o sistema libera a ação de troca de mensagens.
4. O usuário manda uma mensagem.
5. O sistema valida a mensagem e o entrega ao usuário enviado.
6. O usuário recebe a mensagem enviada.
7. O usuário que recebeu a mensagem, lê e envia uma resposta a mensagem.
8. O sistema valida a mensagem e o entrega ao usuário enviado.
9. O usuário recebe a mensagem enviada.
10. O caso de uso é encerrado.

</div>

## 5 Fluxo Alternativo (FA)

<div style="text-align: justify">

Não se aplica.

</div>
  
## 6 Fluxo Exceção(FE)

### 6.1 FE01 - FE01 Não houve nenhum like mútuo encontrado
<div style="text-align: justify">
No passo 4.2 do fluxo básico, caso o cliente tenha efetuado likes sem que nenhum deles tenha sido correspondido, o sistema verifica que a lista de likes dos usuários de interesse não possuem o perfil do usuário interessado e não pode prosseguir com o fluxo básico. Desta forma, ele fornece uma mensagem dizendo: "Nenhum match foi encontrado". E, o caso de uso segue para o passo 4.10 do fluxo básico.
</div> 

### 6.2 FE02 - O usuário perdeu a conexão durante o bate-papo
<div style="text-align: justify">
No passo 4.5 e 4.8 do fluxo básico, caso o usuário que está enviando mensagem fique sem conexão com wifi ou dados móveis, o sistema encontrará um erro ao enviar a mensagem e vai retornar a mensagem "Não foi possível enviar a mensagem". E, o caso de uso segue para o passo 4.10 do fluxo básico.
</div>
  
## 7 Regra de Negócio (RN)
### 7.1 RN01 - Ocorrência prévia do like é necessária
<div style="text-align: justify">
No passo 4.1 do fluxo básico, faz necessário que o usuários tenha realizado algum like.
</div>

### 7.2 RN02 - Ocorreência de match é necessário
<div style="text-align: justify">
No passo 4.2 do fluxo básico, faz necessário a confirmação de que o usuário correspondeu ao like do usuário.
</div>
  
## 8 Pós-condições
<div style="text-align: justify">
Para FB: atualizações periódicas de mensagens encontrados.
</div>
  
## 9 Ponto de Extensão
Não se aplica.
