import "./App.css";
import Header from "./componant/header/Header";

import Footer from "./componant/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componant/pages/home/Home";
import Cart from "./componant/pages/cart/Cart";
import Product from "./componant/pages/product/Product";
import SingleProduct from "./componant/pages/singleproduct/SingleProduct";
import SpecialOffer from "./componant/pages/spical-offers-page/SpicalOffer";
import Samsung from "./componant/pages/samsung/Samsung";

import Honor from "./componant/pages/honor/Honor";
import Apple from "./componant/pages/apple/Apple";
import Huawei from "./componant/pages/huawei/Huawei";

function App() {
  // const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.product);

  // useEffect(() => {
  //   dispatch(fetchpro());
  // }, []);

  // const phoness = products.filter((p) => p.isSam === true);
  // const honor = products.filter((p) => p.isHonor === true);
  // const apple = products.filter((p) => p.isApple === true);
  // const huawei = products.filter((p) => p.ishuawei === true);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Product/>} />
        <Route path="/products/:id" element={<SingleProduct/>} />
        <Route path="/spical-offer/:id" element={<SpecialOffer />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/honor" element={<Honor />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/huawei" element={<Huawei />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
