import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/error/ErrorPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Index from "../pages/dasboard/Index";
import CardPage from "../pages/dasboard/CardPage";
import AlertPage from "../pages/dasboard/AlertPage";
import BadgePage from "../pages/dasboard/BadgePage";
import ButtonPage from "../pages/dasboard/ButtonPage";
import ModalPage from "../pages/dasboard/ModalPage";
import ToastPage from "../pages/dasboard/ToastPage";
import InputPage from "../pages/dasboard/InputPage";
import InputValidate from "../pages/dasboard/InputValidate";
import CheckboxPage from "../pages/dasboard/CheckboxPage";
import RadioPage from "../pages/dasboard/RadioPage";
import TogglePage from "../pages/dasboard/TogglePage";
import DatatablePage from "../pages/dasboard/DatatablePage";
import CarouselPage from "../pages/dasboard/CarouselPage";
import ChartPage from "../pages/dasboard/ChartPage";
import DashboardLayout from "../layout/DashboardLayout";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/auth/login",
        element: <Login />,
    },
    {
        path: "/auth/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: "/dashboard/card",
                element: <CardPage />,
            },
            {
                path: "/dashboard/alert",
                element: <AlertPage />,
            },
            {
                path: "/dashboard/badge",
                element: <BadgePage />,
            },
            {
                path: "/dashboard/button",
                element: <ButtonPage />,
            },
            {
                path: "/dashboard/modal",
                element: <ModalPage />,
            },
            {
                path: "/dashboard/toast",
                element: <ToastPage />,
            },
            {
                path: "/dashboard/input",
                element: <InputPage />,
            },
            {
                path: "/dashboard/input-validate",
                element: <InputValidate />,
            },
            {
                path: "/dashboard/checkbox",
                element: <CheckboxPage />,
            },
            {
                path: "/dashboard/radio",
                element: <RadioPage />,
            },
            {
                path: "/dashboard/toggle",
                element: <TogglePage />,
            },
            {
                path: "/dashboard/datatable",
                element: <DatatablePage />,
            },
            {
                path: "/dashboard/carousel",
                element: <CarouselPage />,
            },
            {
                path: "/dashboard/chart",
                element: <ChartPage />,
            },
        ],
    }
]);

const RouteApp = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default RouteApp