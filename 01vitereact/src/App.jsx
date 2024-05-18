
import Chai from './chai'

function App() {

const username = "Akhilesh"

  return (
    // we can return only one element here that element is div
    // inside div we can return so many elements
    // <div>
    //   <Chai />
    //   <h1>Chai aur react</h1>
    //   <p>This is para</p>
    // </div>
    //

    // we can return fragment
    <>
      <Chai />
      <h1>Chai aur react with {username}</h1>
      <p>This is para</p>
    </>

  )
}

export default App
