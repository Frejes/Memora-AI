import { supabase } from "./supabase";

const API = "http://127.0.0.1:8000";

export async function getUploadedFiles() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const token = session?.access_token;

  const res = await fetch(`${API}/files/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  console.log("FILES RESPONSE:", data);
  console.log("IS ARRAY:", Array.isArray(data));

  return data;
}