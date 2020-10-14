import React from 'react'

const AddList = ({
       handleSubmit,
       
}) => {
    return (
        <div>
            <button onSubmit={handleSubmit} type ="submit">Add to Your Collection!</button>
        </div>
    )
}
export default AddList