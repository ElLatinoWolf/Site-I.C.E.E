const url = 'login.html';
let todos = [];

function getItens() {
    fetch(url)
        .then(response => response.json())
        .then(date => _displayItens(data))
        .catch(error => console.error('Unable to get Itens.', error));
}


