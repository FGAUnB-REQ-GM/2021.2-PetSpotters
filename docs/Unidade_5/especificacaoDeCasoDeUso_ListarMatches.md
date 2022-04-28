# Especificação de Caso de Uso: <Lista de matchs>

 ## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 26/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando especificação do caso de uso | 1.0    |
| 27/04/2022 | [art1505](https://github.com/art1505) | Adicionando especificação do caso de uso | 1.1    |

## 1 Breve Descrição
Caso de uso que engloba o fluxo de atividades relativas à consulta, por parte do sistema, da lista de matches realizados pelo usuário. Tal lista é obtida através da consulta de "likes" efetuados, a verificação de likes em comum e a posterior listagem destes likes mútuos. 


## 2 Atores

### 2.1   Clientes
   
   2.1.1  Donos de pets que buscam proporcionar momentos de diversão e lazer aos seus amigos de 4 patas por meio de interações com outros animais. E para isso, desejam visualizar como quais usuários o interesse pelo perfil se deu de forma mútua.

## 3 Condições Prévias

Usuário fez login e cadastrou seu pet.
  
## 4 Fluxo Básico de Eventos

1. Este caso de uso se inicia quando o usuário deseja visualizar a lista de matches.
2. O sistema verifica a lista de likes do usuário (RN01)(FE01).
3. O sistema verifica se o usuário está presente na lista de likes dos usuários os quais ele deu like (FE02).
4. Em caso afirmativo, o sistema cria uma lista só com as correspondências de likes deste usuário . 
5. O sistema fornece uma tela para o usuário com esta lista.
6. O caso de uso é encerrado.
  
## 5 Fluxo Exceção(FE)

### 5.1 FE01 - FA01 Nenhum like foi realizado ainda 
No passo 4.2 do fluxo básico, caso o cliente busque obter uma lista de matches sem ter efetuado um like sequer, o sistema verifica que a lista de likes está vazia e não pode então prosseguir com o fluxo básico. Desta forma, ele fornece uma mensagem dizendo: "Nenhum like foi efetuado". E, o caso de uso segue para o passo 4.6 do fluxo básico.

### 5.2 FE02 - FA02 Não houve nenhum like mútuo encontrado 
No passo 4.3 do fluxo básico, caso o cliente tenha efetuado likes sem que nenhum deles tenha sido correspondido, o sistema verifica que a lista de likes dos usuários de interesse não possuem o perfil do usuário interessado e não pode prosseguir com o fluxo básico. Desta forma, ele fornece uma mensagem dizendo: "Nenhum match foi encontrado". E, o caso de uso segue para o passo 4.6 do fluxo básico.
  
## 6 Regra de Negócio (RN)
### 6.1 RN01 - Ocorrência prévia do like é necessária
No passo 4.2 do fluxo básico, se faz necessário que pelo menos um like tenha sido efetuado pelo usuário.
  
## 7 Pós-condições
Para FB: atualizações periódicas da lista de matches encontrados.
  
## 8 Ponto de Extensão
Não se aplica.
