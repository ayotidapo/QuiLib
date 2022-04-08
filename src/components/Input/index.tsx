import { InputTypes } from 'Interface'

interface Props {
	placeholder?: string;
	className?: string;
	type: InputTypes,
	value: string,
	onChangeInput(value: string | null): void
}

const Input: React.FC<Props> = (props) => {
	const { value, onChangeInput, ...rest } = props
	return (

		<input value={value} onChange={(e) => onChangeInput(e.target.value)} {...rest} />
	)
}
export default Input