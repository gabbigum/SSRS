# Swagger Schema Registry Service
This service is used for the {link} blogpost demo. It exposes 3 endpoints which return
OpenAPI host schema, Swagger v2 and OpenAPI v3 Petstore schemas.

```
http://{server.ip}:8080/host-spec
```

```
http://{server.ip}:8080/v2/petstore
```

```
http://{server.ip}:8080/v3/petstore
```

## Running the project
You must have java 11 and maven 3.8+ installed.

Run `./mvnw spring-boot:run` to start the project