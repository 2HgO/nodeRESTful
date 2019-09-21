// contactController.js

const Contact = require('./contactModel');

exports.index = (req, res) => {
    Contact.get((err, contacts) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts successfully received",
            data: contacts,
        });
    });
};

exports.new = (req, res) => {
    let contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save((err) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'New contact created',
            data: contact,
        });
    });
};

exports.view = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Contact details loading...',
            data: contact,
        });
    });
};

exports.update = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err) {
            res.send(err);
        }
        contact.name = req.body.name ? req.bosy.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;

        contact.save((err) => {
            if (err) {
                res.json(err);
            }
            res.json({
                message: 'Contact info updated',
                data: contact,
            });
        });
    });
};

exports.delete = (req, res) => {
    Contact.remove({
        _id: req.params.contact_id
    }, (err, contact) => {
        if (err)
            res.send(err);
        res.join({
            status: "success",
            message: "Contact deleted",
        });
    });
};