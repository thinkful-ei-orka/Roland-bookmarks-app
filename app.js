// User Stories:

// I can add bookmarks to my bookmark list. Bookmarks contain:

// title
// url link
// description
// rating (1-5)
// I can see a list of my bookmarks when I first open the app

// All bookmarks in the list default to a "condensed" view showing only title and rating
// I can click on a bookmark to display the "detailed" view

// Detailed view expands to additionally display description and a "Visit Site" link
// I can remove bookmarks from my bookmark list

// I receive appropriate feedback when I cannot submit a bookmark

// Check all validations in the API documentation (e.g. title and url field required)
// I can select from a dropdown (a <select> element) a "minimum rating" to filter the list by all bookmarks rated at or above the chosen selection

// (Extension feature - optional) I can edit the rating and description of a bookmark in my list

/**
 * Example store structure
 */
// const store = {
//   bookmarks: [
//     {
//       id: 'x56w',
//       title: 'Title 1',
//       rating: 3,
//       url: 'http://www.title1.com',
//       description: 'lorem ipsum dolor sit',
//       expanded: false
//     },
//     {
//       id: '6ffw',
//       title: 'Title 2',
//       rating: 5,
//       url: 'http://www.title2.com',
//       description: 'dolorum tempore deserunt',
//       expanded: false
//     } 
//     ...
//   ],
//   adding: false,
//   error: null,
//   filter: 0
// };

// const store = {
//   bookmarks: [
//     {
//       id: '7ddr',
//       title: 'Title 11',
//       rating: 5,
//       url: 'http://www.title11.com',
//       description: 'lorem ipsum dolor',
//       expanded: true
//     }
//     ...
//   ],
//   adding: false,
//   error: null,
//   filter: 0
// };
/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
const AddBookmarkTemplate = function() {

return `<header>
<h1>My Bookmarks</h1>
</header>
<form class = "js-form-create form-create">
<label for="site-url">Add New Bookmark</label>
<input type="url" class="site-url js-site-url" placeholder="https://www.asite.cool/">
    <section class = "js-section-create section-create">
      <input type="text" class="site-name js-site-name" placeholder="D20 Modern">
      <!--we will rate our website with modified radio inputs-->
      <input type="button" class="cancel" value="Cancel">
      <input type="submit" class="create" value ="Create">
      <form class ="rating-form js-rating-form">
        <input type="radio" class ="1-star" name="rate-me" value="1">
        <label for="1-star">☆</label>
        <input type="radio" class ="2-stars" name="rate-me" value="2">
        <label for="2-stars">☆</label>
        <input type="radio" class ="3-stars" name="rate-me" value="3">
        <label for="3-stars">☆</label>
        <input type="radio" class ="4-stars" name="rate-me" value="4">
        <label for="4-stars">☆</label>
        <input type="radio" class ="5-stars" name="rate-me" value="5">
        <label for="5-stars">☆</label>
      </form>
    </section>
</form>`;
      
}
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
const render = function(obj) {
  if (store.error !== null) {
    errorTemplate(store.error);
  } else if (store.adding === true) {
    $('main').append(AddBookmarkTemplate());
  } else if (store.filter > 0) {
    filterResults(store.filter);
  }
  };
/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)




const handleDeleteBookmark = function() {

};

const handleExpandClickedBookmark = function() {

};

const handleNewBookmarkSubmit = function() {
  
};

const bindEventListeners = function() {
  $(getJSON());
};