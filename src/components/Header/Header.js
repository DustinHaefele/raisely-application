import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

class Header extends React.Component {
  
  state={
    navOpen: false,
  }

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }

  render() {
    return (
      <>
      <header className="appHeader" role="banner">
        <h1 className="Header-Logo">Raisely Application</h1>
        <FontAwesomeIcon icon="bars" className='nav-header' onClick={()=>this.toggleNav()}/>
      </header>
      {this.state.navOpen && <nav className="nav-drop nav">
          <ul className="nav-list">
            <li>
              <HashLink className='nav-link' smooth to='/#question-1' onClick={()=>this.toggleNav()}>
                  Why am I a good fit for this role?
              </HashLink>
            </li>
            <li>
              <HashLink className='nav-link' smooth to='/#question-2' onClick={()=>this.toggleNav()}>
                  Why do I want to work for Raisely?
              </HashLink>
            </li>
            <li>
              <HashLink className="nav-link" smooth to="/#question-3" onClick={()=>this.toggleNav()}>
                Task catigorization
              </HashLink>
            </li>
            <li>
              <HashLink className="nav-link" smooth to="/#question-4" onClick={()=>this.toggleNav()}>
              What platform solved a complex problem well?
              </HashLink>
            </li>
          </ul>
        </nav>}
      </>
    );
  }
}

export default Header;
