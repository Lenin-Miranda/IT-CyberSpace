export const sendEmail = async (FormData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/send-email`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(FormData),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to send email");
    }
    return await response.json();
  } catch (error) {
    throw new Error("Error sending email");
  }
};
