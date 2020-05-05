package com.launchacademy.giantleap.repositories;

import com.launchacademy.giantleap.models.MarvelCharacter;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MarvelCharacterRepository extends
    PagingAndSortingRepository<MarvelCharacter, Integer> {

}
