import { InputStyle } from './style'

interface propsInput {
    onChange: () => void
}

const Input: any = ({ onChange }:any) => {

    <InputStyle
        onChange={onChange}
    />
}

export default Input