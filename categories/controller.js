'use strict';

const models   = require( '../models' );
const Category = models.category;

function controller() {
    return {
        create: create,
        list: list,
        get: get
    }

    /*
     * Creates new category.
     *
     */
    function create( req, res ) {
        Category
            .create( { name: req.body.name } )
            .then( category => {
                res.send( 'Category ' + category.name + 'created successfully' );
            } )
            .catch( error => {
                res.json( { error: 'Error creating category' } );
            } );
    }

    /*
     * Lists all available categories.
     *
     */
    function list( req, res ) {
        Category
            .findAndCountAll()
            .then( result => {
                if( result.count === 0 ) {
                    res.send( 'No categories inserted yet' );
                } else {
                    res.json( result.rows );
                }
            } );
    }
}

module.exports = controller;
