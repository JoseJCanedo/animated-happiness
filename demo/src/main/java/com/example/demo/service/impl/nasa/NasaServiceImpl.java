package com.example.demo.service.impl.nasa;

import com.example.demo.domain.NasaApiResponse;
import com.example.demo.service.nasa.NasaService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class NasaServiceImpl implements NasaService {

    @Override
    public NasaApiResponse getNasaSingle(String count, String thumbs) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", NasaApiResponse.class);
    }

    @Override
    public NasaApiResponse[] getNasaMulti(String count, String thumbs, String endDate, String startDate, String date) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<NasaApiResponse[]> resp = restTemplate.getForEntity("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=" + count, NasaApiResponse[].class);
        return resp.getBody();
    }

    @Override
    public NasaApiResponse[] getNumNasaMulti(String count, String thumbs) {
        return null;
    }

    @Override
    public NasaApiResponse[] getDateRangeNasaMulti(String thumbs, String endDate, String startDate) {
        return new NasaApiResponse[0];
    }

    private NasaApiResponse[] getData (String count, String thumbs, String endDate, String startDate, String date){
        String uri = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<NasaApiResponse[]> resp = restTemplate.getForEntity(uri, NasaApiResponse[].class);
        return resp.getBody();
    }

}
