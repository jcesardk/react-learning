import React, { useState } from 'react'

function ConditionalRender() {
    const [x] = useState("Jorge");

    return (
        <div>
            <h1>Condição será exibida aqui?</h1>
            {x && <p>Se x for true, Sim!</p>}
            {!x && <p>Se x for false, FALSO!</p>}
            {x === "Jorge" ? (
                <div>
                    <p>O nome é {x}</p>
                </div>
            ) : (
                <div>
                    <p>O nome é {x}</p>
                </div>
            )}
        </div>
    )
}

export default ConditionalRender