import { ReactNode } from "react"
import { StyledIconButton } from "./styled"
import { HeartIcon } from "../icons"
import { HeartWhiteIcon } from "../icons/HeartWhiteIcon"


interface Props {
    icon: 'heart' | 'whiteHeart'
    onClick?: () => void
    style?: React.CSSProperties
}

export const IconButton = ({icon, onClick, style}: Props) => {
    const iconMapper: Record<Props['icon'], ReactNode> = {
        heart: <HeartIcon/>,
        whiteHeart: <HeartWhiteIcon/>
    }
    
    return (
        <StyledIconButton onClick={onClick} style={style}>
            {/* test */}
            {iconMapper[icon]}
       </StyledIconButton>
    )
}