import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Container, Li, Menu } from './styles'
import { useState } from 'react'

function Header() {
    const { pathname } = useLocation()

    const [ changeBackground, setChangeBackground ] = useState(false)
    window.onscroll = () => {
        if( !changeBackground && window.scrollY > 100) {
            setChangeBackground(true)
        } 

        if(changeBackground && window.scrollY <= 100) {
            setChangeBackground(false)
        }
    }

    return (
        <Container changeBackground={changeBackground}>
            <img src={Logo} alt="" />
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>

                <Li isActive={pathname.includes('/movies')}>
                    <Link to="/movies">Movies</Link>
                </Li>

                <Li isActive={pathname.includes('/series')}>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header