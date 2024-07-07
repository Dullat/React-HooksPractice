import { useContext } from "react"
import { userContext } from "../App"

const ComponantC = () => {
  const { user, setUser } = useContext(userContext)
  return (
    <div className="border-solid border-2 border-black h-3/6 w-5/6 mx-auto mt-4">
      <h3>this is C</h3>
      <h4>prop: {user}</h4>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        className="border-2 border-solid border-black"
      />
    </div>
  )
}

export default ComponantC
