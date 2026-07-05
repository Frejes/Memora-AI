const API = "http://127.0.0.1:8000";

export async function remember(text: string) {
  const res = await fetch(`${API}/memory/remember`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  return await res.json();
}

export async function recall(query: string, history: any[] = []) {
  const res = await fetch(`${API}/memory/recall`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      history,
    }),
  });

  return await res.json();
}

export async function getGraph() {
  const res = await fetch("http://127.0.0.1:8000/graph/");
  return await res.json();
}