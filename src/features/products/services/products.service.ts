export const createNewProduct = async (data: any): Promise<Response> =>
  fetch("/api/products", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const findSingleProduct = async (id: string) =>
  fetch(`/api/products/${id}`);

export const getProducts = async (params?: URLSearchParams) => {
  return fetch(`/api/products?${params?.toString()}`);
};

export const editProduct = (data: any, id: string | undefined) =>
  fetch(`/api/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const removeProduct = (id: string) =>
  fetch(`/api/products/${id}`, {
    method: "DELETE",
  });
