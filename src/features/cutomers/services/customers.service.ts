export const getCustomers = async () => fetch("/api/customers");

export const createCustomer = async (data: any) =>
  fetch("/api/customers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const getSingleCustomer = async (id: string) =>
  fetch(`/api/customers/${id}`);

export const updateCustomer = async (id: string, data: any) =>
  fetch(`/api/customers/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

export const deleteCustomer = async (id: string) =>
  fetch(`/api/customers/${id}`, {
    method: "DELETE",
  });
