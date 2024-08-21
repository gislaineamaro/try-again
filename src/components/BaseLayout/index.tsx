import { Sidebar } from '../Sidebar';

import './styles.scss';

interface IBaseLayout {
  children: React.ReactNode | React.ReactNode[];
}

const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <div className="base-layout-container">
      <Sidebar />

      <main className='main-content-container'>{children}</main>
    </div>
  );
};

export default BaseLayout;
