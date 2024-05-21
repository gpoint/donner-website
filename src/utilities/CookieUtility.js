export default {

    bakeCookie: ({ name, value, maxAge, path = "/" }) => {

        let cookieDough = `${name}=${value};Path=${path};SameSite=None;Secure;`;

        if (!!maxAge) {

            cookieDough += `Max-Age=${maxAge}`;
        }

        document.cookie = cookieDough;
    },

    chowCookie: (cookieName) => {
        const cookie = document.cookie
                .split(";")
                .find((row) => row.includes(`${cookieName}=`))
                ?.split("=")[1].trim();
        
        document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        
        return cookie;
    },

    nibble: (cookieName) => {

        return document.cookie
                .split(";")
                .find((row) => row.includes(`${cookieName}=`))
                ?.split("=")[1].trim();
    }
};
