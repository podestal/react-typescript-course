import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <button className="py-4 px-6 m-12 bg-blue-600 rounded-3xl hover:bg-blue-500">{children}</button>
  )
}

export default Button