package com.lolapi.champions.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.json.JSONObject;
import org.json.JSONException;
import java.util.Map;
import java.util.TreeMap;

@Service
public class ChampionService {

    private final String DATA_DRAGON_URL = "https://ddragon.leagueoflegends.com/cdn/15.3.1/data/pt_BR/champion.json";
    private final String SPLASH_URL = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

    public String fetchChampions() {
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(DATA_DRAGON_URL, String.class);

        try {
            JSONObject jsonResponse = new JSONObject(response);
            JSONObject data = jsonResponse.getJSONObject("data");

            // Usando TreeMap para ordenar os campeões
            Map<String, JSONObject> sortedChampions = new TreeMap<>();

            for (String championId : data.keySet()) {
                JSONObject champ = data.getJSONObject(championId);

                // Pegando os campos necessários
                String name = champ.getString("name");
                String blurb = champ.getString("blurb");
                String splashImage = SPLASH_URL + championId + "_0.jpg"; // Imagem splash completa

                // Criando um novo JSON para o campeão
                JSONObject champData = new JSONObject();
                champData.put("name", name);
                champData.put("blurb", blurb);
                champData.put("image", splashImage);

                // Adicionando ao JSON ordenado
                sortedChampions.put(name, champData);
            }

            return new JSONObject(sortedChampions).toString(4); // Retorna JSON formatado

        } catch (JSONException e) {
            return "{\"error\": \"Erro ao processar os dados da API\"}";
        }
    }
}
