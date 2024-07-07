import ComponantB from "./ComponantB"
const ComponantA = () => {
  return (
    <div className="border-solid border-2 border-black h-3/6 w-5/6 mx-auto mt-4">
      <h3>this is A</h3>
      <ComponantB />
    </div>
  )
}

export default ComponantA
