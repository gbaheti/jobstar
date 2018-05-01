const localStorage = window.localStorage;

const TOKEN = {
  key: "jobsar_access_token",

  getDefault() {
    return btoa("consumer_android_key:consumer_android_secret");
  },

  get() {
    const token = localStorage.getItem(TOKEN.key);

    if (token) return token;

    return TOKEN.getDefault();
  },

  set(token) {
    localStorage.setItem(TOKEN.key, token);
  },

  update(secret) {
    const token = btoa("consumer_android_key:consumer_android_secret:" + secret);

    TOKEN.set(token);
  },
};

export default TOKEN;
