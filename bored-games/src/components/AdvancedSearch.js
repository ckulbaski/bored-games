import * as React from 'react'
let cat = [];


function AdvancedSearch(props){

    const [categories, setCategory] = React.useState("");

    const onChangeCat = (event) =>{
        props.setCategory(event.target.value);
    }
    const onChangeAge = (event) =>{
        props.setAgeRange(event.target.value);
    }
    const onChangeNum = (event) =>{
        props.setNumPlayers(event.target.value);
    }
    const onChangeComplex = (event) =>{
        props.setComplexity(event.target.value);
    }

    React.useEffect(async () => {

        // this list is WAY too long
        /*let response = await fetch(catsearch + client);
        if (response.status === 200) {
            cat = await response.json();
        }
        console.log(cat.categories)*/

        //so I condensed it to this for now
        cat = require('../Assets/Categories.json');

        //console.log(cat.categories)
        setCategory(cat.categories)
    }, []);


    return(
        <div>
        <div>
        <select name="Category" id="Category" onChange={onChangeCat}>
            <option>Category</option>
            {categories !== "" ? categories.map(category => (
                <option value={category.id} >{category.name}</option>
            ))
                : null}
        </select>
        </div>
        <div>
        <input
            placeholder="Minimum age"
            onChange={onChangeAge}
        />
        </div>
        <div>
        <input
            placeholder="Number of players"
            onChange={onChangeNum}
        />
        </div>
        <div>
        <input
            placeholder="Difficulty (1-5)"
            onChange={onChangeComplex}
        />
        </div>
        </div>
    );

}

export default AdvancedSearch;
