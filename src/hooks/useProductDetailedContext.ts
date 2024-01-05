import { ProductDetailedContext } from "@/contexts";
import { CommonTypes, ProductTypes } from "@/types";
import { useContext } from "react";
import { useLoaderContext, useProductContext } from ".";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useProductDetailedContext = () => {
  const productDetailedContext = useContext(ProductDetailedContext);

  if (!productDetailedContext) {
    throw new Error(
      "useProductDetailedContext must be used within ProductDetailedProvider"
    );
  }

  const {
    productDetailed,
    setProductDetailed,
    productGroups,
    setProductGroups,
    currentProductTypeId,
  } = productDetailedContext;

  const { deleteProduct } = useProductContext();
  const navigate = useNavigate();

  const { handleFetchApi } = useLoaderContext();

  /* Product category --------------------------------------------------------- */
  const setCategoryId = (categoryId: number) => {
    setProductDetailed((prev) => {
      return { ...prev, categoryId, productTypeId: [] };
    });
    getProductGroup(categoryId);
  };

  const getProductGroup = (categoryId: number) => {
    handleFetchApi(async () => {
      try {
        // request to the server with categoryId to get related group
        const url = getRequestURL("productGroup");
        const productGroupResponse = await axios.get<
          ProductTypes.ProductGroup[]
        >(url, {
          params: {
            categoryId: categoryId,
          },
        });
        setProductGroups(productGroupResponse.data || []);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const addProductGroup = (title: string) => {
    handleFetchApi(async () => {
      try {
        const url = getRequestURL("productGroup");
        const body: ProductTypes.AddProductGroupRequestBody = {
          categoryId: productDetailed.categoryId,
          title: title,
        };
        await axios.post<CommonTypes.Message>(url, body);
      } catch (error) {
        console.log(error);
      } finally {
        getProductGroup(productDetailed.categoryId);
      }
    });
  };

  const addProductType = (productGroupId: number, title: string) => {
    handleFetchApi(async () => {
      try {
        const url = getRequestURL("postProductType");
        const body: ProductTypes.AddProductTypeRequestBody = {
          productGroupId: productGroupId,
          title: title,
        };
        await axios.post<CommonTypes.Message>(url, body);
      } catch (error) {
        console.log(error);
      } finally {
        getProductGroup(productDetailed.categoryId);
      }
    });
  };

  const setProductTypeId = (productGroupId: number, productTypeId: number) => {
    let newProductTypeId = [...productDetailed.productTypeId];

    // get current id of group
    const curTypeId = currentProductTypeId.current[productGroupId];

    // if current id is present remove it out of newProductTypeId
    if (curTypeId) {
      newProductTypeId = newProductTypeId.filter(
        (item) => item.id !== curTypeId
      );
    }
    currentProductTypeId.current[productGroupId] = productTypeId;
    newProductTypeId.push({ id: productTypeId });

    console.log(newProductTypeId);

    setProductDetailed((prev) => {
      return { ...prev, productTypeId: newProductTypeId };
    });
  };

  /* Product information ------------------------------------------------------ */
  const setProductName = (name: string) => {
    console.log(name);
    setProductDetailed((prev) => {
      return { ...prev, name };
    });
  };

  const setProductCurrentPrice = (currentPrice: number) => {
    console.log(currentPrice);
    setProductDetailed((prev) => {
      return { ...prev, currentPrice };
    });
  };

  const setProductLastPrice = (lastPrice: number | null) => {
    console.log(lastPrice);
    setProductDetailed((prev) => {
      return { ...prev, lastPrice };
    });
  };

  const setProductQuantity = (quantity: number) => {
    console.log(quantity);
    setProductDetailed((prev) => {
      return { ...prev, quantity };
    });
  };

  /* Product image ------------------------------------------------------------ */
  const addProductImage = (imageURL: string) => {
    setProductDetailed((prev) => {
      const productImage = [...prev.productImage];
      productImage.push({ imageURL });
      return { ...prev, productImage };
    });
  };

  const deleteProductImage = (index: number) => {
    setProductDetailed((prev) => {
      const productImage = [...prev.productImage];
      productImage.splice(index, 1);
      return { ...prev, productImage };
    });
  };

  /* Product Technical -------------------------------------------------------- */
  const addProductTechnical = (title: string, description: string) => {
    setProductDetailed((prev) => {
      const productTechnical = [
        ...prev.productTechnical,
        { title, description },
      ];
      return { ...prev, productTechnical };
    });
  };

  const editProductTechnical = (
    index: number,
    title: string,
    description: string
  ) => {
    setProductDetailed((prev) => {
      const productTechnical = [...prev.productTechnical];
      productTechnical[index] = { title, description };
      return { ...prev, productTechnical };
    });
  };

  const deleteProductTechnical = (index: number) => {
    setProductDetailed((prev) => {
      const productTechnical = [...prev.productTechnical];
      productTechnical.splice(index, 1);
      return { ...prev, productTechnical };
    });
  };

  /* Handle request to server */
  const handleAddProduct = () => {
    handleFetchApi(async () => {
      try {
        // Request add product
        const productURL = getRequestURL("product");
        const productRequestBody: ProductTypes.ProductRequestBody = {
          name: productDetailed.name,
          currentPrice: productDetailed.currentPrice,
          lastPrice: productDetailed.lastPrice,
          quantity: productDetailed.quantity,
          categoryId: productDetailed.categoryId,
        };
        const productResponse = await axios.post<ProductTypes.ProductId>(
          productURL,
          productRequestBody
        );
        const productId = productResponse.data.id;

        // Request add product type
        const productTypeURL = getRequestURL("productType");
        const productTypeRequestBody: ProductTypes.ProductTypeRequestBody = {
          id: productId,
          productTypeId: productDetailed.productTypeId,
        };
        await axios.post<CommonTypes.Message>(
          productTypeURL,
          productTypeRequestBody
        );

        // Request add product technical
        const productTechnicalURL = getRequestURL("productTechnical");
        const productTechnicalRequestBody: ProductTypes.ProductTechnicalRequestBody =
          {
            id: productId,
            productTechnical: productDetailed.productTechnical,
          };
        await axios.post<CommonTypes.Message>(
          productTechnicalURL,
          productTechnicalRequestBody
        );

        // Request add product image
        const productImageURL = getRequestURL("productImage");
        const productImageRequestBody: ProductTypes.ProductImageRequestBody = {
          id: productId,
          productImage: productDetailed.productImage,
        };
        await new Promise((resolve) => {
          setTimeout(async () => {
            await axios.post<CommonTypes.Message>(
              productImageURL,
              productImageRequestBody
            );
            resolve("");
          }, 1000);
        });
        if (productDetailed.id) {
          deleteProduct(productDetailed.id);
        }
      } catch (error) {
        console.log(error);
      } finally {
        navigate("/products");
      }
    });
  };

  return {
    productDetailed,
    productGroups,

    setProductDetailed,
    getProductGroup,

    // Product category
    setCategoryId,
    setProductTypeId,
    addProductGroup,
    addProductType,

    // Product information
    setProductName,
    setProductCurrentPrice,
    setProductLastPrice,
    setProductQuantity,

    // Product image
    addProductImage,
    deleteProductImage,

    // Product technical
    addProductTechnical,
    editProductTechnical,
    deleteProductTechnical,

    // Handle request
    handleAddProduct,
  };
};
