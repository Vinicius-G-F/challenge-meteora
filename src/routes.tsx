import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import PaginaBase from "./Pages/PaginaBase";
import GaleriaDeProdutos from "./Pages/GaleriaDeProdutos";

export default function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Home />} />
                    <Route path="galeria-de-produtos/:id" Component={GaleriaDeProdutos} />
                    <Route path="galeria-de-produtos" element={<GaleriaDeProdutos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}