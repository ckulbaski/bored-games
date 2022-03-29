import * as React from 'react';

function Search() {

    const [search, setSearch] = React.useState("");

    function onChangeSearch(event){
        setSearch(event.target.value);
    }

    console.log("Search!!!");

    return (
        <div>
            <form>
                <input type="text"
                    placeholder="Search"
                    id="searchBar"
                    onChange={onChangeSearch}
                    className="hello-world">
                </input>
            </form>
            <h3> {search} </h3>
        </div>
    );

}

export default Search;
