// populate array with REST Operations
operations = []

var operationIds = selectedRESTHost.getOperations()

for (var index in operationIds) {
    // get operation by id
    var operation = selectedRESTHost.getOperation(operationIds[index])

    System.log("Adding operation to operations list: " + operation.name)

    operations.push(operation)
}

operationsOut = operations