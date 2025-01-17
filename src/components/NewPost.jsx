import { Form } from 'react-router-dom'



function NewPost() {	

	return (	

			<Form method='post' action="/posts/new">
				<label>
					Title:
					<input type="text" name="title" defaultValue="1" />
				</label>
				
				<label>
					Body:
					<input type="text" name="Body" defaultValue="1" />
				</label>

				<input type="hidden" name="userId" value="1" />

				<input type="submit" value="Add post" />

			</Form>			
		)
}


export default NewPost






