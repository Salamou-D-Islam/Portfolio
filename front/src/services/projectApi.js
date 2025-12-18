const API_URL = "https://islam-backend.fly.dev/project";

export const getAllProjets = async () => {
  const res = await fetch(API_URL, {
    credentials: "include", // <- envoie le cookie de session
  });
  if (!res.ok) throw new Error("Erreur chargement projets");
  return res.json();
};

export const getOneProjet = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Erreur chargement projet");
  return res.json();
};

export const createProjet = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!res.ok) throw new Error("Erreur création projet");
  return res.json();
};

export const updateProjet = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!res.ok) throw new Error("Erreur mise à jour projet");
  return res.json();
};

export const deleteProjet = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Erreur suppression projet");
};
