'use strict';

module.exports = (app, db) => {

  // GET all workflowsetups
  app.get('/workflowsetups', (req, res) => {
    db.workflowsetup.findAll()
      .then(workflowsetups => {
        res.json(workflowsetups);
      });
  });

  // GET one workflowsetup by id
  app.get('/workflowsetup/:id', (req, res) => {
    const id = req.params.id;
    db.workflowsetup.find({
      where: { id: id}
    })
      .then(workflowsetup => {
        res.json(workflowsetup);
      });
  });

  // POST single workflowsetup
  app.post('/workflowsetup', (req, res) => {
    const name = req.body.name;
    const role = req.body.role;
    db.workflowsetup.create({
      name: name,
	  password:password,
      role: role
    })
      .then(newworkflowsetup => {
        res.json(newworkflowsetup);
      })
  });

  // PATCH single workflowsetup
  app.patch('/workflowsetup/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.workflowsetup.find({
      where: { id: id }
    })
      .then(workflowsetup => {
        return workflowsetup.updateAttributes(updates)
      })
      .then(updatedworkflowsetup => {
        res.json(updatedworkflowsetup);
      });
  });

  // DELETE single workflowsetup
  app.delete('/workflowsetup/:id', (req, res) => {
    const id = req.params.id;
    db.workflowsetup.destroy({
      where: { id: id }
    })
      .then(deletedworkflowsetup => {
        res.json(deletedworkflowsetup);
      });
  });
};