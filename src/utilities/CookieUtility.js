export default {

    bakeCookie: ({ name, value, maxAge, path = "/" }) => {

        let cookieDough = `${name}=${value};Path=${path};`;

        if (!!maxAge) {

            cookieDough += `Max-Age=${maxAge}`;
        }

        document.cookie = cookieDough;
    },

    eatCookie: (cookieName) => {
        const cookie = document.cookie
                .split(";")
                .find((row) => row.includes(`${cookieName}=`))
                ?.split("=")[1].trim();
        
        document.cookie = `${cookieName}=;Max-Age=0`;
        
        return cookie;
    },

    tasteCookie: (cookieName) => {

        return document.cookie
                .split(";")
                .find((row) => row.includes(`${cookieName}=`))
                ?.split("=")[1].trim();
    }
};
