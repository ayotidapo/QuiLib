import {InputTypes} from 'Interface'

interface Props{
	placeholder?:string;
	className?:string;
	type:InputTypes
}

const Input:React.FC<Props>=(props)=>{
	return(

		<input {...props}/>
	)
}
export default Input