import './App.css';
import Nav from './component/Nav';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Foot from './component/foot';
import Signup from './component/signup';
function App() {
    return ( 
        <div className ="App">
        <Router>
            <Nav />
            <Routes>
            
            <Route path="/" element={<h1> product listing component </h1>} />     
            <Route path="/add" element={<h1> add product component </h1>} />   
            <Route path="/update" element={<h1> update product component </h1>} />  
            <Route path="/logout" element={<h1> logout component </h1>} />
            <Route path="/profile" element={<h1> profile component </h1>} />
            <Route path="/signup" element={<Signup /> } />
            </Routes>
            
        </Router>
        <Foot />
        
        
        </div>
        
    );
}
export default App; 