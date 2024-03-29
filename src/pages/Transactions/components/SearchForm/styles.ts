import styled from 'styled-components'

/* pode ser form pois so tem ele no componente */
export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
  button {
    /*display flex pois como tem um icone, fica mais
    facil pra alinhar o icone e o texto , principalmente
    quando eles nao tem o mesmo tamanho*/
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`
