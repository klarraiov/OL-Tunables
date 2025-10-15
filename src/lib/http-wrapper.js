/**
 * HTTP wrapper module to replace the missing http-wrapper dependency
 * This provides a compatible interface using axios
 */

const axios = require('axios');

/**
 * Make an HTTP GET request
 * @param {string} url - The URL to fetch
 * @returns {Promise<{content: Buffer}>} - Promise resolving to an object with content as Buffer
 */
function get(url) {
    return axios.get(url, {
        responseType: 'arraybuffer',
        timeout: 30000, // 30 second timeout
    }).then(response => {
        return {
            content: Buffer.from(response.data)
        };
    });
}

module.exports = {
    get
};
