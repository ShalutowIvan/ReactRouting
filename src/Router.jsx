import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import { Blogpage, blogLoader } from "./pages/Blogpage";
import { Singlepage, postLoader } from "./pages/Singlepage";

import { Editpost} from "./pages/Editpost";
import Aboutpage from "./pages/Aboutpage";
import Notfoundpage from "./pages/Notfoundpage";
import {Createpost, createPostAction} from "./pages/Createpost";
import './index.css'
import { ErrorPage } from "./pages/ErrorPage";

// updatePostAction

const Router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
        <Route index element={<Homepage />} />
        <Route path="posts" element={<Blogpage />} loader={blogLoader} errorElement={<ErrorPage />} />
        <Route path="posts/:id" element={<Singlepage />} loader={postLoader} />

        <Route path="posts/:id/edit" element={<Editpost />}  />
        <Route path="about/*" element={<Aboutpage />}>
            <Route path='contacts' element={<p>Our contacts</p>} />
            <Route path='team' element={<p>Our team</p>} />
        </Route>



        <Route path="about-us" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Notfoundpage />} />

    
        <Route path="posts/new" element={
            <Createpost />
        } action={createPostAction} />
    </Route>
))

export default Router



// loader={postLoader} action={updatePostAction}