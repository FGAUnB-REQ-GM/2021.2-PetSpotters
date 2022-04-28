# Especificação de caso de Uso - Avaliar outro Perfil

## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 26/04/2022 | [art1505](https://github.com/art1505) | Adicionando especificação do caso de uso | 1.0    |
| 27/04/2022 | [art1505](https://github.com/art1505) | Adicionando especificação do caso de uso | 1.1    |

## 1 Breve Descrição
Caso de uso que engloba o fluxo de atividades relativas à avaliação, por parte do cliente, de perfis de outros usuários da plataforma. Tal avaliação se dá através de "likes" e "deslikes" a outros perfis, e finaliza com a validação e armazenamento, por parte do sistema, das opções escolhidas.

## 2 Atores

### 2.1   Clientes
   
   2.1.1  Donos de pets que buscam proporcionar momentos de diversão e lazer aos seus amigos de 4 patas por meio de interações com outros animais.

## 3 Condições Prévias

Usuário fez login e cadastrou seu pet.
   
## 4 Fluxo Básico de Eventos

1. Este caso de uso se inicia quando o cliente deseja avaliar outro perfil.
2. O sistema oferece um perfil por vez.
3. O cliente seleciona a opção de avaliação (RN01).
4. O sistema faz a validação da opção escolhida(FE01). 
5. O sistema armazena a avaliação realizada.
6. O sistema oferece um novo perfil para avaliação.
7. O caso de uso é encerrado.
    
## 5 Fluxo Exceção(FE)
### 5.1 FE01 - O cliente não seleciona uma opção de avaliação
No passo 4.4 do fluxo básico, caso o cliente tente passar o perfil sem que haja a escolha de uma opção de avaliação, o sistema não poderá fazer a validação e, futuramente, o armazenamento da avaliação. Desta forma, ele fornece uma mensagem dizendo: "Nenhuma opção foi marcada". E, o caso de uso retorna ao passo 4.3 do fluxo básico.

## 6 Regra de Negócio (RN)
### 6.1 RN01 - Opção de avaliação necessária
No passo 4.3 do fluxo básico, se faz necessário que as opções de avaliação "like" ou "deslike" sejam marcadas.

## 7 Pós-condições
Para FB: registro, pelo sistema, da lista de avaliações e atualizações periódicas.

## 8 Ponto de Extensão
Não se aplica.

