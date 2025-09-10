//This custom hook is used to fetch currency exchange rates
//This custom hook is used to fetch a single product from the products api

async function getData(url) {
  const controller = new AbortController();
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error("Unable to get requested data");
    const data = await res.json();
    return data;
  } catch (error) {
    if (error.name !== "AbortError") console.error(error.message);
  }
  return () => controller.abort();
}

export default getData;
