console.log('Far Away Galaxy')
const peopleDiv = document.querySelector('#people')

const testFetch = async () => {
  for (let i = 1; i < 31; i++)
    {
     const response = await fetch(`https://swapi.co/api/people/${i}/`);
     const people = await response.json();
   }
   return people
}
testFetch()

