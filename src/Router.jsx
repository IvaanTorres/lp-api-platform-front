import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Page/Home/Home"
import LoginPage from "./Page/Login/LoginPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Layout />}> */}
                {/* <Route index element={<Home />} /> */}
                <Route path="/login" element={<p>dede</p>} />
                <Route path="home" element={<HomePage />} />
                {/* <Route path="*" element={<NoPage />} /> */}
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router