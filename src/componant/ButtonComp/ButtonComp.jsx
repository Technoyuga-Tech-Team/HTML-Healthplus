import React from 'react'

function ButtonComp({ loader, disabled, onClick, text, color, background, border, padding, width }) {
    console.log("loader", loader);

    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%", margin: "auto" }}>
            <button
                disabled={disabled || disabled}
                onClick={onClick}
                style={{ color: color, backgroundColor: background, border, padding, width, maxWidth: "400px" }}
                className={background ? 'btn' : 'btn btn-primary'}>
                {loader ? "Loading..." : text}
            </button>
        </div>
    )
}

export default ButtonComp