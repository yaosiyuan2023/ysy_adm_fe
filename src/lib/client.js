import qs from "query-string";
import { ApiDomain } from "../constants";

// const request = (method, url, body, headers) => {
//   const init = {
//     method,
//   };
//   if (method === "POST") {
//     if (body instanceof FormData) {
//       init.body = body;
//     } else {
//       init.headers.Accept = "application/json";
//       if (!("Content-Type" in init.headers)) {
//         init.headers["Content-Type"] = "application/json";
//       }
//       // Fileの場合
//       if (body instanceof File) {
//         init.body = body;
//       } else {
//         init.body = JSON.stringify(body);
//       }
//     }
//   }
//   return fetch(url, init)
//     .then((response) => {
//       if (!response.ok || response.status === 204) {
//         return Promise.reject(response);
//       }
//       return new Promise((resolve) => {
//         response.text().then((text) => {
//           resolve({ responseText: text, info: { status: response.status } });
//         });
//       });
//     })
//     .then(({ responseText, responseBody, info }) => {
//       if (responseBody) {
//         return { response: responseBody, ...info };
//       } else {
//         let body = "";
//         try {
//           body = JSON.parse(responseText);
//         } catch (e) {
//           return { response: responseText, ...info };
//         }
//         if (
//           Array.isArray(body.content) &&
//           body.content.length === 0 &&
//           body.count === 0
//         ) {
//           throw { status: 204 }; // eslint-disable-line no-throw-literal
//         }
//         return { response: body, ...info };
//       }
//     })
//     .catch(async (error) => {
//       typeof errorHandler === "function" && errorHandler(error);
//       return { error };
//     });
// };

let errorHandler = null;

// export const post = (url, body, headers) => request("POST", url, body, headers);

export const signUpAPI = (nickname, email, password) => {
  return fetch(`${ApiDomain}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nickname, email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// // 用户登录的API端点
export const loginAPI = (email, password) => {
  return fetch(`${ApiDomain}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
