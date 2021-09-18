import './MainWindow.css'
import SearchBar from './SearchBar';

const MainWindow = () => {

    return (
        <div className="main">
            <SearchBar className=''/>
            <h1 className='main__title'>Hello Rashed</h1>
            <h3 className='main__subtitle'>Welcome Back</h3>
        </div>
    )

}

export default MainWindow