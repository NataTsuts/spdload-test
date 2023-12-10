import styled from "styled-components"
import { theme } from "../../theme"

export const StyledIconButton = styled.button`
  background-color: ${theme.colors.secondary};
  margin: 10px;
  border: none;
  width: 53px;
  height: 53px;

  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
`