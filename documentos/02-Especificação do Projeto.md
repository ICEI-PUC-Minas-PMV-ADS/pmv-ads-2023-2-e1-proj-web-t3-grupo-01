# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 1: Administrador </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Gestores e colaboradores.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Disponibilizar horários para os alunos, de modo que os mesmos possam se vincular. Possibilitando melhor gestão da lotação do espaço.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 2: Usuário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Clientes.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Visualizar a disponibilidade de vagas por horário, podendo encontrar o melhor momento para a prática da atividade física de acordo com a sua necessidade.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários


|EU COMO... `PERSONA`   | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|---------------------------|----------------------------------|
| Membro da academia                | agendar treinamentos individuais específicos, aulas em grupo.                       | para facilitar a marcação de aula.                              |
| Pessoa ocupada                | marcar horário com facilidade.                       | para evitar que falte vaga no meu horário.                              |
| Idoso                | uma interface simples.                       | para facilitar a minha marcação.                              |
| Grupo de treino                | saber quantas vagas estão disponíveis.                       | para evitar que alguma pessoa não possa treinar no mesmo horário das outras.                              |
| Pessoas que tem uma rotina fixa                | poder marcar aulas para vários dias à frente.                       | para poder manter a minha rotina fixa.                              |
| Usuário geral                | poder desmarcar uma aula                        | para evitar que eu ocupe uma vaga sem usá-la.                              |

## Requisitos do Projeto

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  Criar página para cadastro de usuário.                    | ALTA   | 
|  RF-02  |  Criar página de login.                    | ALTA   |
|  RF-03  |  Criar formulário de agendamento de aulas, com as seguintes opções: data e horário, tipo de aula e instrutor.                     | ALTA   |
|  RF-04  |  Criar página de aulas disponíveis que mostra data e horário, tipo de aula, quantidade de vagas disponíveis e totais.                    | ALTA   |
|  RF-05  |  Criar página que mostra todas as aulas marcadas e tenha uma opção para desmarcar.                    | ALTA   |
|  RF-06  |  Criar página para controle da aplicação com a visão de administrador.                    | ALTA   |
|  RF-07  |  Criar funcionalidade de adicionar aulas, remover aulas para administradores.                    | ALTA   |
|  RF-08  |  Criar funcionalidade de filtro/pesquisa para permitir ao usuário localizar aulas.                    | MÉDIA   |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  A aplicação deve ser acessível ao público na internet.                    | ALTA   | 
| RNF-02    |  A aplicação precisa funcionar sem problemas nos navegadores mais populares do mercado, que incluem o Google Chrome, Firefox e Microsoft Edge.                    | ALTA   | 
| RNF-03    |  A aplicação deve ser adaptável, garantindo que ela possa ser visualizada de maneira adequada em diversos tipos de dispositivos.                    | ALTA   | 

**Prioridade: Alta / Média / Baixa. 

