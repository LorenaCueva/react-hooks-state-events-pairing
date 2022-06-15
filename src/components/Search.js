function Search({onSearch}){

    function handleSearch(e){
        onSearch(e.target.value);
    }

    return(
        <form>
            <input type="text" placeholder="Search username..." onChange={handleSearch}/>
        </form>
    );
}

export default Search;