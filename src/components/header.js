import React from 'react'

export default function Header(props) {
    return(
        <div>
            <button>Previous</button>
            <h2>{props.month}</h2>
            <button>Next</button>
        </div>
    )
}