import { Outlet } from 'react-router-dom';
import AppCardMenu from './AppCardMenu';
import AppFooter from './AppFooter';

const AppCard = () => {
    return (
        <div className="content">
            <AppCardMenu />
            <Outlet />
            <AppFooter />
        </div>
    );
};

export default AppCard;
