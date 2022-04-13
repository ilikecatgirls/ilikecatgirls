const express = require('express');
const fs = require('fs');
const app = require('express')();
const PORT = 8080;

app.use( express.json() )


app.listen(
    PORT,
    () => console.log(`App Runnig on port ${PORT}. AKA http://localhost:${PORT}`)
);
app.get("/rein", (req, res) => {
    res.status(200).send({
        tshirt: 'HI rei.',
        size: 'a'
    });
});

app.post('/changefile/:name', (req, res) => {
    const { name } = req.params;
    const { contents } = req.body;
    const aaa = name.replace(/:/g, "")
    fs.writeFileSync(aaa, contents)
    res.status(200).send({message: `Successfully changed file ${aaa} with new contents ${contents}`})
})
app.post('/item/:id', (req, res) => { // testing thinggg
    const { name } = req.params;
    const { logo } = req.body;
    if (!logo) {
        res.status(418).send({ message: "failed to get item name"})
    }
    res.send({
        tshirt: `[item] with specified ${name} and ID of ${id}`,
    });
});
