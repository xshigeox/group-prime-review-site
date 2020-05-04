package com.launchacademy.giantleap.repositories;

import com.launchacademy.giantleap.models.Review;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ReviewRepository extends PagingAndSortingRepository<Review, Integer> {

}
