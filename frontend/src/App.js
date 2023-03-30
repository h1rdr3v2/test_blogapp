import "./App.css"
import { useState, useEffect } from "react"

function App() {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		fetch("http://localhost:4000/")
			.then((response) => response.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			})
			.catch((error) => {
				console.error("Error fetching data:", error)
				setLoading(false)
			})
	}, [])

	if (loading) {
		return <p>Loading data...</p>
	}

	return (
		<div>
			<h1>Feed!</h1>
			{data.posts.map((p) => (
				<div key={p.id}>
					<h4>Title: {p.title}</h4>
					<p>Body: {p.body}</p>
					<div>
						<span>Tags: </span>
						{p.tags.map((tag) => (
							<span>{tag} </span>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default App
