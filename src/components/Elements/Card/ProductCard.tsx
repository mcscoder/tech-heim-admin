import { Button, Chip, ContentSection, categoryItems } from "@/components";
import { BinIcon, PenIcon, ThreeDotsIcon } from "@/constants";
import { useBooleanState } from "@/hooks";
import { ProductTypes } from "@/types";
import { formatVND, productPath } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({
  id,
  name,
  currentPrice,
  lastPrice,
  quantity,
  sold,
  categoryId,
  productImage,
  productGroup,
}: ProductTypes.Product) => {
  const { state, toggle } = useBooleanState();

  return (
    <ContentSection className="flex flex-col gap-4 p-4">
      <div className="flex gap-4">
        <img
          src={productImage[0].imageURL}
          alt={name}
          width={100}
          height={100}
          className="object-cover rounded-lg"
        />
        <div className="flex flex-col font-medium gap-4 flex-1">
          <div className="flex items-start justify-between gap-4 flex-1">
            <div className="flex flex-col">
              <Link
                to={productPath(id)}
                className="hover:text-blue-500"
                target="_blank"
              >
                <h3 className="line-clamp-2 break-all text-[16px]">{name}</h3>
              </Link>
              <h4 className="text-[14px] text-Gray-Main font-bold">
                {categoryItems[categoryId].label}
              </h4>
            </div>
            <div className="relative">
              <Button
                variant="text"
                size="icon"
                className="!bg-Gray-Normal/20"
                startIcon={
                  <ThreeDotsIcon
                    height={16}
                    width={16}
                  />
                }
                onClick={toggle}
              />
              {state && (
                <div className="absolute top-0 right-[100%] flex flex-col gap-2 p-2 bg-White-FA shadow-2xl shadow-black/30 rounded-lg">
                  <Button
                    variant="text"
                    startIcon={<PenIcon />}
                    className="text-blue-600"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="text"
                    startIcon={<BinIcon />}
                    className="text-red-500"
                  >
                    Remove
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <p className="text-[16px] text-black">{formatVND(currentPrice)}</p>
            {lastPrice && (
              <p className="text-[12px] text-Gray-Main/90 line-through">
                {formatVND(currentPrice)}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-start">
          <h4 className="font-medium">Product Types</h4>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {productGroup.map((group, index) => {
            return (
              <React.Fragment key={index}>
                {group.productType.map((type) => {
                  return (
                    <Chip
                      key={type.id}
                      title={type.title}
                    />
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 rounded-lg border border-Gray-Normal text-[16px] text-Gray-Dark font-medium">
        <div className="flex items-center justify-between gap-2">
          <p>Sales</p>
          <p>{sold}</p>
        </div>
        <div className="h-[1px] bg-Gray-Normal"></div>
        <div className="flex items-center justify-between gap-2">
          <p>In stocks</p>
          <p>{quantity}</p>
        </div>
      </div>
    </ContentSection>
  );
};
