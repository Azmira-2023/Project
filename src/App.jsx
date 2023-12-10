import './App.css'
import Shop from './components/Shop/Shop'
import Category from './components/CategoryList/Category'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {/* <Header></Header>
      <Shop></Shop> */}

<BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Shop />} />
          <Route exact path="/category/:name" element={<Category />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App