export const checkIfAvailable = async (productId) => {
  const rawCart = localStorage.getItem("cart");
  if (rawCart == null) {
    return { count: 0 };
  } else {
    const cart = JSON.parse(rawCart);
    if (cart) {
      const cartItem = cart.find((item) => item.productId === productId);
      if (cartItem) {
        return { count: cartItem.count };
      } else {
        return { count: 0 };
      }
    } else {
      return { count: 0 };
    }
  }
};
export const addToCart = async (product, add) => {
  const rawCart = localStorage.getItem("cart");
  if (rawCart == null || rawCart === undefined) {
    let cart = [
      {
        productId: product.productId,
        count: 1,
        unitPrice: product.offerPrice,
        listPrice: product.listPrice,
        productTitle: product.productTitle,
        imageUrl: product.imageList[0].productImgUrl,
        sku: product.sku,
      },
    ];

    localStorage.setItem("cart", JSON.stringify(cart));
    return { count: cart[0].count };
  } else {
    const cart = JSON.parse(rawCart);
    const existingProduct = cart.find(
      (item) => item.productId === product.productId
    );
    if (existingProduct) {
      if (add) {
        existingProduct.count++;
      } else {
        existingProduct.count--;
      }
      if (existingProduct.count === 0) {
        const updatedCart = cart.filter(
          (item) => item.productId !== product.productId
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { count: 0 };
      } else {
        localStorage.setItem("cart", JSON.stringify(cart));
        return { count: existingProduct.count };
      }
    } else {
      cart.push({
        productId: product.productId,
        count: 1,
        unitPrice: product.offerPrice,
        listPrice: product.listPrice,
        productTitle: product.productTitle,
        imageUrl: product.imageList[0].productImgUrl,
        sku: product.sku,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      return { count: 1 };
    }
  }
};
