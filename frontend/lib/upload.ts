import { supabase } from "./supabase";

const API = "http://127.0.0.1:8000";

export async function uploadFile(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  // Get logged-in user session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const token = session?.access_token;

  const res = await fetch(`${API}/upload/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return await res.json();
}