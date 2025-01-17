import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function Singlepage() {
	// console.log(useParams().id);
	const {id} = useParams();
	const [post, setPost] = useState(null);
	const navigate = useNavigate();

	const goBack = () => navigate(-1);
	const goHome = () => navigate('/', {replace: true});
	const goTest = () => navigate("/posts", {state: 123});

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(data => setPost(data))

	}, [id])

	return (
		<div>
			<button onClick={goBack}>Go back</button>
			<button onClick={goHome}>Go home</button>
			<button onClick={goTest}>Go Test</button>

			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
					<Link to={`/posts/${id}/edit`}>Редактировать</Link>
				</>
				)}
		</div>
		)

}






