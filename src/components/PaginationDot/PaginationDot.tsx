import { StyledPaginationDotActive, StyledPaginationDotBody } from "./styled"

interface Props {
    isActive?: boolean,
    color?: 'white' | 'black'
    onClick?: VoidFunction
}

export const PaginationDot = ({ isActive, color, onClick }: Props) => {
    return (
        <StyledPaginationDotBody onClick={onClick} color={color ?? 'black'}>
            {isActive ? (<StyledPaginationDotActive color={color ?? 'black'} />) : null}
        </StyledPaginationDotBody>
    )
}
// isActive ? a : null