export default {
    jwt: {
        secret: process.env.APP_SECRET,
        expiredIn: '1d',
    },
};
