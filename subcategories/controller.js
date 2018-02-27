'use strict';

const model = require( '../models' );
const Subcategory = model.subcategory;

function controller() {
    return {
        create: create,
        list: list
    }

    /*
     * Creates new subcategory.
     */
    function create( req, res ) {
        Subcategory
            .create( { name: req.body.name, categoryid: req.body.categoryid } )
            .then( subcategory => {
                res.send( 'Successfully created subcategory ' + subcategory.name );
            } )
            .catch( error => {
                res.json( { error: 'Error creating subcategory' } );
            } );
    }

    /*
     * Lists all available subcategories
     */
    function list( req, res ) {
        
    }
}

module.exports = controller;
