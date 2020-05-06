//access these functions every time the store is modified

const getItems = function() {
    fetch('https://api.github.com/users/andreacardybailey/repos')
      .then(response => response.json())
      // 👇 You MUST work with the data HERE 👇
      .then(jsonData => {
        getItems.obj(jsonData);
      })
      .catch(err => console.log(err));
  };

// const post = function() {
//     post https://thinkful-list-api.herokuapp.com/roland/bookmarks;
// }

// const patch = function() {
    
// }





