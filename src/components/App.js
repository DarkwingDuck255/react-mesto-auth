// import logo from '../images/logo.svg';
import '../index.css';
import React from 'react';
import Header from './Header.js'
import Footer from  './Footer.js'
import Main from "./Main.js";
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';




export function App() {
    const [isAvatarEditPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isDeletePlacePopupOpen, setDeletePlacePopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)


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



    return (
        

        <>
            <Header></Header>
            <Main
                onEditAvatar={handleEditAvatarPopupOpen}
                onEditProfile={handleisEditProfilePopupOpen}
                onAddPlace={handleisAddPlacePopupOpen}
                deletePlace={handleDeletePlace}
                onCardClick={handleCardClick}
            />
            {/* попап автарки пользователя */}
            <PopupWithForm
                isOpen={isAvatarEditPopupOpen}
                onClose={closeAllPopups}
                form={'update-avatar'}
                title={'Обновить аватар'}
                buttonText={'Сохранить'}

                children={(
                    <>
                        <input 
                            type='url'
                            className='popup__name popup__input'
                            name="avalink"
                            id="avalink"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span className="popup__avalink-error"/>
                    </>
                )}
            />

            
            <Footer></Footer>
            

            <PopupWithForm
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                form={'popup'}
                title={'Редактировать профиль'}
                buttonText={'Сохранить'}

                children={(
                    <>
                        <input 
                            type='text'
                            className='popup__name popup__input'
                            name="username"
                            id="name"
                            maxLength="40"
                            minLength="2"
                            placeholder='Твое имя, странник?'
                            required
                        />
                        <span className="popup__name-error"/>

                        <input 
                            type='text'
                            className='popup__name popup__input'
                            name="job"
                            id="job"
                            maxLength="200"
                            minLength="2"
                            placeholder='Кто ты, воин?'
                            required
                        />

                        <span className="popup__job-error"/>

                    </>
                )}
            />


            <PopupWithForm
                isOpen={isDeletePlacePopupOpen}
                onClose={closeAllPopups}
                form={'delete-card-from-srv'}
                title={'Вы уверены?'}
                buttonText={'Да'}
            />

            <PopupWithForm
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                form={'add-image'}
                title={'Новое место'}
                buttonText={'Создать'}

                children={(
                    <>
                        <input 
                            type='text'
                            className='popup__name popup__input'
                            name="name"
                            id="new-card-title"
                            maxLength="30"
                            minLength="2"
                            placeholder='Название'
                            required
                        />
                        <span className="popup__new-card-title-error"/>

                        <input 
                            type='url'
                            className='popup__name popup__input'
                            name="link"
                            id="new-card-link"
                            placeholder='Ссылка на картинку'
                            required
                        />

                        <span className="popup__new-card-link-error"/>

                    </>
                )}
            />


            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </>

    );
}

export default App;
