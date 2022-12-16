import { Button } from "./components/Button";
import { Product } from "./components/shared/Product";
function App() {
  
  return (
    <div className="App">
      <Button addNew="Add New" />
      <Product thumbnail="" 
      title="Lorem ipsum Lorem ipsum" 
      description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" 
      price={12.00}/>
    </div>
  )
}

export default App
