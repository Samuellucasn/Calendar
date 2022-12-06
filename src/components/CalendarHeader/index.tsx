import { HeaderStyle } from './style'
import Button from '../Button'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface HeaderProps {
    children: any
}

const Header: React.FC<HeaderProps> = ({children}) => {
    return (
        <>
        <HeaderStyle>
            <Button><FaChevronLeft></FaChevronLeft></Button>
                <h1>{ children }</h1>
            <Button><FaChevronRight></FaChevronRight></Button>
        </HeaderStyle>
        </>
    ) 
}

export default Header