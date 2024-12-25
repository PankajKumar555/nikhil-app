import axiosInstance from "./config";

export const endpoints = {
  getAllCategories: "/category/get-parent-categories",
  getChildCategories: "category/get-child-categories?parentId=",
  getAllProductsByCategoryId: "/product/get-products?categoryId=",
  getAllProducts: "/product/get-products",
  getSearchProducts: "/product/get-products?productName=",
  getAllRelatedProducts: "/product/get-products?productIds=",
  getProductDetails: "product/product-detail?productId=",
  getProductListByNameSearch: "/product/get-product-name-list?keyword=",
  getProductIdentifier: "/product/get-product-identifier-list",
  getAllProductsIdentifier: "/product/get-products?identifier=",
  getAllCategoriesByDropdown: "/category/get-all-categories",
  saveCartDetails: "/cart/save",
  saveCartOrderDetails: "/order/save",
  getCartDetails: "/cart/cart-detail?cartId=",
  getOrderDetails: "/order/order-detail?orderId=",
};

// GET Request: Fetch data from an API endpoint
export const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// POST Request: Send data to an API endpoint
export const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response?.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
