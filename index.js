console.log('Far Away Galaxy');
const peopleDiv = document.getElementById('people');
const peopleDes = document.getElementById('peepInfo')
const fetchSWPeople = async () => {
  const arrSWPeople = [];
  for(let i = 1; i < 31; i++) {
    const responce = await fetch(`https://swapi.co/api/people/${i}/`)
    const people = await responce.json();
    arrSWPeople.push(people);
  }
  return arrSWPeople;
}

const renderPeople = async() => {
  const people = await fetchSWPeople();
    createList(people)
}

const createList = (people) => {
 const list = document.createElement('ul');

 for (let person of people) {
   const listItems = createListItems(person);
   list.appendChild(listItems);
 }

 peopleDiv.appendChild(list);
}

const createListItems = (person) => {
  const listItems = document.createElement('li')
  listItems.classList.add('SWPeople')
  listItems.textContent = `${person.name}`
  listItems.addEventListener('click', (event) => {

  event.target.style.fontWeight = 'bold'

  clearDes()
  createPersonDes(person)
  })

  return listItems
}

const createPersonDes = (person) => {
 peopleDes.innerHTML =
 `
   ${Object.keys(person)
       .map(key => `<div>${key} ${person[key]}<div>`).join('')}
       `

}

const clearDes = () => {
  if (peopleDes.firstChild) {
    peopleDes.firstChild.remove()
  }
}
