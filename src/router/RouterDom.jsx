import { createBrowserRouter } from "react-router-dom"
import Reservation from "../assets/reservacion/Reservacion";
import App from "..";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<App />,
    },
    {
        path: '/Reservation',
        element: <Reservation />

    }
]);