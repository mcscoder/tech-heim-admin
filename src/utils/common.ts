export const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const regex = /\D/g;
  e.target.value = e.target.value.replace(regex, "");
};

export const productPath = (productId: number) => {
  return `http://25.10.56.237:5173/product/${productId}`;
};
