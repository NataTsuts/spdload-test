import { ReactNode } from "react"
import { StyledIconButton } from "./styled"
import { ArrowLeftIcon, ArrowRightIcon, HeartIcon, HeartWhiteIcon, TrashIcon } from "../icons"


interface Props {
    icon: 'heart' | 'whiteHeart' | 'arrowRight' | 'arrowLeft' | 'trash'
    onClick?: () => void
    style?: React.CSSProperties
}

export const IconButton = ({ icon, onClick, style }: Props) => {
    const iconMapper: Record<Props['icon'], ReactNode> = {
        heart: <HeartIcon />,
        whiteHeart: <HeartWhiteIcon />,
        arrowRight: <ArrowRightIcon />,
        arrowLeft: <ArrowLeftIcon />,
        trash: <TrashIcon />
    }

    return (
        <StyledIconButton onClick={onClick} style={style}>
            {/* test */}
            {iconMapper[icon]}
        </StyledIconButton>
    )
}