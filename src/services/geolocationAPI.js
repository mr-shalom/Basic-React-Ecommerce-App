import getData from "./customFetch";

//geocoding api and api key
const API_KEY = "68ba1d2874970893784453nbi707239";

const getUserCoordinates = async function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//convert coordinates to name of place
const covertCoordinates = async function () {
  try {
    const res = await getUserCoordinates();
    const { latitude: lat, longitude: lng } = res.coords;
    const url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=${API_KEY}`;
    const location = await getData(url);
    return location;
  } catch (error) {
    console.error(error.message);
  }
};

export { getUserCoordinates, covertCoordinates };
