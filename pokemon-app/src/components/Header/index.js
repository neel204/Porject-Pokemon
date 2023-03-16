import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="Pokemon logo"
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIfaDXLS-l2pYwiz5QEJC92Tvv4vn3NBGX0B--9RmWcTgop7PhEvJGgrLJGcZ1TugSWM&usqp=CAU"
      />
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <a className="route-link" href="#section1">
          Home
        </a>
      </li>
      <li className="link-item">
        <a className="route-link" href="#section2">
          About
        </a>
      </li>
    </ul>
  </nav>
)

export default Header
