const TokenService = {
    getLocalRefreshToken: function () {
        const user = JSON.parse(localStorage.getItem('user'));
        return user?.refreshToken;
    },

    getLocalAccessToken: function () {
        const user = JSON.parse(localStorage.getItem('user'));
        return user?.access;
        // return JSON.stringify({ access: user?.access });
    },

    updateLocalAccessToken: function (token) {
        let user = JSON.parse(localStorage.getItem('user'));
        user.access = token;
        localStorage.setItem('user', JSON.stringify(user));
    },

    getUser: function () {
        return JSON.parse(localStorage.getItem('user'));
    },

    setUser: function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    },

    removeUser: function () {
        localStorage.removeItem('user');
    },
};

export default TokenService;
