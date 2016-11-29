import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection( {

    port: 5500

} );

server.route( {

    method: 'GET',
    path: '/',
    handler: ( request, reply ) => {

        reply( 'Hello World from GET!' );

    }

} );

server.route( {

    method: 'POST',
    path: '/',
    handler: ( request, reply ) => {

        reply( 'Hello World from POST!' );

    }

} );

server.start( err => {

    if( err ) {

        // Fancy error handling here
        console.error( 'Error was handled!' );
        console.error( err );

    }

    console.log( `Server started at ${ server.info.uri }` );

} );
