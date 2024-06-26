import { useNavigate } from "react-router"
import { Button } from "@tremor/react"

const ContactPage = () => {

    const navigate = useNavigate()

  return (
    <form
        onSubmit={e => {
            e.preventDefault()
            navigate('/')
        }}
        className="m-4"
    >
        <Button color="blue">Submit</Button>
    </form>
  )
}

export default ContactPage