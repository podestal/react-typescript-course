import { ReactNode } from "react"

interface Props {
    children: ReactNode
}


const Alert = ({ children }: Props) => {
  return (
    <div className="w-[700px] bg-red-400 text-red-900 py-4 px-12 rounded-3xl m-6">
        {children}
    </div>
  )
}

export default Alert