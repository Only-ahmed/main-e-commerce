import { Route, Routes } from "react-router-dom";
import SecondPage from "./SecondPage";
import ProductPageCategory from "./Product page category/ProductPageCategory";
import { Categories, ProductsPage, } from '../../Data/data'
import SearchPage from "./search page/SearchPage";
// import { useState } from "react";
// import { Categoryappear } from '../redux/actions/ReduxActions'
// import { useDispatch, useSelector } from "react-redux";
// import { reducer } from "../redux/reducers/Redux";
import Error from '../Utilities/reusable/Error'

const Mmnnnn = () => {

    return (
        <div>
            {/* <BrowserRouter> */}
            <Routes>
                <Route path='search-page' element={<SearchPage ProductsPage1={ProductsPage} Categoties={Categories} />} />
                <Route path='groceries' element={<SecondPage ProductsPage={ProductsPage.Supermarket} Categoties={Categories.supermarket} />} />
                <Route path='fashion' element={<SecondPage ProductsPage={ProductsPage.Fashion} Categoties={Categories.Fashion} />} />
                <Route path='health-beauty' element={<SecondPage ProductsPage={ProductsPage.HealthBeauty} Categoties={Categories.HealthBeauty} />} />
                <Route path='baby-products' element={<SecondPage ProductsPage={ProductsPage.BabyProducts} Categoties={Categories.BabyProducts} />} />
                <Route path='phones-tablets' element={<SecondPage ProductsPage={ProductsPage.PhoneTablets} Categoties={Categories.PhoneTablets} />} />


                <Route path="/food-storage" element={<ProductPageCategory productPageCat={ProductsPage.Supermarket[0].Food_storage_Foil} />} />
                <Route path="/disposable-plates-cutlery" element={<ProductPageCategory productPageCat={ProductsPage.Supermarket[1].Disposable_Plates_Cutlery} />} />
                <Route path="/disposable-cups" element={<ProductPageCategory productPageCat={ProductsPage.Supermarket[2].Disposable_Cups} />} />
                {/* <Route path="/trash-compost-lawn-bags" element={<ProductPageCategory productPageCat={ProductsPage.Supermarket[3].Food_storage_Foil} />} /> */}
                <Route path="/detergent" element={<ProductPageCategory productPageCat={ProductsPage.Supermarket[3].Detergent} />} />
                {/* <Route path="/fabric-softner" element={<ProductPageCategory />} /> */}
                <Route path="/stain-removal" element={<ProductPageCategory productPageCat={ProductsPage.Supermarket[4].Stain_Removal} />} />
                <Route path="/air-fresheners" element={<ProductPageCategory productPageCat={ProductsPage.Supermarket[5].Air_Fresheners} />} />
                <Route path="/dishwashing" element={<ProductPageCategory productPageCat={ProductsPage.Supermarket[6].Dishwashing} />} />
                <Route path="/Kitchen Cleaners" element={<ProductPageCategory productPageCat={ProductsPage.Supermarket[7].Kitchen_Cleaners} />} />
                {/* <Route path="/Bathroom Cleaners" element={<ProductPageCategory />} /> */}

                <Route path="/womens-bags" element={<ProductPageCategory productPageCat={ProductsPage.Fashion[0].womens_bags} Categoties={Categories.Fashion[0].WOMENS_FASHION[0].title} />} />
                <Route path="/dresses-jumpsuits" element={<ProductPageCategory productPageCat={ProductsPage.Fashion[1].womens_socks_hosiery} Categoties={Categories.Fashion[0].WOMENS_FASHION[1].title} />} />
                <Route path="/hoodies-sweatshirts" element={<ProductPageCategory productPageCat={ProductsPage.Fashion[2].hoodies_sweatshirts} Categoties={Categories.Fashion[0].WOMENS_FASHION[2].title} />} />
                <Route path="/mens-casual-shirts" element={<ProductPageCategory productPageCat={ProductsPage.Fashion[3].mens_casual_shirts} Categoties={Categories.Fashion[0].MENS_FASHION[0].title} />} />
                <Route path="/t-shirts-and-polos" element={<ProductPageCategory productPageCat={ProductsPage.Fashion[4].mens_Tshirts_and_polos} Categoties={Categories.Fashion[0].MENS_FASHION[1].title} />} />
                <Route path="/men-suits" element={<ProductPageCategory productPageCat={ProductsPage.Fashion[5].men_suits} Categoties={Categories.Fashion[0].MENS_FASHION[2].title} />} />
                <Route path="/baby-boys-fashion" element={<Error />} />
                <Route path="/baby-girl-fashion" element={<Error />} />

                <Route path="/oral-care" element={<ProductPageCategory productPageCat={ProductsPage.HealthBeauty[0].oral_care} />} />
                <Route path="/feminine-hygiene" element={<ProductPageCategory productPageCat={ProductsPage.HealthBeauty[1].shave_hair_removal} />} />
                <Route path="/shave-hair" element={<ProductPageCategory productPageCat={ProductsPage.HealthBeauty[2].body_skin_care} />} />
                <Route path="/body-skin-care" element={<ProductPageCategory productPageCat={ProductsPage.HealthBeauty[3].eyes_treament_products} />} />
                <Route path="/eyes-treament-products" element={<ProductPageCategory productPageCat={ProductsPage.HealthBeauty[4].facial_skin_care} />} />
                <Route path="/facial-care-cleansers" element={<ProductPageCategory productPageCat={ProductsPage.HealthBeauty[5].hair_care_styling_tools} />} />
                <Route path="/styling-tools" element={<ProductPageCategory productPageCat={ProductsPage.HealthBeauty[6].hair_styling_styling_products} />} />
                <Route path="/styling-products" element={<ProductPageCategory productPageCat={ProductsPage.HealthBeauty[7].shampoo} />} />
                <Route path="/shampoo-conditioner" element={<Error productPageCat={ProductsPage.HealthBeauty[7].shampoo} />} />
                <Route path="/wellness-relaxation" element={<Error productPageCat={ProductsPage.HealthBeauty[7].shampoo} />} />
                <Route path="/medical-supplies-equipment" element={<Error productPageCat={ProductsPage.HealthBeauty[7].shampoo} />} />
                {/* <Route path="/shampoo-conditioner" element={<ProductPageCategory productPageCat={ProductsPage.Fashion[5].men_suits} />} /> */}
                {/* <Route path="/wellness-relaxation" element={<ProductPageCategory productPageCat={ProductsPage.Fashion[5].men_suits} />} /> */}
                {/* <Route path="/medical-supplies-equipment" element={<ProductPageCategory productPageCat={ProductsPage.Fashion[5].men_suits} />} /> */}

                <Route path="/baby-diapering" element={<ProductPageCategory productPageCat={ProductsPage.BabyProducts[0].disposable_diapers} />} />
                <Route path="/baby-wipe-holders" element={<ProductPageCategory productPageCat={ProductsPage.BabyProducts[1].baby_wipe_holders} />} />
                <Route path="/bottle-feeding-table-wear" element={<ProductPageCategory productPageCat={ProductsPage.BabyProducts[2].bottle_feeding_table_wear} />} />
                <Route path="/baby-feeding-foods" element={<ProductPageCategory productPageCat={ProductsPage.BabyProducts[3].baby_food} />} />
                <Route path="/baby-lotions" element={<ProductPageCategory productPageCat={ProductsPage.BabyProducts[4].baby_lotions} />} />
                <Route path="/baby-shampoo-conditioner" element={<ProductPageCategory productPageCat={ProductsPage.BabyProducts[5].baby_shampoo_conditioner} />} />
                <Route path="/bath-essentials" element={<ProductPageCategory productPageCat={ProductsPage.BabyProducts[6].bath_essentials} />} />
                <Route path="/baby-kitchen-safety" element={<ProductPageCategory productPageCat={ProductsPage.BabyProducts[7].kitchen_safety} />} />
                <Route path="/baby-outdoor-safety" element={<ProductPageCategory productPageCat={ProductsPage.BabyProducts[8].outdoor_safety} />} />

                <Route path="/android-phones" element={<ProductPageCategory productPageCat={ProductsPage.PhoneTablets[0].android_phones} />} />
                <Route path="/tablets" element={<ProductPageCategory productPageCat={ProductsPage.PhoneTablets[1].tablets} />} />
                <Route path="/educational-tablets" element={<ProductPageCategory productPageCat={ProductsPage.PhoneTablets[2].educational_tablets} />} />
                <Route path="/cases" element={<ProductPageCategory productPageCat={ProductsPage.PhoneTablets[3].cases} />} />
                <Route path="/phone-screen-protectors" element={<ProductPageCategory productPageCat={ProductsPage.PhoneTablets[4].mobile_phone_screen_protectors} />} />
                <Route path="/phone-bluetooth-headsets" element={<ProductPageCategory productPageCat={ProductsPage.PhoneTablets[5].mobile_phone_bluetooth_headsets} />} />
                <Route path="/headsets" element={<ProductPageCategory productPageCat={ProductsPage.PhoneTablets[6].headset} />} />
                <Route path="/phone-accessories-cables" element={<ProductPageCategory productPageCat={ProductsPage.PhoneTablets[6].headset} />} />

            </Routes>
            {/* </BrowserRouter> */}
        </div>
    )
}
export default Mmnnnn;