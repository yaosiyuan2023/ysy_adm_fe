import { post } from "../lib/client";
import { ApiDomain } from "../constants";

// export const loginApi = (param) => post(`${ApiDomain}/login`, param); //login

// export const signupApi = (param) => post(`${ApiDomain}/signup`, param); //signup

// 注册用户的API端点
// export const signUpAPI = (nickname, email, password) => {
//   return fetch("/api/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ nickname, email, password }),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// // 用户登录的API端点
// export const loginAPI = (email, password) => {
//   return fetch("/api/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };
