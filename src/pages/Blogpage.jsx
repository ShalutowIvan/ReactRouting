import {React, Suspense} from 'react';
// import { useState, useEffect } from 'react'
import { Link, useLocation, useSearchParams, useLoaderData, Await, data } from 'react-router-dom'

import { BlogFilter } from '../components/BlogFilter';





function Blogpage() {
	const {posts} = useLoaderData()


	// const [posts, setPosts] = useState([]);
	// console.log(useLocation());
	// const [searchParams, setSearchParams] = useSearchParams();

    // const postQuery = searchParams.get('post') || '';
    // const latest = searchParams.has('latest');

    // const startsFrom = latest ? 80 : 1;

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/posts')
	// 		.then(res => res.json())
	// 		.then(data => setPosts(data))
	// }, [])

	return (
		<div>
			<h1>Blogpage</h1>
			

			<h1><Link to="/posts/new">Создать пост</Link></h1>

			<Suspense fallback={<h2>Loading...</h2>}>
				<Await resolve={posts}>
					{
						(resolvedPosts) => (
							<>
								{
								resolvedPosts.map(post => (
									<Link key={post.id} to={`/posts/${post.id}`}>{/*это переход по ссылке Singlepage и он отрисовывает наш id*/}
										<li>{post.title}</li>{/*тут просто список постов*/}
									</Link>
								))
								}

							</>)
					}
				</Await>
			</Suspense>

			

			

		</div>
		)

}


async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	
	// if (!res.ok) {
	// 	throw new Response('', {status: res.status, statusText: 'Not Found'})
	// }
	// const contentLength = res.headers.get('Content-Length');
	// const contentLength = 1
	// const q = await res.json() 
	return res.json()
	
	// return res.text()
	// let num = [contentLength, res.json()]
	// return num
}



const blogLoader = async () => {
	// console.log({request, params})
	const posts = await getPosts()
	// console.log(posts.length)
	// posts.then( (massiv) => {		
	// 		console.log(massiv.length)
	// 		// if (massiv.length == 100) {
	// 		// 	throw data({message: 'not found', reason: 'неправильная ссылка'}, {status: 404})		
	// 		// }
	// 	}
	// 	)
	// console.log(data);
	// ps = posts[1]
	// let l = JSON.stringify(posts).length
	// console.log(l)
	// console.log(posts)
	// let num = JSON.stringify(posts)
	// let num = JSON.parse(posts)
	// console.log(posts["pending"])
	// console.log(a)

	if (!posts.length) {
		// console.log("ССЫЛКА не работает")
		throw data({message: 'not found', reason: 'неправильная ссылка'}, {status: 404})
	}

	return {
		posts
	}

	
}


export { Blogpage, blogLoader }
