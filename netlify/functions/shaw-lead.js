const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/nGTFMqFavoP286N1jfXR/webhook-trigger/fb0d5bd2-9d0f-41b8-a24e-c280d1bdf518";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const res = await fetch(GHL_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: event.body,
    });
    const text = await res.text();
    return { statusCode: res.status, body: text };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
