import { CategoryList, CommonPage, ProductCard } from "@/components";
import { ProductTypes } from "@/types";

const products: ProductTypes.Product[] = [
  {
    id: 1,
    name: `Laptop Asus TUF Gaming FX507ZC4-HN095W i5 12500H/16GB/512GB/15.6"/Nvidia RTX 3050 4GB/Win11`,
    currentPrice: 25333333.99,
    lastPrice: 233339.99,
    quantity: 50,
    sold: 20,
    rate: 4.5,
    categoryId: 1,
    productImage: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/73e9/72a1/626c13815c60782b03167320ad602de5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ai9Kt5d6~p19gdNSDfa1v2bU~WHrKIAR5hjpwOd-E1wvLxSxSwPby9~euDxFaWP4XXitnv3F1xqkFpKiHpzA~2oGi3SBakcJeEnvvCmsImoRzpGtccutAHgpJU9lLtIwk8su8lnRPHL2mK6jedIBmlcHtcbxPBXyQTtABWJVKOnOrZ6aNZhROQA5I3JvvSfBm-XE-KYfuSnS4aziZ6Yuqeh9qYM3mom1bK~jykBHVwSy~mOw2R9YGBG97gL69Ej62v3jrgTwa278dncUGUQLQ~IUGMGM2qUcrMUOoASXbN5vl~kYj2h3Y1X4j59yCAy1q1rbTqhh7CcX-4LfGW1O-w__",
      },
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/73e9/72a1/626c13815c60782b03167320ad602de5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ai9Kt5d6~p19gdNSDfa1v2bU~WHrKIAR5hjpwOd-E1wvLxSxSwPby9~euDxFaWP4XXitnv3F1xqkFpKiHpzA~2oGi3SBakcJeEnvvCmsImoRzpGtccutAHgpJU9lLtIwk8su8lnRPHL2mK6jedIBmlcHtcbxPBXyQTtABWJVKOnOrZ6aNZhROQA5I3JvvSfBm-XE-KYfuSnS4aziZ6Yuqeh9qYM3mom1bK~jykBHVwSy~mOw2R9YGBG97gL69Ej62v3jrgTwa278dncUGUQLQ~IUGMGM2qUcrMUOoASXbN5vl~kYj2h3Y1X4j59yCAy1q1rbTqhh7CcX-4LfGW1O-w__",
      },
    ],
    productTechnical: [
      { title: "Technical Spec 1", description: "Description 1" },
      { title: "Technical Spec 2", description: "Description 2" },
    ],
    productGroup: [
      {
        title: "Group A",
        productType: [
          { id: 101, title: "Type 1" },
          { id: 102, title: "Type 2" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Product B",
    currentPrice: 25333333.99,
    lastPrice: 233339.99,
    quantity: 30,
    sold: 15,
    rate: 3.8,
    categoryId: 2,
    productImage: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/73e9/72a1/626c13815c60782b03167320ad602de5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ai9Kt5d6~p19gdNSDfa1v2bU~WHrKIAR5hjpwOd-E1wvLxSxSwPby9~euDxFaWP4XXitnv3F1xqkFpKiHpzA~2oGi3SBakcJeEnvvCmsImoRzpGtccutAHgpJU9lLtIwk8su8lnRPHL2mK6jedIBmlcHtcbxPBXyQTtABWJVKOnOrZ6aNZhROQA5I3JvvSfBm-XE-KYfuSnS4aziZ6Yuqeh9qYM3mom1bK~jykBHVwSy~mOw2R9YGBG97gL69Ej62v3jrgTwa278dncUGUQLQ~IUGMGM2qUcrMUOoASXbN5vl~kYj2h3Y1X4j59yCAy1q1rbTqhh7CcX-4LfGW1O-w__",
      },
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/73e9/72a1/626c13815c60782b03167320ad602de5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ai9Kt5d6~p19gdNSDfa1v2bU~WHrKIAR5hjpwOd-E1wvLxSxSwPby9~euDxFaWP4XXitnv3F1xqkFpKiHpzA~2oGi3SBakcJeEnvvCmsImoRzpGtccutAHgpJU9lLtIwk8su8lnRPHL2mK6jedIBmlcHtcbxPBXyQTtABWJVKOnOrZ6aNZhROQA5I3JvvSfBm-XE-KYfuSnS4aziZ6Yuqeh9qYM3mom1bK~jykBHVwSy~mOw2R9YGBG97gL69Ej62v3jrgTwa278dncUGUQLQ~IUGMGM2qUcrMUOoASXbN5vl~kYj2h3Y1X4j59yCAy1q1rbTqhh7CcX-4LfGW1O-w__",
      },
    ],
    productTechnical: [
      { title: "Technical Spec 1", description: "Description 1" },
      { title: "Technical Spec 3", description: "Description 3" },
    ],
    productGroup: [
      {
        title: "Group B",
        productType: [
          { id: 201, title: "Type 3" },
          { id: 202, title: "Type 4" },
        ],
      },
    ],
  },
  // Add more products as needed
];

export const Product = () => {
  return (
    <CommonPage title="All Product">
      <div className="flex items-center justify-center">
        <CategoryList />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((item, index) => {
          return (
            <ProductCard
              key={index}
              {...item}
            />
          );
        })}
      </div>
    </CommonPage>
  );
};
