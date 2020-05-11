package com.launchacademy.giantleap.repositories;

import com.launchacademy.giantleap.models.MarvelCharacter;
import com.launchacademy.giantleap.models.Review;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ReviewRepository extends PagingAndSortingRepository<Review, Integer> {

  public List<Review> findAllByMarvelCharacter(MarvelCharacter character);

  public List<Review> findAllByMarvelCharacterOrderByIdDesc(MarvelCharacter character);

}
