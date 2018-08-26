var mongoose = require('mongoose');
const me = mongoose.connect('mongodb://localhost:27017/tokens', { useNewUrlParser: true });
module.exports = me