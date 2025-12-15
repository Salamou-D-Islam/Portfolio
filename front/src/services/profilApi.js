const API_URL = "http://localhost:8000/profil";

export const getAllSections = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createSection = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateSection = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteSection = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
