import styled from "styled-components";
import { theme } from "../../theme";

interface PaginationDotProps {
  isActive?: boolean, 
  color?: "white" | "black"
}


export const PaginationDot = styled.div<PaginationDotProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid ${({ color }) => theme.colors[color ?? "black"]};
  border-radius: 100%;
  margin: 4px;
  &:hover {
    background-color: ${theme.colors.secondary};
    cursor: pointer;
  }
  &::after {
    content: "";
    display: block;
    width: 55%;
    height: 55%;
    background-color: ${({ isActive, color }) => isActive ? theme.colors[color ?? "black"] : "transparent"};
    border-radius: 100%;
  }
`