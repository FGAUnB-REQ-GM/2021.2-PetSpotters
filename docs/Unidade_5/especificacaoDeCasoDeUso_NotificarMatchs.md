# Especificação de Caso de Uso: <Notificar Matchs>

 ## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 28/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando especificação do caso de uso | 1.0    |
| 28/04/2022 | [art1505](https://github.com/art1505) | Adicionando especificação do caso de uso | 1.1    |
| 28/04/2022 | [Levi Queiroz](https://github.com/LeviQ27) | Adicionando letras e corrigindo erros ortográficos | 1.2    |

## 1 Breve Descrição
<div style="text-align: justify">
Caso de uso que engloba o fluxo de atividades relativas à notificação, pelo sistema, de "likes" correspondidos pelos perfis de interesse.
</div>


## 2 Atores

### 2.1   Clientes
   <div style="text-align: justify">
   2.1.1  Donos de pets que buscam proporcionar momentos de diversão e lazer aos seus amigos de 4 patas por meio de interações com outros animais. E com isso, também avalia possíveis usuários, efetua likes e aguarda uma notificação que o match foi correspondido.
   </div>

## 3 Condições Prévias

Usuário fez login, cadastrou seu pet e passou pela avaliação de perfis.
  
## 4 Fluxo Básico de Eventos (FB)

<div style="text-align: justify">

1. Este caso de uso se inicia quando o usuário efetua um like em um ou mais usuários (RN01)(FE01).
2. O sistema valida a ação.
3. O sistema envia uma notificação ao usuário que recebeu o like.
4. Em caso de correspondência, o sistema valida a ação de like do usuário que correspondeu ao interesse (FE02).
5. O sistema retorna uma notificação para o usuário que efetuou o primeiro like.
6. O caso de uso é encerrado.

</div>

## 5 Fluxo Alternativo (FA)

<div style="text-align: justify">

Não se aplica.

</div>
  
## 6 Fluxo Exceção(FE)
 
### 6.1 FE01 - O usuário não efetua nenhum like antes de solicitar a ação do sistema
<div style="text-align: justify">
No passo 4.1 do fluxo básico, caso o primeiro usuário não efetuado nenhum like, o sistema não retorna a notificação para o usuário que efetuou o like. E, o caso de uso segue para o passo 4.6.
</div>

### 6.2 FE02 - O usuário não corresponde ao like efetuado
<div style="text-align: justify">
No passo 4.4 do fluxo básico, caso o usuário ao qual foi efetuado o like não corresponde à ação, o sistema retorna a mensagem: "Nenhum like foi realizado". E, o caso de uso segue para o passo 4.6.
</div>
  
## 7 Regra de Negócio (RN)
### 7.1 RN01 - Ocorrência prévia do like é necessária
<div style="text-align: justify">
No passo 4.1 do fluxo básico, faz-se necessário que o usuário tenha efetuado ao menos um like para que o fluxo básico prossiga.
</div>
  
## 8 Pós-condições
<div style="text-align: justify">
Para FB: atualizações periódicas de notificações encontradas.
</div>
  
## 9 Ponto de Extensão
Notificar matches é um ponto de extensão do caso de uso "Avaliar outro Perfil".
