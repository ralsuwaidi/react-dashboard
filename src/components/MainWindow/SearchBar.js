import './SearchBar.css'


const SearchBar = () => {

    return (
        <div>

<form action="" class="search-bar">
	<input type="search" name="search" pattern=".*\S.*" required></input>
	<button class="search-btn" type="submit">
		<span>Search</span>
	</button>
</form>
        </div>
    )

}

export default SearchBar