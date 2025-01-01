import React from 'react'

function ButtonComp({ text, color, background, border }) {
    return (
        <div>
            <button
                style={{ color: color, backgroundColor: background, border }}
                className={background ? 'btn' : 'btn btn-primary'}>
                {text}
            </button>
        </div>
    )
}

export default ButtonComp