console.log('Far Away Galaxy');
const peopleDiv = document.getElementById('people');
const peopleDes = document.getElementById('peepInfo')
const fetchSWPeople = async () => {
  const arrSWPeople = [];
  for(let i = 1; i < 88; i++) {
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

 // Indent a little off
 for (let person of people) {
   const listItems = createListItems(person);
   list.appendChild(listItems);
 }

 peopleDiv.appendChild(list);
}

// Missing semicolons
const createListItems = (person) => {
  const listItems = document.createElement('li')
  listItems.classList.add('SWPeople')
  listItems.textContent = `${person.name}`
  listItems.addEventListener('click', (event) => {

  event.target.style.fontWeight = 'bold'

  // Good thought, but I don't think you need to clear it if you're setting the innerHTML anyway!
  clearDes()
  createPersonDes(person)
  })

  return listItems
}

// Good thinking in filtering out the keys that are nested objects!
const createPersonDes = (person) => {
 peopleDes.innerHTML =
 `
   ${Object.keys(person).filter(key => key !== 'films' && key !== 'vehicles' && key !== 'starships')
       .map(key => `<div>${key} ${person[key]}<div>`).filter(key => key !== 'films').join('')}
       `

}

const clearDes = () => {
  if (peopleDes.firstChild) {
    peopleDes.firstChild.remove()
  }
}

renderPeople()
