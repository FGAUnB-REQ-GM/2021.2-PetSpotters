# Especificação de Caso de Uso: <Lista de matchs>

 ## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 26/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando especificação do caso de uso | 1.0    |
| 27/04/2022 | [art1505](https://github.com/art1505) | Adicionando especificação do caso de uso | 1.1    |
| 28/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando fluxo alternativo, FE03 do fluxo de exceção e justificando textos | 1.2    |

## 1 Breve Descrição
<div style="text-align: justify">
Caso de uso que engloba o fluxo de atividades relativas à consulta, por parte do sistema, da lista de matches realizados pelo usuário. Tal lista é obtida através da consulta de "likes" efetuados, a verificação de likes em comum e a posterior listagem destes likes mútuos. 
</div>


## 2 Atores

### 2.1   Clientes
   <div style="text-align: justify">
   2.1.1  Donos de pets que buscam proporcionar momentos de diversão e lazer aos seus amigos de 4 patas por meio de interações com outros animais. E para isso, desejam visualizar como quais usuários o interesse pelo perfil se deu de forma mútua.
   </div>

## 3 Condições Prévias

Usuário fez login e cadastrou seu pet.
  
## 4 Fluxo Básico de Eventos (FB)

<div style="text-align: justify">

1. Este caso de uso se inicia quando o usuário deseja visualizar a lista de matches(FA01).
2. O sistema verifica a lista de likes do usuário (RN01)(FE01).
3. O sistema verifica se o usuário está presente na lista de likes dos usuários os quais ele deu like (FE02).
4. Em caso afirmativo, o sistema cria uma lista só com as correspondências de likes deste usuário. 
5. O sistema fornece uma tela para o usuário com esta lista.
6. O caso de uso é encerrado.

</div>

## 5 Fluxo Alternativo (FA)

### 5.1 FA01 - Busca específica
<div style="text-align: justify">

No passo 4.5 do fluxo básico, o leitor deseja fazer uma busca específica na lista de matchs.

1. O usuário deseja fazer uma pesquisa de match específico.
2. O sistema solicita o nome do match específico buscado.
3. O sistema verifica se o usuário está presente na lista de likes deste usuário (FE03).
4. Caso afirmativo, o sistema apresenta o match buscado por este usuário.
5. O caso de uso segue para o passo 4.6 do fluxo básico.

</div>
  
## 6 Fluxo Exceção(FE)

### 6.1 FE01 - FE01 Nenhum like foi realizado ainda

<div style="text-align: justify">
No passo 4.2 do fluxo básico, caso o cliente busque obter uma lista de matches sem ter efetuado um like sequer, o sistema verifica que a lista de likes está vazia e não pode então prosseguir com o fluxo básico. Desta forma, ele fornece uma mensagem dizendo: "Nenhum like foi efetuado". E, o caso de uso segue para o passo 4.6 do fluxo básico.
</div>

### 6.2 FE02 - FE02 Não houve nenhum like mútuo encontrado
<div style="text-align: justify">
No passo 4.3 do fluxo básico, caso o cliente tenha efetuado likes sem que nenhum deles tenha sido correspondido, o sistema verifica que a lista de likes dos usuários de interesse não possuem o perfil do usuário interessado e não pode prosseguir com o fluxo básico. Desta forma, ele fornece uma mensagem dizendo: "Nenhum match foi encontrado". E, o caso de uso segue para o passo 4.6 do fluxo básico.
</div> 

### 6.3 FE03 - FE03 NO match específico não existe na lista
<div style="text-align: justify">
No passo 5.1.3 do fluxo alternativo, caso o cliente busca achar um match específico que ou não existe ou não correspondeu ao like que o cliente realizou, o sistema não encontra o usuário e não pode prosseguir com o fluxo alternativo. O sistema retorna a mensagem: "Match não foi encontrado" e o caso de uso segue para o passo 4.6 do fluxo básico.
</div>
  
## 7 Regra de Negócio (RN)
### 7.1 RN01 - Ocorrência prévia do like é necessária
<div style="text-align: justify">
No passo 4.2 do fluxo básico, se faz necessário que pelo menos um like tenha sido efetuado pelo usuário.
</div>
  
## 8 Pós-condições
<div style="text-align: justify">
Para FB: atualizações periódicas da lista de matches encontrados.
</div>
  
## 9 Ponto de Extensão
Não se aplica.
