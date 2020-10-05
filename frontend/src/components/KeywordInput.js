import React from 'react'

const KeywordInput = ({
     
     keyword,
     handleKeywordChange,
     handleSubmit
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='keywordinput'>
                
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