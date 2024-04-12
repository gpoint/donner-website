export default {
  bakeCookie: ({ name, value, maxAge, path = "/" }) => {
    let cookieDough = `${name}=${value};Path=${path};`;
    if (!!maxAge) {
      cookieDough += `Max-Age=${maxAge}`;
    }
    document.cookie = cookieDough;
  },
  eatCookie: (cookieName) => {
    document.cookie = `${cookieName}=;Max-Age=0`;
  },
  seeCookie: (cookieName) => {
    return document.cookie
      .split(";")
      .find((row) => row.includes(`${cookieName}=`))
      ?.split("=")[1].trim();
  },
};
