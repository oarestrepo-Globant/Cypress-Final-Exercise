import CartPage from "../../support/pages/CartPage";
import HomePage from "../../support/pages/HomePage";
import ProductPage from "../../support/pages/ProductPage";

const home = new HomePage();
const product = new ProductPage();
const cart = new CartPage();

class FlowsPage{
    addingProductToCart() {
        home.clickOnRandomProductLink();
        product.clickOnAddToCartButton();
      }
}
export default FlowsPage;
