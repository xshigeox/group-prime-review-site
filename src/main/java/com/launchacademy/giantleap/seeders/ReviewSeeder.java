package com.launchacademy.giantleap.seeders;

import com.launchacademy.giantleap.models.MarvelCharacter;
import com.launchacademy.giantleap.models.Review;
import com.launchacademy.giantleap.repositories.MarvelCharacterRepository;
import com.launchacademy.giantleap.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReviewSeeder {

  @Autowired
  private ReviewRepository reviewRepo;

  @Autowired
  private MarvelCharacterRepository marvelCharacterRepo;

  public void seed() {
    Iterable<MarvelCharacter> characters = marvelCharacterRepo.findAll();

    if (reviewRepo.count() == 0) {
      for (MarvelCharacter character : characters) {
        Review review = new Review();
        review.setRating(5);
        review.setReview("First 5 star rating for " + character.getName() + "!");
        review.setMarvelCharacter(character);
        reviewRepo.save(review);

        Review review1 = new Review();
        review1.setRating(2);
        review1.setReview("I don't like " + character.getName() + " ...");
        review1.setMarvelCharacter(character);
        reviewRepo.save(review1);
      }

    }
  }
}
