class Cookie {
    public static setCookie(key: string, value: string, expirationDate: Date) {
        document.cookie = `${key}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    }

    public static getCookie(cookieName: string) {
        const name = cookieName + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');

        for (const element of cookieArray) {
          let cookie = element;
          while (cookie.startsWith(' ')) {
            cookie = cookie.substring(1);
          }
          if (cookie.startsWith(name)) {
            return cookie.substring(name.length, cookie.length);
          }
        }
        return null;
    }

    public static getCookieJson(cookieName: string) {
      const cookieData = Cookie.getCookie(cookieName);
      if(cookieData){
        return JSON.parse(cookieData);
      }
      return null;
    }

    public static removeCookie(key: string) {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}
export default Cookie;