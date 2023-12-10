import { NavLink } from "react-router-dom"
import { Button } from "../Button"
import { StyledFlexDiv } from "../FlexDiv"
import { IconButton } from "../IconButton"
import { StyledHeader, StyledNavLink } from "./styled"
import { theme } from "../../theme"

export const Header = () => {
    return (
        <StyledHeader>
            <NavLink to='/'>
                <img src={require(`../../assets/images/logo.png`)} alt="SpaceX" />
            </NavLink>
            <StyledFlexDiv>
                <StyledNavLink to='/'
                    style={
                        ({ isActive }) =>
                            isActive ? { textDecoration: 'underline' } : {}
                    }
                >
                    Home
                </StyledNavLink>
                <StyledNavLink to='/tours' style={
                    ({ isActive }) =>
                        isActive ? { textDecoration: 'underline' } : {}
                }
                >
                    Tours
                </StyledNavLink>
                <StyledNavLink to='/about' style={
                    ({ isActive }) =>
                        isActive ? { textDecoration: 'underline' } : {}
                }
                >
                    About
                </StyledNavLink>
                <StyledNavLink to='/help' style={
                    ({ isActive }) =>
                        isActive ? { textDecoration: 'underline' } : {}
                }
                >
                    Help
                </StyledNavLink>
            </StyledFlexDiv>
            <StyledFlexDiv>
                <NavLink to='/favourites'>
                    {({ isActive }) =>
                        <IconButton
                            icon={isActive ? 'whiteHeart' : 'heart'}
                            style={isActive ? {
                                backgroundColor: theme.colors.pink
                            } : {}}
                        />
                    }
                </NavLink>
                <Button name="sign in" style={{ width: '163px' }} />
            </StyledFlexDiv>
        </StyledHeader>

    )
}