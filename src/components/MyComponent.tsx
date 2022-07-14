import { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

const MyComponent = () => {


    const value = useContext(StoreContext)

    return ( <>
    <div className="bg-blue-400">
        <h1>My Componentss</h1>
        <h2>User: Name</h2>
        <button className="bg-purple-200 m-1">Logout</button>
        <button className="bg-purple-200 m-1">Login</button>

        <hr></hr>

        <h2>Products</h2>

        <ul>
            <li>Title</li>
        </ul>

        <button className="bg-purple-200 m-1"> Delete all </button>
        <button className="bg-purple-200 m-1"> Change </button>
        
    </div>
    </> );
}
 
export default MyComponent;