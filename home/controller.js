'use strict';

/**
 *
 * @returns {{home: home}}
 */
function controller() {
    /**
     * Handles requests for home page.
     *
     * @param req request object
     * @param res result object
     */
    function home( req, res ) {
        res.render( 'home' );
    }

    /**
     * Handles requests for /contacts page
     *
     * @param req request object
     * @param res result object
     */
    function contacts( req, res ) {
        res.send( 'This is home controller "/contacts" handler' );
    }

    /**
     * Handles requests for /about page
     *
     * @param req
     * @param res
     */
    function about( req, res ) {
        res.send( 'This is home controller "/about" handler' );
    }

    return {
        home: home,
        contacts: contacts,
        about: about
    };
}

module.exports = controller;
