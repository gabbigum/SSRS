package com.vmware.petstorelite.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;

@Service
public class SpecificationService {
//TODO Add disclaimer that this server cannot be used to execute REST Operations against
    static final String openAPIv1SpecFile = "src/main/resources/SwaggerPetStore_v1.json";
    static final String openAPIv2SpecFile = "src/main/resources/SwaggerPetStore_v2.json";

    public String getV1Spec() {
        String result = null;

        try {
            result = readFile(openAPIv1SpecFile);
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        return result;
    }

    public String getV2Spec() {
        String result = null;

        try {
            result = readFile(openAPIv2SpecFile);
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        return result;
    }

    private String readFile(String file) throws IOException {
        return Files.readString(Paths.get(file));
    }
}
