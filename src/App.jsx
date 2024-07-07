import { useState, createContext, useRef, useEffect } from "react"
import ComponantA from "./componants/ComponantA"

export const userContext = createContext({
  user: "",
})

function App() {
  const [user, setUser] = useState("dullat")

  return (
    <>
      <div className="border-solid border-2 border-black h-dvh">
        <h1>This is main</h1>
        <h3>prop:{user}</h3>
        <userContext.Provider value={{ user, setUser }}>
          <ComponantA />
        </userContext.Provider>
      </div>
    </>
  )
}

export default App
