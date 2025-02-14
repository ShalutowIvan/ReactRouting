import NewPost from '../components/NewPost'
import { redirect, useNavigation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'






function Createpost() {
	const {signout} = useAuth()
	const navigate = useNavigate()

	const navigation = useNavigation()
	// submitting={navigation.state === 'submitting'}

	return (
		<div>
			<h1>Create a post</h1>

			<NewPost submitting={navigation.state === 'submitting'} />

			<button onClick={() => signout(() => navigate('/', {replace: true}))} >Выход</button>


		</div>
		)
}



async function createPostRequest ({title, body, userId}) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ title, body, userId })
		})
		
	const newPost = await res.json()

	return newPost
}


async function createPostAction ({request}) {
	const formData = await request.formData();
	const newPostObj = {
		title: formData.get('title'),
		body: formData.get('body'),
		userId: formData.get('userId'),
	}
	// const title = formData.get('title')
	// const body = formData.get('body')
	// const userId = formData.get('userId')

	// const post = await createPostRequest({title, body, userId})
	const post = await createPostRequest(newPostObj)
	
	return redirect('/posts/' + post.id)
	// return redirect(`/posts/${post.id}`)

}



export { Createpost, createPostAction, createPostRequest }
// export { Createpost }

