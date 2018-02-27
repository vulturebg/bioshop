'use strict';

/**
 * Controller for handling products interactions.
 *
 * @returns { { add: add, getProduct: getProduct } }
 */
function controller() {
    /**
      * Adding new product.
      *
      * @param req
      * @param res
      */
    function add( req, res ) {
        res.send( 'This is products controller for post("/") handler' );
    }

    /**
      * Get product with given id.
      *
      * @param req
      * @param res
      */
    function getProduct( req, res ) {
        res.send( 'Getting product details for {id}: ' + req.params.id );
    }

    return {
        add,
        getProduct
    };
}

module.exports = controller;
