import { ReactNode } from "react"
import { StyledIconButton } from "./styled"
import { HeartIcon } from "../icons"


interface Props {
    icon: 'heart'
    onClick?: () => void
    style?: React.CSSProperties
}

export const IconButton = ({icon, onClick, style}: Props) => {
    const iconMapper: Record<Props['icon'], ReactNode> = {
        heart: <HeartIcon/>,
    }
    
    return (
        <StyledIconButton onClick={onClick} style={style}>
            {iconMapper[icon]}
       </StyledIconButton>
    )
}