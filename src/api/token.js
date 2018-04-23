const localStorage = window.localStorage;

const TOKEN = {
  key: 'jobsar_access_token',
  
  get() {
    const token = localStorage.getItem(this.key);

    if(token) return token;

    return btoa('consumer_android_key:consumer_android_secret');
  },

  set(token) {
    localStorage.setItem(this.key, token);
  },

  update(secret) {
    const token = btoa('consumer_android_key:consumer_android_secret:' + secret);

    this.set(token);
  }
}

export default TOKEN;