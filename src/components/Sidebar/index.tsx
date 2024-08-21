import { MdLibraryAddCheck, MdLogout  } from 'react-icons/md';
import { BiSolidDashboard, BiSolidHome } from "react-icons/bi";

import logo from '@/assets/images/purple-logo.svg';

import './styles.scss';

export const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <img className="sidebar-logo" src={logo} />

      <div className="sidebar-nav-items">
        <button className="nav-item" title='Meus Projetos'>
          <BiSolidHome className="nav-item--icon"/>
        </button>
        <button className="nav-item" title='Último projeto'>
          <BiSolidDashboard className="nav-item--icon"/>
        </button>
        <button className="nav-item" title='Ações pendentes'>
          <MdLibraryAddCheck className="nav-item--icon"/>
        </button>
      </div>

      <div className="sidebar-user-menu">
        <button className="user-menu--loggout">
          <MdLogout className="nav-item--icon"/>
        </button>
        <button className="user-menu--user-icon"></button>
      </div>
    </aside>
  );
};