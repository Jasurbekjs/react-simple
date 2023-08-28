import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import CarDetail from "../components/car-detail/CarDetail"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" />
                <Route element={<CarDetail/>} path="/car/:id" />

                <Route path="*" element={<div>Not found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router