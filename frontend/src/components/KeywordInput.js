import React from 'react'

const KeywordInput = ({
     handleSearch,
     keyword,
     handleKeywordChange
}) => {
    return (
        <form onSubmit={handleSearch}>
            <div className='keywordinput'>
                <h2>Search the recent movies you have watched!</h2>
                <input
                type = "text"
                value = {keyword}
                onChange = {handleKeywordChange}
               />
            </div>
            <button type = "submit">Search</button>
        </form>
    )
}

export default KeywordInput