package com.launchacademy.giantleap.seeders;

import com.launchacademy.giantleap.models.Hero;
import com.launchacademy.giantleap.models.Review;
import com.launchacademy.giantleap.repositories.HeroRepository;
import com.launchacademy.giantleap.repositories.ReviewRepository;
import java.sql.Timestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReviewSeeder {

  @Autowired
  private ReviewRepository reviewRepo;

  @Autowired
  private HeroRepository marvelCharacterRepo;

  public void seed() {
    Iterable<Hero> characters = marvelCharacterRepo.findAll();

    if (reviewRepo.count() == 0) {
      for (Hero character : characters) {
        Review review = new Review();
        review.setRating(5);
        review.setReview("First 5 star rating for " + character.getName() + "!");
        review.setHero(character);
        review.setTimestamp(new Timestamp(System.currentTimeMillis()));
        reviewRepo.save(review);

        Review review1 = new Review();
        review1.setRating(2);
        review1.setReview("I don't like " + character.getName() + " ...");
        review1.setHero(character);
        review1.setTimestamp(new Timestamp(System.currentTimeMillis()));
        reviewRepo.save(review1);
      }

    }
  }
}
