const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    year_of_the_census: { type: String },
    census_takers_name: { type: String },
    number_of_people_in_household: { type: String },
    description: { type: String },
    household_state: { type: String },
    household_city: { type: String },
    updated_date: { type: Date, default: Date.now }
}, {
    collection: 'census'
});

module.exports = mongoose.model('Census', CensusSchema);
