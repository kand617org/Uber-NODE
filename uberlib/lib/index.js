/**
  * @module UberLib
  *  
  * Using the Uber API, developers can integrate the power of Uber into 3rd party applications. Calls to the API can be made to request information on available car types, driver location expressed in geo-coordinates, time estimates, estimated prices (including currency conversion when applicable), as well as user account history and activity. The Uber API documentation describes deep linking techniques to programmatically launch the native app from iOS or Android, or the Uber mobile site from mobile web. The API comes with a detailed style guide and asset package for implementing licensed brandings. The Uber API Affiliate program grants cash and issues Uber credits for new user onboarding through a 3rd party app.
  */

var configuration = require('./configuration'),
    ProductsController = require('./Controllers/ProductsController'),
    EstimatesController = require('./Controllers/EstimatesController'),
    PromotionsController = require('./Controllers/PromotionsController'),
    MeController = require('./Controllers/MeController'),
    RequestsController = require('./Controllers/RequestsController');


function initializer(){}

//Main functional components of UberLib
initializer.configuration = configuration;
initializer.ProductsController = ProductsController;
initializer.EstimatesController = EstimatesController;
initializer.PromotionsController = PromotionsController;
initializer.MeController = MeController;
initializer.RequestsController = RequestsController;

//Main Models of UberLib

module.exports = initializer;