import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useLocation, NavLink, useNavigate, Navigate, useSearchParams } from 'react-router-dom'
import { BlogFilter } from '../components/BlogFilter';





export default function Blogpage() {
	const [posts, setPosts] = useState([]);
	// console.log(useLocation());
	// const [searchParams, setSearchParams] = useSearchParams();

    // const postQuery = searchParams.get('post') || '';
    // const latest = searchParams.has('latest');

    // const startsFrom = latest ? 80 : 1;

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data))
	}, [])

	return (
		<div>
			<h1>Blogpage</h1>
			

			<h1><Link to="/posts/new">Создать пост</Link></h1>

			

			{
				posts.map(post => (
						<Link key={post.id} to={`/posts/${post.id}`}>{/*это переход по ссылке Singlepage и он отрисовывает наш id*/}
							<li>{post.title}</li>{/*тут просто список постов*/}
						</Link>
					))
			}

		</div>
		)

}


