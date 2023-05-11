export const setCookie = (cookie_name, cookie_value, days) => {
  const cookie_days = days ? 60 * 60 * 24 * days : "";
  if (cookie_name !== "" && cookie_name !== null) {
    const set_cookie_value =
      typeof cookie_value === "string"
        ? encodeURI(cookie_value)
        : encodeURI(JSON.stringify(cookie_value));
    if (days) {
      document.cookie =
        cookie_name +
        "=" +
        set_cookie_value +
        ";max-age=" +
        cookie_days +
        "; path=/";
    } else {
      document.cookie = cookie_name + "=" + set_cookie_value + "; path=/";
    }
  }
};

export const getCookie = (cookie_name, type) => {
  if (cookie_name !== "" && cookie_name !== null) {
    const set_replace = "(?:(?:^|.*s*)" + cookie_name + "s*=s*([^;]*).*$)|^.*$";
    const cookie_value = document.cookie.replace(new RegExp(set_replace), "$1");
    const get_cookie_value =
      cookie_value && type === "json"
        ? JSON.parse(decodeURI(cookie_value))
        : decodeURI(cookie_value);
    return get_cookie_value;
  }
};
