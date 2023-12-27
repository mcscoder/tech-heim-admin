import { ImageUpload } from "@/components/Layouts";
import { useProductDetailedContext } from "@/hooks/useProductDetailedContext";

export const ProductImage = () => {
  const { productDetailed, addProductImage, deleteProductImage } =
    useProductDetailedContext();

  return (
    <div className="p-4 rounded-lg bg-gray-50">
      <ImageUpload
        images={productDetailed.productImage}
        handleAddImage={addProductImage}
        handleDeleteImage={deleteProductImage}
      />
    </div>
  );
};
