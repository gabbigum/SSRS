package com.vmware.petstorelite.controller;

import com.vmware.petstorelite.service.SpecificationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/petstore")
public class SpecificationController {

    final SpecificationService specificationService;

    @Autowired
    public SpecificationController(SpecificationService specificationService) {
        this.specificationService = specificationService;
    }

    @GetMapping("/v1/specification")
    public String getOpenAPIv1Specification() {
        return specificationService.getV1Spec();
    }

    @GetMapping("/v2/specification")
    public String getOpenAPIv2Specification() {
        return specificationService.getV2Spec();
    }
}
