import './Searchbar.css'

function Searchbar({ placeholdder = 'Text' }) {
    return (
        <div className="searchbar">
            <input type="text" className="search-input" placeholder={placeholdder} />
            <button className="search-button">
                <img src="./src/assets/search-icon.png" alt="" className="search-icon" />
            </button>
        </div>
    )
}

export default Searchbar