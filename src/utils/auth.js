export const baseUrl = 'https://auth.nomoreparties.co'


function errCheck(res) {
    if(res.ok) {
        return res.json()
    }

    return Promise.reject(`Ошибка API -> ${res.status}`)
}


export function register(email, password) {
    return fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
    .then(errCheck)
}

// export function login(email, password) {
//     return fetch(`${baseUrl}/signin`, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({email, password})
//     })
//     .then((res) => {
//         if(res) {
//             localStorage.setItem('token', res.token)
//         }
//     })
//     .then(errCheck)
// }

export const login = ({email, password}) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      
      "email": email,
      "password": password
    })
  })
  .then((res) => {
    return errCheck(res)
  })
  .then((data) => {
    if (data) {
      localStorage.setItem('token', data.token);
    }
    // console.log(data)
    return data;
    
  })
}

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
  .then((res) => {
    return errCheck(res)
  })
  .then(({data}) => {
    return (data)
  })
}