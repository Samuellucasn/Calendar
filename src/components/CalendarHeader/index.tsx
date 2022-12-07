import { HeaderStyle } from './style'
import Button from '../Button'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface HeaderProps {
    children: any
    onNext: any
    onBack: any
}

const Header: React.FC<HeaderProps> = ({children, onNext, onBack}) => {
    return (
        <>
        <HeaderStyle>
            <Button onClick={ onNext }><FaChevronLeft></FaChevronLeft></Button>
                <h1>{ children }</h1>
            <Button onClick={ onBack }><FaChevronRight></FaChevronRight></Button>
        </HeaderStyle>
        </>
    ) 
}

export default Header