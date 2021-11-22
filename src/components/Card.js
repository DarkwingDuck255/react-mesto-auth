import React from "react"



export default function Card(props) {

    function handleClick() {
        props.onCardClick(props.card)
    }

    return(
        
        <div className="element">
            <img src={props.link} alt={props.name} className="element__image" onClick={handleClick}/>
            <button type="button" className="element__delete" onClick={props.deletePlace}></button>
            <div className="element__description">
                <h2 className="element__text">{props.name}</h2>
                <div className="element__like-wrapper">
                    <button className="element__like" type="button"></button>
                    <div className="element__like-counter">{props.likes}</div>
                </div>
            </div>
        </div>

    )
}



