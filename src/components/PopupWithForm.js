import React from "react";

export default function PopupWithForm(props) {
    return(
        <>
            <div className={`popup ${props.isOpen ? `popup_open`: ""}`} id={`${props.name}-popup`}>
                <div className="popup__container">
                    <form className="popup__content popup__form" name={props.form} noValidate autoComplete="off">
                        <h2 className="popup__header">{props.title}</h2>
                        {props.children}
                        <button type="submit " className="popup__submit popup__button">{props.buttonText}</button>
                        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
                    </form>
                </div>
            </div>

            {/* <div className="popup" id="profile-popup">
                <div className="popup__container">
                    <form className="popup__content popup__form" name="popup" noValidate autoComplete="off">
                        <h2 className="popup__header">Редактировать профиль</h2>
                        <input type="text" className="popup__name popup__input" name="username" id="name" value=""
                            maxLength="40" minLength="2" required/>
                        <span className="popup__name-error"></span>
                        <input type="text" className="popup__name popup__input" name="job" id="job" value=""
                            maxLength="200" minLength="2" required/>
                        <span className="popup__job-error"></span>
                        <button type="submit " className="popup__submit popup__button">Сохранить</button>
                        <button className="popup__close-button" id='profile-popup-close-button' type="button"></button>
                    </form>
                </div>
            </div>

            <div className="popup" id="add-image-popup">
                <div className="popup__container">
                    <form className="popup__content popup__form" name="add-image" id="new-image-form"
                        autoComplete="off">
                        <h2 className="popup__header">Новое место</h2>
                        <input type="text" className="popup__name popup__input" name="name" id="new-card-title" value=""
                            placeholder="Название" maxLength="30" minLength="2" required/>
                        <span className="popup__new-card-title-error"></span>
                        <input type="url" className="popup__name popup__input" name="link" id="new-card-link" value=""
                            placeholder="Ссылка на картинку" required/>
                        <span className="popup__new-card-link-error"></span>
                        <button type="submit" className="popup__submit popup__button" id="submit-new-card">Создать
                        </button>
                        <button className="popup__close-button" id="add-card-close" type="button"></button>
                    </form>
                </div>
            </div>

            <div className="popup" id="avatar-popup">
                <div className="popup__container">
                    <form className="popup__content popup__form" name="update-avatar" id="update-avatar"
                        autoComplete="off">
                        <h2 className="popup__header">Обновить аватар</h2>
                        <input type="url" className="popup__name popup__input" name="avalink" id="avalink" value=""
                            placeholder="Ссылка на картинку" required/>
                        <span className="popup__avalink-error"></span>
                        <button type="submit" className="popup__submit popup__button">Сохранить</button>
                        <button className="popup__close-button" type="button"></button>
                    </form>
                </div>
            </div>

            <div className="popup" id="confirmation-popup">
                <div className="popup__container">
                    <form className="popup__content popup__form" name="delete-card-from-srv" id="delete-card-from-srv"
                        noValidate>
                        <h2 className="popup__header">Вы уверены?</h2>
                        <button type="submit" className="popup__submit popup__button">Да</button>
                        <button className="popup__close-button" id="delete-confirmation-cancel" type="button"></button>
                    </form>
                </div>
            </div> */}
        </>
    )
}