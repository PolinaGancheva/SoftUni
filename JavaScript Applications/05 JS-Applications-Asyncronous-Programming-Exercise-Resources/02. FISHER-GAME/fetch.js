const baseUrl = `https://fisher-game.firebaseio.com/catches`;

export function catches() {
    return {
        get: () => fetch(`${baseUrl}.json`).then(r => r.json()),

        post: (data) => {
            return fetch(`${baseUrl}.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
        },

        del: (id) => {
            return fetch(`${baseUrl}/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .catch(console.error)
        },

        put: (id, data) => {
            return fetch(`${baseUrl}/${id}.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .catch(console.error)
        }
    }
}