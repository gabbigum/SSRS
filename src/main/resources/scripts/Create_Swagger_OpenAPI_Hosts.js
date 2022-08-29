var schemas = []

for (var index in operationsResult) {

    // adding the swagger/openapi schema strings that were aggregated in 'Get REST Host Operations'
    schemas.push(operationsResult[index].contentAsString)
}

// REST Hosts that will be generated from the openapi/swagger schemas
var generatedHosts = []

for (var i = 0; i < schemas.length; i++) {

    var host;

    host = createRESTHostFrom("openapi", schemas[i]);

    if (host == null) {
        host = createRESTHostFrom("swagger", schemas[i])
    }

    generatedHosts.push(host);
}

function createRESTHostFrom(swaggerVersion, schema) {
    var host;

    try {
        System.log("Trying to create REST Host from " + swaggerVersion + " schema string...")

        if (swaggerVersion == "openapi") {

            host = RESTHostManager.createRESTHostFromOpenApiSpecString("generated-oas-host-" + i, schemas[i], null, null);

        } else if (swaggerVersion == "swagger") {

            host = RESTHostManager.createRESTHostFromSwaggerSpecString("generated-swagger-host-" + i, schemas[i], null, null);
        }

        System.log("Successfully created REST Host from " + swaggerVersion + " schema string: " + host)
    } catch (ex) {
        System.log("Could not create a REST Host from " + swaggerVersion + " spec string: " + ex);
    }

    return host
}

for (var index in generatedHosts) {
    RESTHostManager.addHost(generatedHosts[index])
}