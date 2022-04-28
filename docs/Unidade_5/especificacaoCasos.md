# Especificação de Casos de Uso

## Especificação de caso de Uso - Avaliar outro Perfil

### Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 26/04/2022 | [art1505](https://github.com/art1505) | Adicionando especificação do caso de uso | 1.0    |
| 27/04/2022 | [art1505](https://github.com/art1505) | Adicionando especificação do caso de uso | 1.1    |

### 1 Breve Descrição
Caso de uso que engloba o fluxo de atividades relativas à avaliação, por parte do cliente, de perfis de outros usuários da plataforma. Tal avaliação se dá através de "likes" e "deslikes" a outros perfis, e finaliza com a validação e armazenamento, por parte do sistema, das opções escolhidas.

### 2 Atores

### 2.1   Clientes
   
   2.1.1  Donos de pets que buscam proporcionar momentos de diversão e lazer aos seus amigos de 4 patas por meio de interações com outros animais.

### 3 Condições Prévias

Usuário fez login e cadastrou seu pet.
   
### 4 Fluxo Básico de Eventos

1. Este caso de uso se inicia quando o cliente deseja avaliar outro perfil.
2. O sistema oferece um perfil por vez.
3. O cliente seleciona a opção de avaliação (RN01).
4. O sistema faz a validação da opção escolhida(FE01). 
5. O sistema armazena a avaliação realizada.
6. O sistema oferece um novo perfil para avaliação.
7. O caso de uso é encerrado.
    
### 5 Fluxo Exceção(FE)
### 5.1 FE01 - O cliente não seleciona uma opção de avaliação
No passo 4.4 do fluxo básico, caso o cliente tente passar o perfil sem que haja a escolha de uma opção de avaliação, o sistema não poderá fazer a validação e, futuramente, o armazenamento da avaliação. Desta forma, ele fornece uma mensagem dizendo: "Nenhuma opção foi marcada". E, o caso de uso retorna ao passo 4.3 do fluxo básico.

### 6 Regra de Negócio (RN)
### 6.1 RN01 - Opção de avaliação necessária
No passo 4.3 do fluxo básico, se faz necessário que as opções de avaliação "like" ou "deslike" sejam marcadas.

### 7 Pós-condições
Para FB: registro, pelo sistema, da lista de avaliações e atualizações periódicas.

### 8 Ponto de Extensão
Não se aplica.

## Especificação de Caso de Uso: <Lista de matchs>

### Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 26/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando especificação do caso de uso | 1.0    |
| 27/04/2022 | [art1505](https://github.com/art1505) | Adicionando especificação do caso de uso | 1.1    |
| 28/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando fluxo alternativo, FE03 do fluxo de exceção e justificando textos | 1.2    |

### 1 Breve Descrição
<div style="text-align: justify">
Caso de uso que engloba o fluxo de atividades relativas à consulta, por parte do sistema, da lista de matches realizados pelo usuário. Tal lista é obtida através da consulta de "likes" efetuados, a verificação de likes em comum e a posterior listagem destes likes mútuos. 
</div>


### 2 Atores

### 2.1   Clientes
   <div style="text-align: justify">
   2.1.1  Donos de pets que buscam proporcionar momentos de diversão e lazer aos seus amigos de 4 patas por meio de interações com outros animais. E para isso, desejam visualizar como quais usuários o interesse pelo perfil se deu de forma mútua.
   </div>

### 3 Condições Prévias

Usuário fez login e cadastrou seu pet.
  
### 4 Fluxo Básico de Eventos (FB)

<div style="text-align: justify">

1. Este caso de uso se inicia quando o usuário deseja visualizar a lista de matches(FA01).
2. O sistema verifica a lista de likes do usuário (RN01)(FE01).
3. O sistema verifica se o usuário está presente na lista de likes dos usuários os quais ele deu like (FE02).
4. Em caso afirmativo, o sistema cria uma lista só com as correspondências de likes deste usuário. 
5. O sistema fornece uma tela para o usuário com esta lista.
6. O caso de uso é encerrado.

</div>

### 5 Fluxo Alternativo (FA)

### 5.1 FA01 - Busca específica
<div style="text-align: justify">

No passo 4.5 do fluxo básico, o leitor deseja fazer uma busca específica na lista de matchs.

1. O usuário deseja fazer uma pesquisa de match específico.
2. O sistema solicita o nome do match específico buscado.
3. O sistema verifica se o usuário está presente na lista de likes deste usuário (FE03).
4. Caso afirmativo, o sistema apresenta o match buscado por este usuário.
5. O caso de uso segue para o passo 4.6 do fluxo básico.

</div>
  
### 6 Fluxo Exceção(FE)

### 6.1 FE01 - Nenhum like foi realizado ainda

<div style="text-align: justify">
No passo 4.2 do fluxo básico, caso o cliente busque obter uma lista de matches sem ter efetuado um like sequer, o sistema verifica que a lista de likes está vazia e não pode então prosseguir com o fluxo básico. Desta forma, ele fornece uma mensagem dizendo: "Nenhum like foi efetuado". E, o caso de uso segue para o passo 4.6 do fluxo básico.
</div>

### 6.2 FE02 - Não houve nenhum like mútuo encontrado
<div style="text-align: justify">
No passo 4.3 do fluxo básico, caso o cliente tenha efetuado likes sem que nenhum deles tenha sido correspondido, o sistema verifica que a lista de likes dos usuários de interesse não possuem o perfil do usuário interessado e não pode prosseguir com o fluxo básico. Desta forma, ele fornece uma mensagem dizendo: "Nenhum match foi encontrado". E, o caso de uso segue para o passo 4.6 do fluxo básico.
</div> 

### 6.3 FE03 - No match específico não existe na lista
<div style="text-align: justify">
No passo 5.1.3 do fluxo alternativo, caso o cliente busca achar um match específico que ou não existe ou não correspondeu ao like que o cliente realizou, o sistema não encontra o usuário e não pode prosseguir com o fluxo alternativo. O sistema retorna a mensagem: "Match não foi encontrado" e o caso de uso segue para o passo 4.6 do fluxo básico.
</div>
  
### 7 Regra de Negócio (RN)
### 7.1 RN01 - Ocorrência prévia do like é necessária
<div style="text-align: justify">
No passo 4.2 do fluxo básico, se faz necessário que pelo menos um like tenha sido efetuado pelo usuário.
</div>
  
### 8 Pós-condições
<div style="text-align: justify">
Para FB: atualizações periódicas da lista de matches encontrados.

Para FA: atualizações periódicas da busca de matches específicos encontrados.
</div>
  
### 9 Ponto de Extensão
Não se aplica.

## Especificação de Caso de Uso: <Notificar Matchs>

### Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 28/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando especificação do caso de uso | 1.0    |
| 28/04/2022 | [art1505](https://github.com/art1505) | Adicionando especificação do caso de uso | 1.1    |
| 28/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando letras e corrigindo erros ortográficos | 1.2    |

### 1 Breve Descrição
<div style="text-align: justify">
Caso de uso que engloba o fluxo de atividades relativas à notificação, pelo sistema, de "likes" correspondidos pelos perfis de interesse.
</div>


### 2 Atores

### 2.1   Clientes
   <div style="text-align: justify">
   2.1.1  Donos de pets que buscam proporcionar momentos de diversão e lazer aos seus amigos de 4 patas por meio de interações com outros animais. E com isso, também avalia possíveis usuários, efetua likes e aguarda uma notificação que o match foi correspondido.
   </div>

### 3 Condições Prévias

Usuário fez login, cadastrou seu pet e passou pela avaliação de perfis.
  
### 4 Fluxo Básico de Eventos (FB)

<div style="text-align: justify">

1. Este caso de uso se inicia quando o usuário efetua um like em um ou mais usuários (RN01)(FE01).
2. O sistema valida a ação.
3. O sistema envia uma notificação ao usuário que recebeu o like.
4. Em caso de correspondência, o sistema valida a ação de like do usuário que correspondeu ao interesse (FE02).
5. O sistema retorna uma notificação para o usuário que efetuou o primeiro like.
6. O caso de uso é encerrado.

</div>

### 5 Fluxo Alternativo (FA)

<div style="text-align: justify">

Não se aplica.

</div>
  
### 6 Fluxo Exceção(FE)
 
### 6.1 FE01 - O usuário não efetua nenhum like antes de solicitar a ação do sistema
<div style="text-align: justify">
No passo 4.1 do fluxo básico, caso o primeiro usuário não efetuado nenhum like, o sistema não retorna a notificação para o usuário que efetuou o like. E, o caso de uso segue para o passo 4.6.
</div>

### 6.2 FE02 - O usuário não corresponde ao like efetuado
<div style="text-align: justify">
No passo 4.4 do fluxo básico, caso o usuário ao qual foi efetuado o like não corresponde à ação, o sistema retorna a mensagem: "Nenhum like foi realizado". E, o caso de uso segue para o passo 4.6.
</div>
  
### 7 Regra de Negócio (RN)
### 7.1 RN01 - Ocorrência prévia do like é necessária
<div style="text-align: justify">
No passo 4.1 do fluxo básico, faz-se necessário que o usuário tenha efetuado ao menos um like para que o fluxo básico prossiga.
</div>
  
### 8 Pós-condições
<div style="text-align: justify">
Para FB: atualizações periódicas de notificações encontradas.
</div>
  
### 9 Ponto de Extensão
Notificar matches é um ponto de extensão do caso de uso "Avaliar outro Perfil".

## Especificação de Caso de Uso: <Notificar Matchs>

### Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 28/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando especificação do caso de uso | 1.0    |

### 1 Breve Descrição
<div style="text-align: justify">
Caso de uso que engloba o fluxo de atividades relativas à troca de mensagens, em que o usuário passou pela avaliação de usuários, efetuou um like, recebeu uma notificação de match, tem o match listado e deseja realizar uma troca de mensagens com um ou mais matchs. 
</div>


### 2 Atores

### 2.1   Clientes
   <div style="text-align: justify">
   2.1.1  Donos de pets que buscam proporcionar momentos de diversão e lazer aos seus amigos de 4 patas por meio de interações com outros animais. Com isso, ele deseja realizar um bate-papo com os usuários, individualmente com cada um, que correspoenderam ao like e formaram um match.
   </div>

### 3 Condições Prévias

Usuário fez login, cadastrou seu pet, avaliou os perfis, recebeu a notificação de match, acessou a lista de matchs.
  
### 4 Fluxo Básico de Eventos (FB)

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

### 5 Fluxo Alternativo (FA)

<div style="text-align: justify">

Não se aplica.

</div>
  
### 6 Fluxo Exceção(FE)

### 6.1 FE01 - FE01 Não houve nenhum like mútuo encontrado
<div style="text-align: justify">
No passo 4.2 do fluxo básico, caso o cliente tenha efetuado likes sem que nenhum deles tenha sido correspondido, o sistema verifica que a lista de likes dos usuários de interesse não possuem o perfil do usuário interessado e não pode prosseguir com o fluxo básico. Desta forma, ele fornece uma mensagem dizendo: "Nenhum match foi encontrado". E, o caso de uso segue para o passo 4.10 do fluxo básico.
</div> 

### 6.2 FE02 - O usuário perdeu a conexão durante o bate-papo
<div style="text-align: justify">
No passo 4.5 e 4.8 do fluxo básico, caso o usuário que está enviando mensagem fique sem conexão com wifi ou dados móveis, o sistema encontrará um erro ao enviar a mensagem e vai retornar a mensagem "Não foi possível enviar a mensagem". E, o caso de uso segue para o passo 4.10 do fluxo básico.
</div>
  
### 7 Regra de Negócio (RN)
### 7.1 RN01 - Ocorrência prévia do like é necessária
<div style="text-align: justify">
No passo 4.1 do fluxo básico, faz necessário que o usuários tenha realizado algum like.
</div>

### 7.2 RN02 - Ocorreência de match é necessário
<div style="text-align: justify">
No passo 4.2 do fluxo básico, faz necessário a confirmação de que o usuário correspondeu ao like do usuário.
</div>
  
### 8 Pós-condições
<div style="text-align: justify">
Para FB: atualizações periódicas de mensagens encontrados.
</div>
  
### 9 Ponto de Extensão
Não se aplica.
