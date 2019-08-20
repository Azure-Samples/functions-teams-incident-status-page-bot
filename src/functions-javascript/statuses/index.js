module.exports = async function (context, req, statuses) {
    context.res.json(statuses);
};