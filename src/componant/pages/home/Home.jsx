// import { products } from "../../../data/products";
import { useEffect,  } from "react";
import Banner from "../../banenr/Banner";
import Brands from "../../brand/BrandS";
import Category from "../../category/Category";
import Headingtitle from "../../heading title/Headingtitle";
import Sliderlaptop from "../../slider/Sliderlaptop";
import Sliderphone from "../../slider/Sliderphone";
import SpecialOffers from "../../spical-offer/SpecialOffers";
import { useDispatch, useSelector } from "react-redux";
import {fetchpro} from "../../../redux/apicalls/productapi"
const Home = () => {
const dispatch =useDispatch()
const {products}=useSelector(state => state.product)
  // fetch

  useEffect(() => {
    dispatch(fetchpro())
  }, []);
  const laptop = products.filter((p) => p.isLaptop === true);
  const phone = products.filter((p) => p.isLaptop === false);
  return (
    <>
      <Banner />
      <Category />
      <SpecialOffers />
      <Headingtitle title="الجديد من الابتوبات" />
      <Sliderlaptop data={laptop} />
      <Headingtitle title="الجديد من الهواتف" />
      <Sliderphone phones={phone} />
      <Headingtitle title="تسوق حسب الماركه" />
      <Brands />
    </>
  );
};

export default Home;
