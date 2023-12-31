import styled from "styled-components"
import { theme } from "../../theme"

export const StyledButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.black};
  text-transform: ${theme.textTransform.uppercase};
  font-weight: ${theme.fontWeight.default};
  font-size: ${theme.fontSize.default};
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