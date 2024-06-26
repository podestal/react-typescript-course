import { useParams } from "react-router"

const UserDetailPage = () => {

    const params = useParams()
    
  return (
    <div className="m-4">
        <h3 className="text-xl">User</h3>
    </div>
  )
}

export default UserDetailPage