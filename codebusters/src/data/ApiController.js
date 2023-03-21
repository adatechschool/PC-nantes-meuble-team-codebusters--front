import Cookies from "universal-cookie";

const baseUrl = "http://localhost:4000";

function buildUrl(params) {
  return baseUrl + params;
}

export async function callLogin(email, password) {
  const cookie = new Cookies();
  const url = buildUrl("/login");
  //   call server to validate user
  //  if error, password, and email do not match
  const response = await fetch(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({ email: email, password: password }),
  });
  //   get token from response if email and password match
  const token = await response.json();
  //   set token cookie
  cookie.set("token", token.token);
  return token;
}

// get token from cookie
export function getStoredToken() {
  const cookie = new Cookies();
  return cookie.get("token");
}

function buildHeaders() {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const token = getStoredToken();
  if (token) headers.Authorization = token;
  return headers;
}

export async function findUserFurnitures() {
  const url = buildUrl("/users/furnitures");
  const response = await fetch(url, {
    headers: buildHeaders(),
  });
  return await response.json();
}

export async function createFurniture(
  date,
  category,
  type,
  price,
  photos,
  description,
  availability
) {
  const url = buildUrl("/furnitures");
  const response = await fetch(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({
      date: date,
      category: category,
      type: type,
      price: price,
      photos: photos,
      description: description,
      availability: availability,
    }),
  })
  return await response.json();
}