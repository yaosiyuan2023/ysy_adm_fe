export const RootPath = process.env.PUBLIC_URL ?? ""; // 应用程序的根路径

const apiPath = `${RootPath}/api`;

export const ApiDomain =
  process.env.NODE_ENV === "production"
    ? apiPath
    : `http://localhost:3001${apiPath}`; // 生产环境 ？ 开发环境 ：

export const DateFormat = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD HH:mm:ssZ",
  dateMonth: "YYYY-MM",
};
