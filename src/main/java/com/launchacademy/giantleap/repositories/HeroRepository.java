package com.launchacademy.giantleap.repositories;

import com.launchacademy.giantleap.models.Hero;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface HeroRepository extends
    PagingAndSortingRepository<Hero, Integer> {

  public Hero findByName(String name);

  public Iterable<Hero> findAllByOrderByName();

}
