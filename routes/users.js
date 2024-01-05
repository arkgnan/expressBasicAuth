const express = require('express')
const router = express.Router()

router.get('/list', function(req, res) {
    let sql = `SELECT * FROM users`;
    db.query(sql, function(err, data, fields) {
        if (err) throw err;
            res.json({
            status: 200,
            data,
            message: "User lists retrieved successfully"
        })
    })
})

router.post('/new', function(req, res) {
    let sql = `INSERT INTO users(name, gender) VALUES (?)`;
    // let sql = `INSERT INTO users(name, gender) VALUES ('${req.body.name}', ${req.body.gender})`;
    let values = [
      req.body.name,
      req.body.gender
    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        message: "New user added successfully"
      })
    })
});

module.exports = router