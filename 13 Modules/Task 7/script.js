// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in script.

const axios = require("axios");

async function fetchUser(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error.message);
  }
}
async function main() {
  const userId = 1;

  console.log(`Fetching data for user ${userId}...`);

  const user = await fetchUser(userId);
  console.log("User:", user.name);
}
main().catch((error) => {
  console.log("Main function error", error.message);
});
