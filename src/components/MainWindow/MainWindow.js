import './MainWindow.css'
import SearchBar from './SearchBar';

const MainWindow = () => {

    return (
        <div className="main">
            <SearchBar className='' />
            <div>
                <h1 className='main__title'>Hello Rashed</h1>
                <h4 className='main__subtitle'>Welcome Back!</h4>
            </div>
            <div className='main__filter'>
                <p>Filters</p>
                
            </div>
        </div>
    )

}

export default MainWindow