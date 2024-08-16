import logo from '../../assets/images/purple-logo.svg';

export const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <img className="sidebar-logo" src={logo} />

      <div className="sidebar-nav-items">
        <button className="nav-item"></button>
        <button className="nav-item"></button>
        <button className="nav-item"></button>
      </div>

      <div className="sidebar-user-menu">
        <button className="user-menu--loggout"></button>
        <button className="user-menu--user-icon"></button>
      </div>
    </aside>
  );
};