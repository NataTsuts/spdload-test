import React from 'react'
import { StyledButton } from "./styled"

interface Props {
    name?: string,
    onClick?: () => void
    style?: React.CSSProperties
}

export const Button = ({name, onClick, style}: Props) => {
    return (
       <StyledButton onClick={onClick} style={style}>
            {name}
       </StyledButton>
    )
}