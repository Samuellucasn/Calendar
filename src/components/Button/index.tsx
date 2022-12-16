import { ButtonStyle } from "./style"
import { ButtonProps } from "../../interfaces/types"

const Button: React.FC<ButtonProps> = ({onClick, color, border}) => {
    return (
       <ButtonStyle onClick={onClick} color={color} border={border}/>
    )
}

export default Button