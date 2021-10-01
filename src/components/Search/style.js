import styled from "styled-components";

export const SearchContainer = styled.div`
  background: ${props => props.theme.colors.background_light};
  margin: 2rem 0;
  width: 100%;
  height: 4rem;
  border-radius: 12px; 
  display: flex;
  align-items: center;

  input {
    
    padding-left: 1rem;
    border-radius: 12px 0 0 12px;
    width: 92%; 
  }

  input::placeholder {
    color: ${props => props.theme.colors.text};
    background: transparent;
  }

  input[type="text"] {
    color: ${props => props.theme.colors.text};
  }

  button {
    background: ${props => props.theme.colors.text_light};
    color: ${props => props.theme.colors.text};
    padding: 0.5rem 0.8rem;
    margin-right: 1rem;
    border-radius: 4px;
    cursor: pointer;
  }

  @media only screen and (max-width: 320px) { 
    input::placeholder {
      font-size: 10px;
    }
  }
`;