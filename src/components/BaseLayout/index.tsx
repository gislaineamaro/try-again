import Sidebar from '../Sidebar';
import './BaseLayout.scss';

interface IBaseLayout {
  children: React.ReactNode | React.ReactNode[];
}

const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <div className="base-layout-container">
      <Sidebar />

      <main>{children}</main>
    </div>
  );
};

export default BaseLayout;
