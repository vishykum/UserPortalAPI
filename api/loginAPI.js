const express = require('express');
const router = express.Router();
const sendResponse = require('./sendResponse');
const pool = require('../config');

router.get('/', (req, res) => {
    if (!req.query.username) sendResponse(res, 400, "Username is required");

    else {
        pool.query('SELECT * FROM Users WHERE Username = ?;', [req.query.username], (err, results, fields) => {
            if (err) 
            {
            console.log(err);
            sendResponse(res, 400, "DB Error");
            }

            else {
                if(results.length === 1) sendResponse(res, 200, "Success", results);

                else sendResponse(res, 400, "User not found");
            }
        });

    }
})

module.exports = router;