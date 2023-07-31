import { Props } from "../interfaces/interface"
const ButtonWrapper: React.FC<Props> = ({children,toggle}) => {
  return (
         <button className='bg-gray-300 p-3 rounded-md' onClick={toggle}> {children}</button>
  )
}
export default ButtonWrapper
