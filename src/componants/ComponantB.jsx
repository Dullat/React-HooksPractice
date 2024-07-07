import ComponantC from "./ComponantC"

const ComponantB = () => {
  return (
    <div className="border-solid border-2 border-black h-3/6 w-5/6 mx-auto mt-4">
      <h3>this is B</h3>
      <ComponantC />
    </div>
  )
}

export default ComponantB
