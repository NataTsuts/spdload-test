import { StyledPaginationDotActive, StyledPaginationDotBody } from "./styled"

interface Props {
    isActive?: boolean,
    color?: 'white' | 'black'
}

export const PaginationDot = ({isActive, color}:Props) => {
    return (
        <StyledPaginationDotBody color={color ?? 'black'}>
            {isActive ? (<StyledPaginationDotActive color={color ?? 'black'}/>) : null}
        </StyledPaginationDotBody>
    )
}
// isActive ? a : null