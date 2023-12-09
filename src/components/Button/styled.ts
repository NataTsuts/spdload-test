import styled from "styled-components"

export const StyledButton = styled.button`
  background-color: #D3EAFF;
  color: #000000;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 24px;
  margin: 10px;
  padding: 12px 0;
  border: none;
  width: 278px;
  height: 53px;

  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
`