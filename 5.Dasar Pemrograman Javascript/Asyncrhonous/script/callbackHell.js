function ambilId(id) {
  if (!id) throw new Error("user harus menentukan id!");
  return { id, name: "John Doe", location: "Jakarta" };
}

function getWeather(location) {
  if (location === "Jakarta") {
    return { weather: "Sunny", temperature: 40 };
  }
  throw new Error("lokasi tidak ditemukan");
}

function getUserWeather(userId) {
  try {
    const user = ambilId(userId);
    const weather = getWeather(user.location);
    return {
      ...user,
      ...weather,
    };
  } catch (e) {
    console.log(e.message);
    return null;
  }
}
const userWeather = getUserWeather(1);

console.log(userWeather);
