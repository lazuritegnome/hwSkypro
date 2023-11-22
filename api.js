// const host = 'https://webdev-hw-api.vercel.app/api/v2/todos'

let password = prompt('Введите пароль');



export function getToDos() {
    return fetch('https://webdev-hw-api.vercel.app/api/v2/todos', {
        method: "GET",
        headers: {
            Authorization: password,
        },
    })
        .then((response) => {
            if (response.status === 401) {
                password = prompt('Введите верный пароль');
                getToDos();
                throw new Error('нет авторизации');
            }
            return response.json();
        })
}

export function deleteToDo({ id }) {
    return fetch('https://webdev-hw-api.vercel.app/api/v2/todos/' + id, {
        method: "DELETE",
        headers: {
            Authorization: password,
        }
    })
        .then((response) => {
            return response.json();
        })
}
export function postToDo({ text }) {
    return fetch('https://webdev-hw-api.vercel.app/api/v2/todos', {
        method: "POST",
        body: JSON.stringify({
            text: text,
        }),
        headers: {
            Authorization: password,
        }
    })
        .then((response) => {
            return response.json();
        })
}