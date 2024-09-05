import { lazy, Suspense } from "react"
import {Routes,Route} from "react-router-dom"
import Loader from "../components/Loader"
const App = lazy(()=> import('../layouts/App'))
const Landing = lazy(()=>import('../pages/landing'))

const Router = () => (
    <Suspense fallback={<Loader/>}>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Landing/>}/>
            </Route>
        </Routes>
    </Suspense>
)

export default Router