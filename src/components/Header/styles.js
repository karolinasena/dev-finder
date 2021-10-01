import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    color: ${props => props.theme.colors.text} 
  }
`