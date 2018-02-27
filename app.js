const express    = require( 'express' );
const app        = express();
const bodyParser = require( 'body-parser' );

// Routes
const home          = require( './home/routes' );
const products      = require( './products/routes' );
const categories    = require( './categories/routes' );
const subcategories = require( './subcategories/routes' );

app.set( 'view engine', 'pug' );

app.use( express.static( 'public' ) );

// Middlewares
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

// Register routes
app.use( '/', home );
app.use( '/products', products );
app.use( '/categories', categories );
app.use( '/subcategories', subcategories );

app.listen( 3000, function() {
  console.log( 'Application started on port 3000' );
} );
