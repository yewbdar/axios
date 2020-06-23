// Performing a GET request
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

// Requests will be executed in parallel...
axios.all([
    axios.get('https://user...'),
    axios.get('https://Permissions...')])
         .then(axios.spread(function (userResponse, permissResponse) {
    //... but this callback will be executed only when both requests are complete.
    console.log('User', userResponse.data);
    console.log('Repositories', permissResponse.data);
  }));


// Performing a POST request
axios.post('/user', {
    firstName: 'yo',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });