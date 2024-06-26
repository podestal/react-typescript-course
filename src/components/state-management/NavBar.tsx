import useCounterStore from "./Store"

const NavBar = () => {

    // selectors to avoid re-rendering
    const counter = useCounterStore(s => s.counter)
    // const {counter} = useCounterStore()

  return (
    <div>
        <>
        {console.log('Rendering')}
        </>
        <h2>Nav Bar</h2>
        <p>{counter}</p>
    </div>
  )
}

export default NavBar