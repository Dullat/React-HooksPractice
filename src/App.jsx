import { useState, createContext, useRef, useEffect } from "react"
import ComponantA from "./componants/ComponantA"

export const userContext = createContext({
  user: "",
})

function App() {
  const [user, setUser] = useState("dullat")
  const inputRef = useRef()

  function handleFocus() {
    inputRef.current.style = "background-color: red"
  }

  function removeFocus() {
    inputRef.current.style = "background-color: yellow"
  }

  useEffect(() => {
    console.log(inputRef.current)
  })

  return (
    <>
      <div className="border-solid border-2 border-black h-dvh">
        <h1>This is main</h1>
        <h3>prop:{user}</h3>
        <userContext.Provider value={{ user, setUser }}>
          <ComponantA />
        </userContext.Provider>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={removeFocus}
          ref={inputRef}
          className="bg-yellow-500"
        />
      </div>
    </>
  )
}

export default App
