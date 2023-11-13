import { useState } from "react"

export default function UserInput({input, handleInput}){


    return(
        <section id ="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input value={input.initInv}  onChange={(event) => handleInput('initInv', event.target.value)} type="number"/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={input.annInv}  onChange={(event) => handleInput('annInv', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={input.expRet}  onChange={(event) => handleInput('expRet', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={input.duration}  onChange={(event) => handleInput('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}