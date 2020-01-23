/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const axiosPromise = axios.get('https://api.github.com/users/jamcoding');
console.log(axiosPromise);

const entryPoint = document.querySelector('.cards');
console.log('entry', entryPoint);

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

axiosPromise.then(response => {
  console.log('res', response);
  console.log('res.data.avatar_url', response.data.avatar_url);
  console.log('res.data.name', response.data.name);
  console.log('res.data.login', response.data.login);
  console.log('res.data.location', response.data.location);
  console.log('res.data.html_url', response.data.html_url);
  console.log('res.data.html_url', response.data.html_url);
  console.log('res.data.followers', response.data.followers);
  console.log('res.data.following', response.data.following);
  console.log('res.data.bio', response.data.bio);

  // response.data.avatar_url.forEach()

})

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const createCard = () => {

  const card = document.createElement('div');
  const userImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  userImage.src = data.avatar_url;
  h3.textContent = data.name;
  username.textContent = data.login;
  location.textContent = data.location;
  profile.textContent = data.html_url;
  profileLink.href = data.html_url;
  followers.textContent = data.followers;
  following.textContent = data.following;
  bio.textContent = data.bio;

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  h3.classList.add('name');
  username.classList.add('username');

  card.appendChild(userImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  profile.appendChild(profileLink);

  return card;
  
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
