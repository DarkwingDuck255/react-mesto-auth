import React, {useEffect} from 'react';
// import image from '../images/image.jpg'
import {api} from '../utils/Api.js'
import Card from './Card.js';


export default function Main(props) {


    const [userInfo, setUserinfo] = React.useState({})
    const [cards, setCards] = React.useState([])
    useEffect(() =>{
        Promise.all([api.getUserFromSrv(), api.getInitialCards()])
            .then(([profile, card]) =>{
                setUserinfo(profile)
                setCards(card)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])
    
    return (<main>
        <section className="profile">
            <div className="profile__wrap">
                <button type="button" className="profile__avatar-edit-button" onClick={props.onEditAvatar}>
                    <img src={userInfo.avatar} className="profile__avatar avatar" alt={userInfo.name} />
                </button>
                <div className="profile__info">
                    <div className="profile__name-wrap">
                        <h1 className="profile__name">{userInfo.name}</h1>
                        <button className="profile__edit" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__description">{userInfo.about}</p>

                </div>
            </div>
            <button className="profile__add" type="button" onClick={props.onAddPlace}></button>
        </section>
        {/* <!--КАРТОЧКИ--> */}
        <section className="elements">
            {cards.map((card, _id) => (
                <Card
                    card={card}
                    key={_id}
                    link={card.link}
                    name={card.name}
                    likes={card.likes.length}
                    onCardClick={props.onCardClick}
                />
            ))}
            
        </section>
        
        
        {/* <!--ПОПАПЫ ФОРМ--> */}

        {/* <!-- Попап изменения аватара --> */}
        
        {/* <!-- Попап удаления карточки --> */}

    </main>
    )
}