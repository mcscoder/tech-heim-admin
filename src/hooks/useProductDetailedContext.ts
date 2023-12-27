import { ProductDetailedContext } from "@/contexts";
import { CommonTypes, ProductTypes } from "@/types";
import { useContext, useRef, useState } from "react";
import { useLoaderContext } from ".";
import { getRequestURL } from "@/utils";
import axios from "axios";

export const useProductDetailedContext = () => {
  const productDetailedContext = useContext(ProductDetailedContext);

  if (!productDetailedContext) {
    throw new Error(
      "useProductDetailedContext must be used within ProductDetailedProvider"
    );
  }

  const { productDetailed, setProductDetailed } = productDetailedContext;

  const [productGroups, setProductGroups] = useState<
    ProductTypes.ProductGroup[]
  >([]);
  const { handleFetchApi } = useLoaderContext();

  const currentProductTypeId = useRef<{ [key: number]: number | undefined }>(
    {}
  );

  /* Product category --------------------------------------------------------- */
  const setCategoryId = (categoryId: number) => {
    setProductDetailed((prev) => {
      return { ...prev, categoryId };
    });

    // request to the server with categoryId to get related group
    const productGroupResponse: ProductTypes.ProductGroup[] = [
      {
        id: 1,
        title: "Manufacturer",
        productType: [
          {
            id: 1,
            title: "Macbook",
          },
          {
            id: 2,
            title: "MSI",
          },
        ],
      },
      {
        id: 2,
        title: "Screen size",
        productType: [
          {
            id: 3,
            title: "13 inch",
          },
          {
            id: 4,
            title: "14 inch",
          },
          {
            id: 5,
            title: "15 inch",
          },
          {
            id: 6,
            title: "16 inch",
          },
        ],
      },
    ];
    setProductGroups(productGroupResponse);
  };

  const addProductGroup = (title: string) => {
    // call api to add group
    title;
  };

  const addProductType = (productGroupId: number, title: string) => {
    // call api to add product type
    productGroupId;
    title;
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
        await axios.post<CommonTypes.Message>(
          productImageURL,
          productImageRequestBody
        );
      } catch (error) {
        console.log(error);
      }
    });
  };

  return {
    productDetailed,
    productGroups,

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
