import * as React from 'react'
let cat = [];


function AdvancedSearch(){

    const [categories, setCategory] = React.useState("");

    React.useEffect(async () => {

        // this list is WAY too long
        /*let response = await fetch(catsearch + client);
        if (response.status === 200) {
            cat = await response.json();
        }
        console.log(cat.categories)*/

        //so I condensed it to this for now
        cat = require('../Assets/Categories.json');

        console.log(cat.categories)
        setCategory(cat.categories)
    }, []);

    function getOption(){
    }

    /*
    function getOption() {
        let catcat = document.getElementById('Category').value
        console.log(games)
        let newGames = games
        console.log(newGames)
        if (games !== "") {
            console.log("catcat = ", catcat)

            //  loop through every game
            for (var key in newGames) {
                let people = false
                // similarly every ID in category and check
                for (var keys in newGames[key].categories) {
                    console.log(newGames[key].name)
                    console.log(newGames[key].categories[keys].id)
                    console.log(catcat)
                    console.log(catcat === newGames[key].categories[keys].id)
                    if (newGames[key].categories[keys].id == catcat) {
                        people = true;
                    }
                }

                if (people == false) {
                    console.log("deleting ", games[key].name)
                    delete newGames[key]
                }

            }
        }
        for (var key in newGames) {
            console.log(newGames[key].name);
        }
        // does not re-render page for some reason
        setGames(newGames)

    }
    */
    return(
        <div>
        <select name="Category" id="Category" onChange={getOption}>
            <option>Category</option>
            {categories !== "" ? categories.map(category => (
                <option value={category.id} >{category.name}</option>
            ))
                : null}
        </select>
        <input
            placeholder="Age range"
            id="searchBar"
            onChange={onChangeSearch}
        />
        <input
            placeholder="Number of players"
            id="searchBar"
            onChange={onChangeSearch}
        />
        <input
            placeholder="Number of players"
            id="searchBar"
            onChange={onChangeSearch}
        />
        </div>
    );

}

export default AdvancedSearch;
