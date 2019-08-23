const fs = require('fs');

const indexPromise = getIndex();

module.exports = async function (context, req) {
    const indexHtml = await indexPromise;
    context.res = {
        body: indexHtml,
        headers: {
            'Content-type': "text/html"
        }
    };
};

async function getIndex() {
    const path = __dirname + '/index.html';
    console.log(path);
    const file = await fs.readFileSync(path, 'utf-8');
    return file;
}