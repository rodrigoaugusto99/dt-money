import styled from "styled-components";

//header container por volta de tudo
export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-900"]};
  //2.5 do top, 0 da lateral direita, 7.5rem abaixo. e 0 na esquerda(n precisa)
  padding: 2.5rem 0 7.5rem;
`;

/*conteudo do header fica fora do container geral, 
pois queremos que o header container ocupe a largura toda
da tela do usuario, se for ultra wide etc
mas o conteudo queremos que seja fixado com um max-width,
tipo 1100 1120 etc. centralizado. */

export const HeaderContent = styled.div`
/*se for menor que 1120, vai ocupar 100% da tela */
  width: 100%;
  max-width: 1120px;
  //centralizar
  margin: 0 auto;
  //padding nas laterais p n ficcar grudado naquele caso
  padding: 0 1.5rem;

  
  display: flex;
  //um em cada ponta
  justify-content: space-between;
  //verticalmente alinhados ao centro
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${props => props.theme["green-500"]};
  color: ${props => props.theme["white"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme["green-700"]};
    /*se ficar aqui, acontece aa transicao apenas na ida da transition.
    se botar fora, depois do cursor pointer, vai ter a transicao
    tanto pra ida quanto pra volta. */
    transition: background-color 0.2s;
  }
`;