import React from 'react';

const SearchBox = ({searchChange}) =>{
	return (
        <main className="pa4 black-80 measure center">
            <div className = " pa2">
                <input type = 'search' className = 'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' onChange = {searchChange}/>
            </div>
        </main>

	)
}

export default SearchBox;