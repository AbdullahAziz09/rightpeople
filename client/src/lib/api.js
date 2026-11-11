const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function handle(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
  return data;
}

export async function submitApplication(formData) {
  const res = await fetch(`${API_URL}/applications`, {
    method: "POST",
    body: formData,
  });
  return handle(res);
}

export async function submitLead(formData) {
  const res = await fetch(`${API_URL}/leads`, {
    method: "POST",
    body: formData,
  });
  return handle(res);
}
