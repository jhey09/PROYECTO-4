import { createBrowserRouter } from "react-router-dom"
import Form from "../assets/body/Reservacion";
import App from "..";


export const router = createBrowserRouter([
    {
        path: '/PROYECTO-4/',
        element:<App />,
    },
    {
        path: '/PROYECTO-4/Reservation',
        element: <Form />

    }
]);