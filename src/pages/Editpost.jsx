import { useParams, useLoaderData, useNavigation, useActionData } from 'react-router-dom'
import { UpdatePost } from "../components/UpdatePost";


function Editpost() {
	// const {id} = useParams();
	// const data = useActionData()
	const {post, id} = useLoaderData()
	const navigation = useNavigation() 
	

	return (
		<div>
			{/*{data?.message && <div style={{color: 'blue'}}>{data.message}</div>}*/}
			<h1>Edit a post {id}</h1>
			<UpdatePost {...post} submitting={navigation.state === 'submitting'} />
		</div>
		)
}

//эта функция отправляет данные на сервер
const updatePost = async (post) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
		method: 'PUT',
		body: post
	})
}


//эта фукнция формирует данные и отправляет с помощью updatePost
const updatePostAction = async ({request}) => {
	const formData = await request.formData()//взяли данные из формы

	if (!formData.get("title") || !formData.get("body")) {
		return {message: 'Все поля обязательны!'}
	}

	const updatedPost = await updatePost(formData)//передали их в функцию для отправки

	return { message: `Post ${updatedPost.id} was successfully updated` }
}





export { Editpost, updatePostAction }