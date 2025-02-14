package com.lolapi.champions.controller;

import com.lolapi.champions.service.ChampionService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/champions")
@CrossOrigin("*") // Permite requisições do frontend sem erro de CORS
public class ChampionController {

    private final ChampionService championService;

    public ChampionController(ChampionService championService) {
        this.championService = championService;
    }

    // Endpoint para buscar todos os campeões com name, blurb e image
    @GetMapping
    public ResponseEntity<String> getAllChampions() {
        return ResponseEntity.ok(championService.fetchChampions());
    }
}
