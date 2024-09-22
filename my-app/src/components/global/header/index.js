import { Outlet } from "react-router";

const Header = () => {
    return ( 
        <div>
            Header
            <Outlet/>
        </div>
     );
}
 
export default Header;