// import ListGroup from "./components/ListGroup"
// import Alert from "./components/Alert"
import Button from "./components/Button"

const App = () => {

//   const items = [
//     'New York',
//     'San Francisco',
//     'Tokyo',
//     'London',
//     'Paris'
// ]

// const handleSelectItem = (item: string): void => {
//   console.log(item)
  
// }

  return (
    <div>
      {/* <ListGroup 
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        <h1 className="text-xl">Hola Typescript</h1>
      </Alert> */}
      <Button><h1 className="text-slate-200 font-semibold hover:text-slate-100">Click Moi</h1></Button>
    </div>
  )
}

export default App