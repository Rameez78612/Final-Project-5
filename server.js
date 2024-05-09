const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = 3000



app.get('/', (req, res) => {
  res.send('Artist #1: 100000000 Plays, Adyan Zahid Jamal Malik Mohammed!')
})

app.get('/all', (req, res) => {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./topsongs.db');

    db.serialize(() => {
        // Create a table
        ///db.run("CREATE TABLE IF NOT EXISTS students (name TEXT, age INTEGER, gpa REAL)");

        // Add a new entry to a table
        ///db.run("INSERT INTO students VALUES (?, ?, ?)", ["John", 21, 3.33]);

        // Get existing entries from a table individually
        ///db.each("SELECT * FROM students", (err, row) => {
        /// console.log(`${row.name} (${row.age}): ${row.gpa} GPA`);
        ///});

        ///// Get existing entries from a table as an array


        db.all("SELECT * FROM PopularSongs", (err, rows) => {
            res.json(rows)
        });

        // Update an existing entry in a table
        //db.run("UPDATE students SET (age=?, gpa=?) WHERE name=?", [22, 3.4, "John"]);

        // Delete an existing entry in a table
        //db.run("DELETE FROM students WHERE name=?", "John");
    });


    // Close the connection
    db.close();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

