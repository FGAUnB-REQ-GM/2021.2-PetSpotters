# Especificação de Caso de Uso: <Notificar Matchs>

 ## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 28/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando especificação do caso de uso | 1.0    |

## 1 Breve Descrição
<div style="text-align: justify">
Caso de uso que engloba o fluxo de atividades relativas à notificação, pelo sistema, de "likes" correspondidos dos likes que o usuário realizou.
</div>


## 2 Atores

### 2.1   Clientes
   <div style="text-align: justify">
   2.1.1  Donos de pets que buscam proporcionar momentos de diversão e lazer aos seus amigos de 4 patas por meio de interações com outros animais. E com isso, também avalia possíveis usuários, efetua likes e aguarda uma notificação que o match foi correspondido
   </div>

## 3 Condições Prévias

Usuário fez login e cadastrou seu pet.
  
## 4 Fluxo Básico de Eventos (FB)

<div style="text-align: justify">

1. Este caso de uso se inicia quando o usuário efetua um like em um ou mais usuários (RN01).
2. O sistema valida a ação.
3. O sistema envia uma notificação ao usuário que foi efetuado o like.
4. Em caso afirmativo, o sistema valida a ação de like do usuário que foi efetuado o like (FE01).
5. O sistema retorna uma notificação para o usuário que efetuou o primeiro like.
6. O caso de uso é encerrado.

</div>

## 5 Fluxo Alternativo (FA)

<div style="text-align: justify">

Não se aplica.

</div>
  
## 6 Fluxo Exceção(FE)

### 6.1 FE01 - FE01 O usuário não corresponde ao like efetuado
<div style="text-align: justify">
No passo 4.4 do fluxo básico, caso o usuário ao qual foi efetuado não corresponde ao like efetuado, o sistema não retorna a notificação para o usuário que efetuou o like. E, o caso de uso retorna ao passo 4.6.
</div>
  
## 7 Regra de Negócio (RN)
### 7.1 RN01 - Ocorrência prévia do like é necessária
<div style="text-align: justify">
No passo 4.1 do fluxo básico, faz necessário a conclusão do perfil de usuário e perfil do pet.
</div>
  
## 8 Pós-condições
<div style="text-align: justify">
Para FB: atualizações periódicas de notificações encontrados.
</div>
  
## 9 Ponto de Extensão
Não se aplica.
