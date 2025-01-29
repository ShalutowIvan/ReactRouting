import { useRouteError, isRouteErrorResponse } from 'react-router-dom'



function ErrorPage() {
	const error = useRouteError()

	if (isRouteErrorResponse(error)) {
		return (
		<div>
			<h1>{error.status}</h1>
			{/*<h2>{error.statusText || 'неверно прописали выброс респонсе!'}</h2>*/}
			<h2>{error.data.message || 'ТУТ ОШИБКА!'}</h2>
			<h3>{error.data.reason}</h3>
		</div>
		)}
	

	/*return <div>'Somthing goes wrong</div>*/
	throw error



}
	


export { ErrorPage }
