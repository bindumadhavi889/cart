import CartContainer from "./CartContainer"
import Navbar from "./Navbar"
import { useGlobalContext } from "./context"
const App = () => {
  const {loading} = useGlobalContext()
  if(loading) {
    return (
      <main>
        <div className="loading" style={{marginTop:'8rem'}}></div>
      </main>
    )
  }
  return(
    <main>
      <Navbar/>
      <CartContainer/>
    </main>
  )
}
export default App