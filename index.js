console.log('Far Away Galaxy');
const peopleDiv = document.getElementById('people');
const peopleDes = document.getElementById('peepInfo')
const fetchSWPeople = async () => {
  const arrSWPeople = [];
  for(let i = 1; i < 31; i++) {
    const responce = await fetch(`https://swapi.co/api/people/${i}`)
    const people = await responce.json();
    arrSWPeople.push(people);
  }
  return arrSWPeople;
}

const renderPeople = async() => {
  const people = await fetchSWPeople();
    createListOfPeople(people)
}

const createListOfPeople = (people) => {
  const HTML =  `
    <ul>
      ${people.map(elem => `
      <li class="SWPeople" id=${elem.name}> ${elem.name}</li>`).sort().join('')}
    </ul>
  `;
   peopleDiv.innerHTML = HTML;
}

renderPeople()

peopleDiv.addEventListener('click', (event) =>{
  if (event.target.className === "SWPeople") {
 console.log(event.target)
}
});





