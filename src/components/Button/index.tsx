import { ButtonStyle } from './style'

interface ButtonProps {
    children: React.ReactNode
    onClick: () => void
}

const Button : React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
    )
} 

export default Button