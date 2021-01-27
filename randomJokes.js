console.log('hi')
const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.querySelector('#newJokeBtn');
let punchline;
console.log(newJokeBtn);



const getPunchline = () => {
  punchlineDiv.innerHTML = punchline;
  punchlineDiv.classList.add('bubble');
  punchlineBtn.classList.toggle('hidden');
  newJokeBtn.classList.toggle('hidden');
}


const getJoke = async () => {
  const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
  const joke = await jokePromise.json();
  console.log(joke);
  //to get the setup info from the url
  setupDiv.innerHTML = joke[0].setup;
  punchline = joke[0].punchline;

  //clear punchlineDiv
  punchlineDiv.innerHTML = "";
  //remove class "bubble"
  punchlineDiv.classList.remove('bubble')

  punchlineBtn.classList.toggle('hidden');
  newJokeBtn.classList.toggle('hidden');
}

getJoke();

punchlineBtn.addEventListener('click', getPunchline);
newJokeBtn.addEventListener('click', getJoke)