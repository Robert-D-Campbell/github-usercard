/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "rleslie1015",
  "Cireimu",
  "NadeemAnvaritafti",
  "lflores0214",
  "primelos"
];
followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`).then(res => {
    console.log(res);
    let cards = document.querySelector(".cards");
    const newFollower = githubCard(res.data);
    cards.appendChild(newFollower);
  });
});

//axios call
axios.get("https://api.github.com/users/Robert-D-Campbell").then(res => {
  let cards = document.querySelector(".cards");
  const newCard = githubCard(res.data);
  console.log(newCard);
  cards.prepend(newCard);
});
//!axios call

function githubCard(data) {
  //declare variables of html structure
  const card = document.createElement("div"),
    cardImg = document.createElement("img"),
    cardInfo = document.createElement("div"),
    cardName = document.createElement("h3"),
    cardUsername = document.createElement("p"),
    cardLoc = document.createElement("p"),
    cardProfile = document.createElement("p"),
    cardProfileLink = document.createElement("a"),
    cardFollowers = document.createElement("p"),
    cardFollowing = document.createElement("p"),
    cardBio = document.createElement("p");
  //!declare variables of html structure
  //setup structure of html element
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUsername);
  cardInfo.appendChild(cardLoc);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(cardProfileLink);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);
  //!setup structure of html element
  //add classes to variables
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardUsername.classList.add("username");
  //!add classes to variables

  //link data to html page
  console.log(data.avatar_url);
  cardImg.src = data.avatar_url;
  cardName.textContent = data.name;
  cardUsername.textContent = data.login;
  cardLoc.textContent = `Location: ${data.location}`;
  cardProfileLink.textContent = `Profile: ${data.html_url}`;
  cardFollowers.textContent = `Followers: ${data.followers}`;
  cardFollowing.textContent = `Following: ${data.following}`;
  cardBio.textContent = `Bio: ${data.bio}`;
  //!link data to html page
  return card;
}
