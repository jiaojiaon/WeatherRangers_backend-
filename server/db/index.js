const db = require('./database')
const Favorites = require('./favorites')
const Locations = require('./location')
const User = require('./user')


//associations
//not sure about these
// Locations.belongsToMany(Favorites, {through: 'Location_Favorites'})
// User.belongsToMany(Favorites, {through: 'User_Favorites'})

User.hasMany(Favorites)
Favorites.belongsTo(User)
Locations.hasMany(Favorites)
Favorites.belongsTo(Locations)


module.exports = {
    db,
    Favorites,
    Locations,
    User
}