import React from 'react'

function ButtonComp({ onClick, text, color, background, border, padding, width }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%", margin: "auto" }}>
            <button
                onClick={onClick}
                style={{ color: color, backgroundColor: background, border, padding, width, maxWidth: "400px" }}
                className={background ? 'btn' : 'btn btn-primary'}>
                {text}
            </button>
        </div>
    )
}

export default ButtonComp