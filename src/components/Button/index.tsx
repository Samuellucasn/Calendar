import { ButtonStyle } from './style'

interface ButtonProps {
    children: React.ReactNode
}

const Button : React.FC<ButtonProps> = ({children}) => {
    return (
        <ButtonStyle>{children}</ButtonStyle>
    )
} 

export default Button