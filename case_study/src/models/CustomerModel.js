import axios from "axios";

class CustomerModel {
  constructor() {
    this.api_url = "http://127.0.0.1:8000/api/auth/";
  }
  async login(credentials) {
    const res = await axios.post(this.api_url + "login", credentials);
    return res.data;
  }

  async register(credentials) {
    const res = await axios.post(this.api_url + "register", credentials);
    return res.data;
  }

  async logout() {
    try {
      let token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await axios.post(this.api_url + "logout", null, config);
      return true;
    } catch (err) {
      return false;
    }
  }

  getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie(cname, cvalue, minutes) {
    const d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  deleteCookie(name) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
}

export default new CustomerModel();