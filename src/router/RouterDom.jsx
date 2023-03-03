import { createBrowserRouter } from "react-router-dom"
import Form from "../assets/body/Reservacion";
import App from "..";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<App />,
    },
    {
        path: '/Reservation',
        element: <Form />

    }
]);