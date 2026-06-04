import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import ProductDetail from './ProductDetail';
import Error from './Error';

export default function App() {
    return (        
        <BrowserRouter>         
            <Routes>
                <Route path="/product/:category/:id" element={<ProductDetail/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}