export const authJsonHeader = () => ({
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
});
