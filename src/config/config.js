const dotenv = require('dotenv');
dotenv.config();


module.exports.getConfig = () => {
    const config = {
        'MODE': 'Development',
        'PORT': process.env.API_PORT,
        'MONGO_URL': process.env.MONGO_URL,
    };

    // Modify for Production
    if (process.env.NODE_ENV === 'production') {
        config.MODE = 'Production';
    }

    return config;
};
