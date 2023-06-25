const storage = {
  get(key) {
    if (typeof window !== 'undefined') {
      const valueSession = sessionStorage.getItem(key);
      const valueLocal = localStorage.getItem(key);

      if (!valueSession && !valueLocal) {
        return null;
      }

      if (valueSession) {
        return JSON.parse(valueSession);
      } else if (valueLocal) {
        return JSON.parse(valueLocal);
      }
    }

    return null;
  },

  remember(key, value) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },

  set(key, value) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  },

  remove(key) {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(key);
      localStorage.removeItem(key);
    }
  },
};

export default storage;
