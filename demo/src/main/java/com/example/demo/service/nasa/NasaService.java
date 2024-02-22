package com.example.demo.service.nasa;

import com.example.demo.domain.NasaApiResponse;

public interface NasaService {

    NasaApiResponse getNasaSingle(String date, String thumbs);

    NasaApiResponse[] getNasaMulti(String count, String thumbs, String endDate, String startDate, String date);

    NasaApiResponse[] getNumNasaMulti(String count, String thumbs);

    NasaApiResponse[] getDateRangeNasaMulti(String thumbs, String endDate, String startDate);
}
