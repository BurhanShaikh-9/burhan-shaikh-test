import React from 'react'

const Button = ({ text, type, icon }) => {
    if (type == 1) {
        return (

            <button className='btn1'>

                {icon && <span className="btn-icon">{icon}</span>}
                <span>
                    {text}
                </span>
            </button>

        )
    }
    return (

        <button className='btn1'>
            {icon && <span className="btn-icon">{icon}</span>}
            <span>
                {text}
            </span>
        </button>

    )
}

export default Button
