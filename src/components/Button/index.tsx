
import './btn.css'

interface Props {
	className?: string;
	children: React.ReactNode
}
const Button: React.FC<Props> = (props) => {
	const { children, className, ...rest } = props
	return (
		<button className={`btn ${className}`}{...rest}>{children}</button>
	)
}

export default Button