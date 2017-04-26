


// User.findOne({
//     where :{
//       username : req.body.username
//     }
//   })
//   .then((query)=>{
//     if(passHash.verify(req.body.username, query.password)){
//       var myToken = jwt.sign({username : query.username, access:query.access}, 'secret', {expiresIn : '1h'});
//       res.send({
//         'token' : myToken,
//         'user_id' : query.id,
//         'username' : query.username,
//         'name' : query.firstname+" "+query.lastname,
//         'access' : query.access
//       })
//     }else{
//       res.send('username or password is wrong')
//     }
//   }) 

// signin: (username, password, cb) => {
//     User.findOne({
//       username: username
//     }).exec(function(err, result) {
//       if (!result) {
//         cb({
//           success: false,
//           message: 'Authentication failed. User not found.',
//           error: err
//         });
//       } else if (result) {
//         if (passwordHash.verify(password, result.password)) {
//           cb(null, {
//             success: true,
//             message: 'Enjoy your token!',
//             token: jwthelpers.sign(result)
//           });
//         } else {
//           cb(null, {
//             message: 'Authentication failed. Wrong password.'
//           });
//         }
//       }
//     })
//   }
// }
