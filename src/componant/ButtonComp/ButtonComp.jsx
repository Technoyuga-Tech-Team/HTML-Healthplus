import React from 'react'

function ButtonComp({ text }) {
    return (
        <div>
            <button className='btn btn-primary'>
                {text}
            </button>
        </div>
    )
}

export default ButtonComp