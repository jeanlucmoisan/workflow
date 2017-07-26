'use strict';

module.exports = (app, db) => {

  // GET all users
  app.get('/users', (req, res) => {
    db.user.findAll()
      .then(users => {
        res.json(users);
      });
  });

  // GET one user by id
  app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    db.user.find({
      where: { id: id}
    })
      .then(user => {
        res.json(user);
      });
  });

  // POST single user
  app.post('/user', (req, res) => {
    const name = req.body.name;
    const role = req.body.role;
    db.user.create({
      name: name,
	  password:password,
      role: role
    })
      .then(newuser => {
        res.json(newuser);
      })
  });

  // PATCH single user
  app.patch('/user/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.user.find({
      where: { id: id }
    })
      .then(user => {
        return user.updateAttributes(updates)
      })
      .then(updateduser => {
        res.json(updateduser);
      });
  });

  // DELETE single user
  app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    db.user.destroy({
      where: { id: id }
    })
      .then(deleteduser => {
        res.json(deleteduser);
      });
  });
};