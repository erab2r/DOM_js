//where to add
const placesList = document.getElementById('places-list');
//what to be added
const li = document.createElement('li');
li.innerText ='pahartoli bon'
//add the child
placesList.appendChild(li);

// where to ad
const mainContainer = document.getElementById('main-container');
//what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Halim';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Borhani';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText = 'Borhani';
ul.appendChild(li4);
section.appendChild(ul);
mainContainer.appendChild(section);