var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json( [
    { 'name' : 'Croissants',
      'items' : [ 
        'Plain Croissants', 
        'Chocolate Croissants', 
        'Almond Croissants', 
        'Ham Croissants' 
      ]
    }, {
      'name' : 'Muffins',
      'items' : [
        'Blueberry Muffins',
        'Morning Glory Muffins',
        'Raspberry Orange Muffins',
        'Banana Walnut Muffins'
      ]
    }, {
      'name' : 'Scones',
      'items' : [
        'Blueberry Lemon Scone',
        'Chocolate Orange Scone',
        'Butterscotch Scone',
        'Rosemary Parmesan Scone'
      ]
    }, {
      'name' : 'Cookies',
      'items' : [
        'Chocolate Chunk Cookies',
        'Oatmeal Raisin Cookies',
        'Reese\'s Peanut Butter Cookies'
      ]
    }, {
      'name' : 'Cupcakes',
      'items' : [
        'Simon Cupcakes',
        'Milly Cupcakes',
        'Madison Cupcakes',
        'Harriet Cupcakes',
        'Dexter Cupcakes',
        'Red Velvet Cupcakes',
        'Seasonal Cupcakes'
      ]
    }, {
      'name' : 'Brownies & Blondies',
      'items' : [
        'Flourless Fudge Brownies',
        'Sweet Potato Blondies'
      ]
    }, {
      'name' : 'Other AM Pastries',
      'items' : [
        'Coffee Cake Slices',
        'Pecan Sticky Buns',
        'Buttery Buns of the Day',
        'Buttery Biscuit'
      ]
    }
  ]);
});

module.exports = router;
