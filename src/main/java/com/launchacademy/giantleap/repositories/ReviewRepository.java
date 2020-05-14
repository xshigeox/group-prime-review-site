package com.launchacademy.giantleap.repositories;

import com.launchacademy.giantleap.models.Hero;
import com.launchacademy.giantleap.models.Review;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ReviewRepository extends PagingAndSortingRepository<Review, Integer> {

  public List<Review> findAllByHero(Hero character);

  public List<Review> findAllByHeroOrderByIdDesc(Hero character);

}
