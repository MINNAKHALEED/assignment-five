
import NavBar from '../NavBarcomponent/NavBar';

import './Header.css'

const Header = () => {

const links = [
  {title : "HOME"},
  {title : "SHOP"},
  {title : "CONTACT"},

]

  return (
    <div className="header">
    <NavBar links={links}/>
    </div>
  );
}

export default Header;
