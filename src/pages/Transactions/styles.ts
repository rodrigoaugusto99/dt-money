import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  /*margin vai ter essa diferenca de 4 pros outros,
  pra ter um espaco do bagulho de cima*/
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  /*ha um espacamento entre cada linha, entao colcoar
  esse collapse separete pra podermos fazer um border-
  spacing */
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme["gray-700"]};

    //border radius nos 4 cantos 
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;



/*criando mais um compoentne, pois ha mudancas nos textos(span),
se for entrada eh verde, saida vermelho */

/*propriedade p falar qual vai ser a cor do texto */
interface PriceHighlightProps {
    variant: "income" | "outcome";
  }

  /*dessa forma, la ao instanciarmos esse componente no index.tsx,
  podemos passar essa propriedade, e dependendo do que botarmos la, 
  condicionara aqui. */
export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};
`;