import { HeaderStyle, ButtonHeader } from './style'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface HeaderProps {
    children: React.ReactNode,
    onNext: React.MouseEventHandler<HTMLButtonElement>,
    onBack: React.MouseEventHandler<HTMLButtonElement>
}

const Header: React.FC<HeaderProps> = ({children, onNext, onBack}) => {
    return (
        <>
        <HeaderStyle>
            <ButtonHeader onClick={ onNext }><FaChevronLeft></FaChevronLeft></ButtonHeader>
                <h1>{ children }</h1>
            <ButtonHeader onClick={ onBack }><FaChevronRight></FaChevronRight></ButtonHeader>
        </HeaderStyle>
        </>
    ) 
}

export default Header