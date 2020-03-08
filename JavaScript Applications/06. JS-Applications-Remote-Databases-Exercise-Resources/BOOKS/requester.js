const username = 'Poli';
const password = 'poli123';
const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_SyCR1uRVU';
const appSecret = 'e2d9f4d099ba46009f3e7807ece3aab2';

function makeHeaders(httpMethod, data){
    const headers = {
        method: httpMethod,
        headers: {
            'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
            'Content-type': 'application/json'
        }
    }

    if(httpMethod === 'POST' || httpMethod === 'PUT'){
        headers.body = JSON.stringify(data);
    }
    return headers;
}

function handleError(e){
    if(!e.ok){
        throw new Error(e.statusText);
    }
    return e;
}

function serializeData(x){
    return x.json();
}

function fetchData(kinveyModule, endPoint, headers){
    const url = `${baseUrl}/${kinveyModule}/${appKey}/${endPoint}`;
    return fetch(url, headers)
        .then(handleError)
        .then(serializeData)
}

export function get(kinveyModule, endPoint){
    const headers = makeHeaders('GET');
    return fetchData(kinveyModule, endPoint, headers);
}

export function post(kinveyModule, endPoint, data){
    const headers = makeHeaders('POST', data);
    return fetchData(kinveyModule, endPoint, headers);
}

export function put(kinveyModule, endPoint, data){
    const headers = makeHeaders('PUT', data);
    return fetchData(kinveyModule, endPoint, headers);
}

export function del(kinveyModule, endPoint){
    const headers = makeHeaders('DELETE');
    return fetchData(kinveyModule, endPoint, headers);
}