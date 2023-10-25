import AppCardMenu from './AppCardMenu';
import AppCardCorpo from './AppCardCorpo';
import AppFooter from './AppFooter';

const AppCard = () => {
    return (
        <div className="content">
            <AppCardMenu />
            <AppCardCorpo />
            <AppFooter />
        </div>
    );
};

export default AppCard;
