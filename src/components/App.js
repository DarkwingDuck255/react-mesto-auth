// import logo from '../images/logo.svg';
import '../index.css';
import React from 'react';
import Header from './Header.js'
import Footer from  './Footer.js'
import Main from "./Main.js";
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';




export function App() {
    const [avatarEditPopupOpen, isEditAvatarPopupOpen] = React.useState(false)
    const [editProfilePopupOpen, isEditProfilePopupOpen] = React.useState(false)
    const [addPlacePopupOpen, isAddPlacePopupOpen] = React.useState(false)
    const [deletePlacePopupOpen, isDeletePlacePopupOpen] = React.useState(false)
    const [selectedCard, setselectedCard] = React.useState(null)


    function handleEditAvatarPopupOpen() {
        isEditAvatarPopupOpen(true)
    }

    function handleCardClick(card) {
        setselectedCard(card)
    }

    function handleDeletePlace() {
        isDeletePlacePopupOpen(true)
    }

    function handleEditProfilePopupOpen() {
        isEditProfilePopupOpen(true)
    }

    function handleAddPlacePopupOpen() {
        isAddPlacePopupOpen(true)
    }

    function closeAllPopups() {
        isEditAvatarPopupOpen(false)
        isEditProfilePopupOpen(false)
        isAddPlacePopupOpen(false)
        isDeletePlacePopupOpen(false)
        setselectedCard(null)
    }



    return (
        

        <>
            <Header></Header>
            <Main
                onEditAvatar={handleEditAvatarPopupOpen}
                onEditProfile={handleEditProfilePopupOpen}
                onAddPlace={handleAddPlacePopupOpen}
                deletePlace={handleDeletePlace}
                onCardClick={handleCardClick}
            />
            {/* попап автарки пользователя */}
            <PopupWithForm
                isOpen={avatarEditPopupOpen}
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
                isOpen={editProfilePopupOpen}
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
                isOpen={deletePlacePopupOpen}
                onClose={closeAllPopups}
                form={'delete-card-from-srv'}
                title={'Вы уверены?'}
                buttonText={'Да'}
            />

            <PopupWithForm
                isOpen={addPlacePopupOpen}
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


            <PopupWithImage
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </>

    );
}

export default App;
