import './SidebarNav.css'
import { FaFontAwesome, FaGem } from "react-icons/fa";


const SidebarNav = (props) => {

    const text = props.text

    return (
        <div className='sidebar-nav'>
            <FaFontAwesome icon="check-square" className='sidebar-nav__icon' />
            <div className='sidebar-nav__text'>{text}</div>
        </div>
    )
}

export default SidebarNav