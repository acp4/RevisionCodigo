/*
 Renombre las variables quitandole $
 coloque async en la funcion displayerUser
 Se modifico la ruta del css y js para el html
 simplifique la dirrecion url de la api declarando solo en una variable
 modificacion de comillas por apostrofe grabe 

*/


const url = 'https://api.github.com/users';
const n = document.querySelector('#name');
const b = document.querySelector('#blog');
const l = document.querySelector('.location');

async function displayUser(username) { //Se agrego async
  n.textContent = 'cargando...';
  const response = await fetch(username);
  const user= await response.json();
  console.log(user);
  n.textContent = `${user.name}`;
  b.textContent = `${user.blog}`;
  l.textContent = `${user.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser(url).catch(handleError);
