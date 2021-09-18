import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';

import './Sidebar.css'
import SidebarFooter from './SidebarFooter';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <SidebarHeader />
            <SidebarBody />
            {/* <SidebarFooter /> */}
        </div>
    );
}

export default Sidebar