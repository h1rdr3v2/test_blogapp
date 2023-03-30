const express = require("express")
const app = express()
const cors = require("cors")
const port = 4000

app.use(cors())
app.get("/", (req, res) => {
	res.json([
		{
			Country: "Nigeria",
			weather: "Rainy",
		},
		{
			Country: "Cambodia",
			weather: "Raining",
		},
	])
})

app.listen(port, () => {
	console.log(`Running on port ${port}`)
})
