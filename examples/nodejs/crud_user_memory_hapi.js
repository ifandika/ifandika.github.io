// By Maulana Ifandika

// Before Run
// - Install NodeJs/NPM
// - Install Package Hapi (npm install @hapi/hapi)
// - Install Package Hapi/Inert ((npm install @hapi/inert))

const Hapi = require('@hapi/hapi');
const users = [];

const init = async function() {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  // GET Single User
  // Browser : http://localhost:3000/user/1
  // Terminal: curl -X GET http://localhost:3000/user/1
  server.route({
    method: 'GET',
    path: '/user/{id?}',
    handler: function(request, h) {
      console.log('GET: /users/{id}');
      if(!empty()) {
        const JSON_user = JSON.stringify(users[request.params.id]);
        return h.response(JSON_user).type('application/json').code(201);
      }
      else {
        return h.response('Users empty').code(500);
      }
    }
  });

  // GET ALL User
  // Browser : http://localhost:3000/users
  // Terminal: curl -X GET http://localhost:3000/users
  server.route({
    method: 'GET',
    path: '/users',
    handler: function(request, h) {
      console.log('GET: /users');
      if(!empty()) {
        const JSON_users = JSON.stringify(users);
        return h.response(JSON_users).type('application/json').code(201);
      }
      else {
        return h.response('Users empty').code(500);
      }
    }
  });

  // POST User
  // Browser : http://localhost:3000/users
  // Terminal: 
  //           curl --header "Content-Type: application/json" 
  //           --request POST 
  //           --data '{ "username": "Prabowo", "password": "Pb123" }'
  //           http://localhost:3000/users -i
  server.route({
    method: 'POST',
    path: '/users',
    handler: function(request, h) {
      console.log('POST: /users');
      const { username, password } = request.payload;
      if(username == "" || username == null) {
        console.log('Username must be not null');
        return h.response('Username must be not null').code(500);
      }
      if(password == "" || password == null) {
        console.log('Password must be not null');
        return h.response('Password must be not null').code(500);
      }
      else {
        var index = users.length-1;
        const new_user = {
          id: index,
          username: username,
          password: password
        };
        users.push(new_user);
        return h.response(JSON.stringify(new_user)).type('application/json').code(201);
      }
    }
  });

  // PUT User
  // Browser : http://localhost:3000/users
  // Terminal: 
  //           curl --header "Content-Type: application/json" 
  //           --request PUT
  //           --data '{ "username": "Prabowo", "password": "Pb123" }'
  //           http://localhost:3000/user/1 -i
  server.route({
    method: 'PUT',
    path: '/user/{id?}',
    handler: function(request, h) {
      console.log('PUT: /user/{id}');
      const { username, password } = request.payload;
      var id_user = Number(request.params.id);
      const new_user_data = {
        id: id_user,
        username: username,
        password: password
      };
      if(username == "" || username == null) {
        console.log('Username must be not null');
        return h.response('Username must be not null').code(500);
      }
      if(password == "" || password == null) {
        console.log('Password must be not null');
        return h.response('Password must be not null').code(500);
      }
      else {
        users[id_user] = new_user_data;
        console.log(new_user_data);
        return h.response(JSON.stringify(new_user_data)).type('application/json').code(201);
      }
    }
  });

  // DELETE User
  // Browser : http://localhost:3000/users
  // Terminal: 
  //           curl --header "Content-Type: application/json" 
  //           --request DELETE
  //           --data '{ "id": 1 }'
  //           http://localhost:3000/users -i
  server.route({
    method: 'DELETE',
    path: '/user',
    handler: function(request, h) {
      console.log('DELETE: /user');
      var id_user = Number(request.payload.id);
      if(id_user < 0) {
        console.log('Id must be not less zero');
        return h.response('Id must be not less zero').code(500);
      }
      else {
        const user_delete = users[id_user];
        delete users[id_user];
        users.splice(id_user, id_user+1);
        return h.response(JSON.stringify(user_delete)).type('application/json').code(201);
      }
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

// Add example User data
function examUser() {
  users.push({
    id: 99999,
    username: 'Ifandika',
    password: '123'
  })
}

// Check is Users empty
function empty() {
  return (users.length < 0);
}

examUser();
init();