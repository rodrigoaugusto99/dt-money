
import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  //3 colunas no grid c/ mesmo tamanho
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  //margin negativo p/ subir por cima do header
  //por isso colocamos um padding maior no bottom do Header
  margin-top: -5rem;
`;


/*um card eh difernete, eh verde. entao vamos criar uma propriedade
pra passar aqui dentro. */

/*essa propriedade vai se chamar variant, vai receber apenas o green por 
enquanto, e pode ser nula. se nao tiver, nao eh verde. */
interface SummaryCardProps {
  variant?: "green"
}
// < > pra falar que esse SummaryCard pode receber essa propriedade
export const SummaryCard = styled.div<SummaryCardProps>`
//o quadrado de cada card
  background: ${props => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    //cor do texto do header
    color: ${props => props.theme["gray-300"]};
  }
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
  /*criando uma estilizacao condicional.
  vamos ter acesso as propriedades do componente.
  se o props.variant for green, entao vamos usar o css, 
  importando do styled-components */
  ${props => props.variant === "green" && css`
  //ja temos a props ali em cima, entao taca direto
    background: ${props.theme["green-700"]}
  `}
`;