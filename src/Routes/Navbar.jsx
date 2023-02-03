import { Link } from 'react-router-dom'
function Navbar() {
    return(
        <div className = "navbar" style={{display:"flex",alignItems:"center",gap:"20px",justifyContent:"center"}}>
     <Link to="/"><h1>Home</h1></Link>
     <Link to="/Todo"><h1>Todo</h1></Link>
     <Link to="/TodoShow"><h1>TodoShow</h1></Link>
     <Link to="/Other"><h1>Other</h1></Link>
        </div>
    )
}
export default Navbar