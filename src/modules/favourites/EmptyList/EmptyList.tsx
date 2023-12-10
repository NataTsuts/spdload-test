import { StyledFlexDiv } from "../../../components/FlexDiv"
import { BlockHeaderTypography } from "../../../components/Typography/styled"

export const EmptyList = () => {
    return (
        <StyledFlexDiv style={{ marginTop: '133px' }}>
            <BlockHeaderTypography>
                Nothing here yet...
            </BlockHeaderTypography>
        </StyledFlexDiv>
    )
}