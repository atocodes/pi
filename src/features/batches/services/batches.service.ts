const BASEURL = "/api/batches";
const headers = {
  "Content-Type": "application/json",
};

export const newBatch = async (data: any, product: any): Promise<any> => {
  data.productId = product.id;
  data.manufactureDate = new Date(data.manufactureDate);
  data.expiryDate = new Date(data.expiryDate);
  const res = await fetch(BASEURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers,
  });
  return await res.json();
};

export const getBatches = async (params?: URLSearchParams): Promise<any> => {
  const res = await fetch(`${BASEURL}?${params?.toString()}`);
  return await res.json();
};

export const findSingleBatch = async (id: string): Promise<any> => {
  const res = await fetch(`${BASEURL}/${id}`);
  return await res.json();
};

export const editBatch = async (data: any, id: string): Promise<any> => {
  const res = await fetch(`${BASEURL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers,
  });
  return await res.json();
};

export const deleteBatch = async (id: string): Promise<any> => {
  const res = await fetch(`${BASEURL}/${id}`, { method: "DELETE" });
  return await res.json();
};
