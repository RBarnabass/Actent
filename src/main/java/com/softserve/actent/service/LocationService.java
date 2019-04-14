package com.softserve.actent.service;

import com.softserve.actent.model.entity.Location;

import java.util.List;

public interface LocationService {
    Location add(Location location);

    Location get(Long id);

    List<Location> getAllAutocomplete(String address);
}

