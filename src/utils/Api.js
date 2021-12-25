export default class Api {
    constructor(options){
        this._url = options.baseUrl
        this._headers = options.headers 
    }

    _errCheck(res) {
        if(res.ok) {
            return res.json()
        }

        return Promise.reject(`Ошибка API -> ${res.status}`)
    }




    getUserFromSrv() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._errCheck)
    }

    getInitialCards() {
       return fetch(`${this._url}/cards`, {
        method: 'GET',
        headers: this._headers
       })
       .then(this._errCheck)
    }

    patchProfile(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.job
            })
        })
        .then(this._errCheck)
    }

    sendNewImage(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(this._errCheck)
    }

    deleteCardFromSrv(data) {
        return fetch(`${this._url}/cards/${data._id}`, {
            method: 'DELETE',
            headers: this._headers})
        .then(this._errCheck)
    }


    sendLike(_id) {
        return fetch(`${this._url}/cards/likes/${_id}`, {
          method: 'PUT',
          headers: this._headers,
        })
          .then(this._errCheck)
      }

    deleteLike(_id) {
        return fetch(`${this._url}/cards/likes/${_id}`, {
          method: 'DELETE',
          headers: this._headers,
        })
          .then(this._errCheck)
    }

    avatarUpload(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar.avalink
            })
          })
            .then(this._errCheck)
    }

}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-29',
    headers: {
      authorization: '3496b6e0-46b4-4aa2-b181-96ef25d2619c',
      'Content-Type': 'application/json'
    }
  })