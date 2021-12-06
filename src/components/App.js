// import logo from '../images/logo.svg';
import '../index.css';
import React from 'react';
import Header from './Header.js'
import Footer from  './Footer.js'
import Main from "./Main.js";
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import {api} from '../utils/Api.js'
import {CurrentUserContext} from "../contexts/CurrentUserContext";
// import Card from './Card';
import { useEffect } from 'react';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'




export function App() {
    const [isAvatarEditPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isDeletePlacePopupOpen, setDeletePlacePopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)
    const [currentUser, setCurrentUser] = React.useState({})
    const [cards, setCards] = React.useState([])


    useEffect(() =>{
        Promise.all([api.getUserFromSrv(), api.getInitialCards()])
            .then(([profile, card]) =>{
                setCurrentUser(profile)
                setCards(card)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])


    function handleEditAvatarPopupOpen() {
        setEditAvatarPopupOpen(true)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function handleDeletePlace() {
        setDeletePlacePopupOpen(true)
    }

    function handleisEditProfilePopupOpen() {
        setEditProfilePopupOpen(true)
    }

    function handleisAddPlacePopupOpen() {
        setAddPlacePopupOpen(true)
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false)
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setDeletePlacePopupOpen(false)
        setSelectedCard(null)
    }

    function closeByClickOnOverlay(evt) {
        if (evt.target.classList.contains('popup_open')) {
            closeAllPopups()
        }
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        if (!isLiked) {
            api.sendLike(card._id)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c)); 
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        else {
            api.deleteLike(card._id)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c)); 
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

    function handleCardDelete(card) {
        api.deleteCardFromSrv(card)
        .then(() => {
            setCards((aCard) => aCard.filter((c) => c._id !== card._id && c)); 
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function handleUpdateUser(data) {
        api.patchProfile(data)
        .then((user)=>{
            setCurrentUser(user)
            closeAllPopups()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function handleUpdateAvatar(data) {
        api.avatarUpload(data)
        .then((ava)=>{
            setCurrentUser(ava)
            closeAllPopups()
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    function handleAddPlaceSubmit(data) {
        api.sendNewImage(data)
        .then((newCard)=>{
            setCards([newCard, ...cards]);
            closeAllPopups()
        })
        .catch((err)=>{
            console.log(`не добавилась карточка${err}`)
        })
    }

    return (
        

        <CurrentUserContext.Provider value={currentUser}>
            <Header/>
            <Main
                onEditAvatar={handleEditAvatarPopupOpen}
                onEditProfile={handleisEditProfilePopupOpen}
                onAddPlace={handleisAddPlacePopupOpen}
                deletePlace={handleDeletePlace}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                cards={cards}
            />
            {/* попап автарки пользователя */}
            <EditAvatarPopup 
                isOpen={isAvatarEditPopupOpen} 
                onClose={closeAllPopups}
                onSubmit={handleUpdateAvatar} 
                onClickOnOverlay={closeByClickOnOverlay}
            /> 

            
            <Footer/>

            <EditProfilePopup 
                isOpen={isEditProfilePopupOpen} 
                onClose={closeAllPopups} 
                onSubmit={handleUpdateUser}
                onClickOnOverlay={closeByClickOnOverlay}
            />


            <PopupWithForm
                isOpen={isDeletePlacePopupOpen}
                onClose={closeAllPopups}
                onClickOnOverlay={closeByClickOnOverlay}
                form={'delete-card-from-srv'}
                title={'Вы уверены?'}
                buttonText={'Да'}
            />


            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onSubmit={handleAddPlaceSubmit}
                onClickOnOverlay={closeByClickOnOverlay}
            />
                                
            


            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
                onClickOnOverlay={closeByClickOnOverlay}
            />
            </CurrentUserContext.Provider>

    );
}

export default App;
