import {
  CategoryButton,
  CategoryButtonProps,
  ContentSection,
} from "@/components";
import {
  AccessoriesIcon,
  CameraIcon,
  DataIcon,
  GameIcon,
  HeadPhoneIcon,
  LaptopIcon,
  MobileIcon,
  TabletIcon,
  WatchStatusIcon,
  searchParams,
} from "@/constants";
import { useSearchParams } from "react-router-dom";

export const categoryItems: CategoryButtonProps[] = [
  {
    icon: <MobileIcon />,
    label: "Mobile",
  },
  {
    icon: <LaptopIcon />,
    label: "Laptop",
  },
  {
    icon: <TabletIcon />,
    label: "Tablet",
  },
  {
    icon: <HeadPhoneIcon />,
    label: "Audio",
  },
  {
    icon: <WatchStatusIcon />,
    label: "Wearable",
  },
  {
    icon: <CameraIcon />,
    label: "Camera",
  },
  {
    icon: <GameIcon />,
    label: "Gaming",
  },
  {
    icon: <DataIcon />,
    label: "Network",
  },
  {
    icon: <AccessoriesIcon />,
    label: "Accessories",
  },
];

export const CategoryList = () => {
  const [params, setParams] = useSearchParams();

  return (
    <ContentSection className="flex items-center justify-center gap-8 px-10 py-5">
      <section className="content-container flex items-center justify-center gap-8">
        {categoryItems.map((categoryItem, index) => {
          const categoryId = index + 1;
          const currentCategoryId = params.get(searchParams.categoryId);
          return (
            <CategoryButton
              key={categoryId}
              isActive={`${categoryId}` === currentCategoryId}
              icon={categoryItem.icon}
              label={categoryItem.label}
              onClick={() =>
                setParams((prev) => {
                  prev.set(searchParams.categoryId, `${categoryId}`);
                  return prev;
                })
              }
            />
          );
        })}
      </section>
    </ContentSection>
  );
};
