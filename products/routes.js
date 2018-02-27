'use strict';

const express    = require( 'express' );
const router     = express.Router();
const controller = require( './controller' )();

router.post( '/', controller.add );

router.get( '/{id}', controller.getProduct );

module.exports = router;
