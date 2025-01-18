import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import Singlepage from "./pages/Singlepage";
import Editpost from "./pages/Editpost";
import Aboutpage from "./pages/Aboutpage";
import Notfoundpage from "./pages/Notfoundpage";
import {Createpost, createPostAction} from "./pages/Createpost";
import './index.css'

const Router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="posts" element={<Blogpage />} />
        <Route path="posts/:id" element={<Singlepage />} />

        <Route path="posts/:id/edit" element={<Editpost />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="about-us" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Notfoundpage />} />

    
        <Route path="posts/new" element={
            <Createpost />
        } action={createPostAction} />
    </Route>
))

export default Router