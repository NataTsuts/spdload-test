import styled from "styled-components"
import { theme } from "../../theme"

export const StyledCardContainer = styled.div`
  background-color: ${theme.colors.white};
  margin: 10px;
  border: 1px solid ${theme.colors.primary};
  width: 411px;
  height: 572px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`