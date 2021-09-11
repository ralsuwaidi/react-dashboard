import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';

import './Sidebar.css'

const Sidebar = () => {

    return (
        <div className="sidebar">
            <SidebarHeader />
            <SidebarBody />
        </div>
    );
}

export default Sidebar