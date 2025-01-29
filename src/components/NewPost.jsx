import { Form } from 'react-router-dom'



function NewPost({ submitting }) {	

	return (	

			<Form action="/posts/new" method='post'>
				<label>
					Title:
					<input type="text" name="title" defaultValue="1" />
				</label>
				
				<label>
					Body:
					<input type="text" name="body" defaultValue="1" />
				</label>

				<input type="hidden" name="userId" value="1" />

				<input type="submit" value="Add post" disabled={submitting} />

			</Form>			
		)
}


export default NewPost






