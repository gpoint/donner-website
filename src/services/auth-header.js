export default function getToken() {
  let user = JSON.parse(localStorage.getItem("auth"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
