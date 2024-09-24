/* eslint-disable react/prop-types */

import './NavBar.css'

const NavBar = ( {links}) => {
  // console.log(links)
  return (
    <div className="nav">
        <a href="#">Logo</a>
      <ul className='ul'>
  {
    links.map((link, index) => {
    return(
      <li key={index}><a href="#">{link.title}</a></li>
    )
    })
  }
      </ul>
    </div>
  );
}

export default NavBar;
