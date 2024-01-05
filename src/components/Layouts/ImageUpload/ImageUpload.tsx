import { Button } from "@/components/Elements";
import { TrashIcon } from "@/constants";
import { useRef, useState } from "react";
import { Overlay } from "..";
import { CommonTypes } from "@/types";

export interface ImageUploadProps {
  images: CommonTypes.Image[];
  handleAddImage: (imageURL: string) => void;
  handleDeleteImage: (index: number) => void;
}

export const ImageUpload = ({
  images,
  handleAddImage,
  handleDeleteImage,
}: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const image64 = event.target?.result as string;
          if (image64) {
            handleAddImage(image64);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    handleDeleteImage(index);
  };

  const handleOnClosePreview = () => {
    setPreviewIndex(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex">
        <input
          type="file"
          multiple
          ref={inputRef}
          hidden
          onChange={handleImageUpload}
        />
        <Button onClick={() => inputRef.current?.click()}>Select image</Button>
      </div>
      {previewIndex !== null && (
        <Overlay
          onCLickClose={handleOnClosePreview}
          contentContainerClassName="w-[85%] h-[85%] bg-gray-44 rounded-lg p-7"
        >
          <img
            src={images[previewIndex].imageURL}
            className="object-contain w-full h-full"
            alt="Preview image"
          />
        </Overlay>
      )}
      {images.length !== 0 && (
        <div className="grid grid-cols-4 gap-4 p-4 border-4 border-black/50 border-dashed rounded-lg bg-gray-200">
          {images.map((item, index) => {
            return (
              <div
                key={index}
                className="relative w-full pb-[100%]"
              >
                <div className="absolute top-0 left-0 bottom-0 right-0">
                  <div className="relative group h-full w-full">
                    <img
                      src={item.imageURL}
                      alt={`Uploaded image ${index}`}
                      className="w-full h-full object-cover rounded-lg cursor-pointer"
                      onClick={() => {
                        setPreviewIndex(index);
                      }}
                    />
                    <Button
                      variant="text"
                      startIcon={
                        <TrashIcon
                          height={24}
                          width={24}
                        />
                      }
                      className="absolute top-1 right-1 hidden group-hover:block hover:!bg-gray-b4"
                      onClick={() => handleRemoveImage(index)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
