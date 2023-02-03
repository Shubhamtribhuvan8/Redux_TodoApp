import './App.css';
// import Input from './A/Input';
// import City from './A/City';
// import Country from './A/Country';
// import Api from './A/Api';
// import PostRequest from './A/PostRequest';
// import DeleteData from './A/DeleteData';
// import Result from './A/Result';
import Navbar from './Routes/Navbar';
import RoutesComp from './Routes/RoutesComp';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 style={{color:"Red",fontWeight:"bold"}}>Hello Redux</h1>
      <RoutesComp/>
    </div>
  );
}

export default App;