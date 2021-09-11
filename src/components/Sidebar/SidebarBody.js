import './SidebarBody.css'
import SidebarNav from './SidebarNav'

const SidebarBody = () => {


    return (
        <div className='sidebar-body'>
            <SidebarNav text='Home' />
            <SidebarNav text='Projects' />
            <SidebarNav text='Billing' />
            <SidebarNav text='Team Members' />
            <SidebarNav text='Stats' />
            <SidebarNav text='Settings' />

        </div>
    )
}

export default SidebarBody