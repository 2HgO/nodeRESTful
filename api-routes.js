// api-routes.js

const router = require('express').Router();
const contactController = require('./contactController');

router.get('/', (req, res) => {
    res.json({
        status : 'Success',
        message : 'Welcome to RESThub carfted with love',
    });
});

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;