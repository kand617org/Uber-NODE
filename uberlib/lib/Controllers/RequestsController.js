/**
 * UberLib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 03/05/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var RequestsController = {

    /**
     * Get the receipt information of the completed request.
     * @param {string} requestId    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ReceiptRequestResponse}
     */
    getRequestsReceiptByRequestId : function(requestId, callback){

        //prepare query string for API call;
        var baseUri = APIHelper.formatString(configuration.BASEURI, configuration.apiMode, configuration.version);
        
        var queryBuilder = baseUri + "/requests/{request_id}/receipt";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "request_id" : requestId
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : "Bearer " + configuration.oAuthAccessToken
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Get a map with a visual representation of a Request.
     * @param {string} requestId    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MapRequestResponse}
     */
    getRequestsMapByRequestId : function(requestId, callback){

        //prepare query string for API call;
        var baseUri = APIHelper.formatString(configuration.BASEURI, configuration.apiMode, configuration.version);
        
        var queryBuilder = baseUri + "/requests/{request_id}/map";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "request_id" : requestId
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : "Bearer " + configuration.oAuthAccessToken
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Get the real time status of an ongoing trip that was created using the Ride Request endpoint.
     * @param {string} requestId    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {RequestResponse}
     */
    getRequestsByRequestId : function(requestId, callback){

        //prepare query string for API call;
        var baseUri = APIHelper.formatString(configuration.BASEURI, configuration.apiMode, configuration.version);
        
        var queryBuilder = baseUri + "/requests/{request_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "request_id" : requestId
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : "Bearer " + configuration.oAuthAccessToken
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Cancel an ongoing Request on behalf of a rider.
     * @param {string} requestId    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    deleteRequestsByRequestId : function(requestId, callback){

        //prepare query string for API call;
        var baseUri = APIHelper.formatString(configuration.BASEURI, configuration.apiMode, configuration.version);
        
        var queryBuilder = baseUri + "/requests/{request_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "request_id" : requestId
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "Authorization" : "Bearer " + configuration.oAuthAccessToken
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "DELETE",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,response.body,context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * The Request Estimate endpoint allows a ride to be estimated given the desired product, start, and end locations. If the end location is not provided, only the pickup ETA and details of surge pricing information are provided. If the pickup ETA is null, there are no cars available, but an estimate may still be given to the user.
     * You can use this endpoint to determine if surge pricing is in effect. Do this before attempting to make a request so that you can preemptively have a user confirm surge by sending them to the surge_confirmation_href provided in the response.
     * @param {string} productId    Required parameter: The unique ID of the product being requested.
     * @param {int} startLatitude    Required parameter: The beginning or "pickup" latitude.
     * @param {int} startLongitude    Required parameter: The beginning or "pickup" longitude.
     * @param {int|null} endLatitude    Optional parameter: The final or destination latitude. If not included, only the pickup ETA and details of surge pricing will be included.
     * @param {int|null} endLongitude    Optional parameter: The final or destination longitude. If not included, only the pickup ETA and details of surge pricing will be included.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {RequestEstimateResponse}
     */
    createRequestsEstimate : function(productId, startLatitude, startLongitude, endLatitude, endLongitude, callback){

        //prepare query string for API call;
        var baseUri = APIHelper.formatString(configuration.BASEURI, configuration.apiMode, configuration.version);
        
        var queryBuilder = baseUri + "/requests/estimate";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "product_id" : productId,
            "start_latitude" : startLatitude,
            "start_longitude" : startLongitude,
            "end_latitude" : endLatitude,
            "end_longitude" : endLongitude
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : "Bearer " + configuration.oAuthAccessToken
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * The Request endpoint allows a ride to be requested on behalf of an Uber user given their desired product, start, and end locations.
     * @param {string} endLatitude    Required parameter: Latitude component of end location.
     * @param {string} endLongitude    Required parameter: Longitude component of end location.
     * @param {string} productId    Required parameter: The unique ID of the product being requested.
     * @param {string} startLatitude    Required parameter: Latitude component of start location.
     * @param {string} startLongitude    Required parameter: Longitude component of start location.
     * @param {string|null} surgeConfirmationId    Optional parameter: The unique identifier of the surge session for a user. Required when returned from a 409 Conflict response on previous POST attempt.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ReguestsResponse}
     */
    createRequests : function(endLatitude, endLongitude, productId, startLatitude, startLongitude, surgeConfirmationId, callback){

        //prepare query string for API call;
        var baseUri = APIHelper.formatString(configuration.BASEURI, configuration.apiMode, configuration.version);
        
        var queryBuilder = baseUri + "/requests";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "end_latitude" : endLatitude,
            "end_longitude" : endLongitude,
            "product_id" : productId,
            "start_latitude" : startLatitude,
            "start_longitude" : startLongitude,
            "surge_confirmation_id" : surgeConfirmationId
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : "Bearer " + configuration.oAuthAccessToken
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 209) {
                    callback({errorMessage: "TODO: Add error message", errorCode: 209, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    }

};

module.exports = RequestsController;