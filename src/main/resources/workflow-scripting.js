var newRestHost;

if (swaggerVersion == "OpenAPI 3.0") {
    // add the swagger host
    newRestHost = RESTHostManager.createRESTHostFromOpenApiUrl(selectedRESTHost.name, swaggerSpecUrl, null, hostURL, null);
} else {
    newRestHost = RESTHostManager.createRESTHostFromSwaggerSpecUrl(selectedRESTHost.name, selectedRESTHost.url, null, hostURL, null);
}

// copy the operations from the newly created swagger host to the selectedRESTHost - this way
// we update the endpoints
var newOperations = []
var newRestHostOperationsIds = newRestHost.getOperations()

for (var index in newRestHostOperationsIds) {

    var operation = newRestHost.getOperation(newRestHostOperationsIds[index]);

    System.log("Adding operation: '" + operation + "' from newly created swagger/openapi host to new operations list.")

    newOperations.push(operation);
}

var oldOperationsIds = selectedRESTHost.getOperations();

//remove the old operations from the selected rest host
for (var index in oldOperationsIds) {

    var operation = selectedRESTHost.getOperation(oldOperationsIds[index]);

    System.log("Removing operation '" + oldOperationsIds[index] + "' from " + selectedRESTHost)

    selectedRESTHost.removeOperation(oldOperationsIds[index]);
}

// add the new operations from swagger host to selected rest host
for (var index in newOperations) {

    System.log("Adding operation '" + + "' to " + selectedRESTHost)

    selectedRESTHost.addOperation(newOperations[index])
}

selectedRESTHost.url = newRestHost.url

// save the REST Host
RESTHostManager.updateHost(selectedRESTHost)