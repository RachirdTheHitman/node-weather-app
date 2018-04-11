var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Richard'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
  // callback(user);
};

getUser(11, (userObject) => {
  console.log(userObject);
});
