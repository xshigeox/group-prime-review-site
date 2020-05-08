package com.launchacademy.giantleap.controllers.api.v1;

import com.launchacademy.giantleap.models.MarvelCharacter;
import com.launchacademy.giantleap.models.Review;
import com.launchacademy.giantleap.repositories.MarvelCharacterRepository;
import com.launchacademy.giantleap.repositories.ReviewRepository;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewApiController {

  @Autowired
  private ReviewRepository reviewRepo;

  @Autowired
  private MarvelCharacterRepository marvelCharacterRepo;

  @NoArgsConstructor
  private class InvalidCharacterIdException extends RuntimeException {

  }

  @ControllerAdvice
  private class InvalidCharacterIdAdvice {

    @ResponseBody
    @ExceptionHandler(InvalidCharacterIdException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    String invalidCharacterId(InvalidCharacterIdException ex) {
      return ex.getMessage();
    }
  }

  @NoArgsConstructor
  private class ReviewNotFoundException extends RuntimeException {

  }

  @ControllerAdvice
  private class reviewNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(ReviewNotFoundException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    String reviewNotFound(ReviewNotFoundException ex) {
      return ex.getMessage();
    }
  }

  @GetMapping("/api/v1/reviews")
  public Iterable<Review> getAllReviews() {
    return reviewRepo.findAll();
  }

  @GetMapping("/api/v1/reviews/{id}")
  public List<Review> findReviewsByCharacter(@PathVariable Integer id) {
    Optional<MarvelCharacter> character = marvelCharacterRepo.findById(id);
    MarvelCharacter foundCharacter = new MarvelCharacter();

    if (character.isPresent()) {
      foundCharacter = character.get();
    }
    return reviewRepo.findAllByMarvelCharacter(foundCharacter);
  }

  @PostMapping("/api/v1/new_review")
  public Review create(@RequestBody @Valid Review review, BindingResult bindingResult) {
    if (bindingResult.hasErrors()) {
      throw new InvalidCharacterIdException();
    } else {
      return reviewRepo.save(review);
    }
  }

  @DeleteMapping("/api/v1/delete/{id}")
  public ResponseEntity<Void> deleteReviewById(@PathVariable Integer id) {
    try {
      reviewRepo.deleteById(id);
      return ResponseEntity.ok().build();
    } catch (ReviewNotFoundException ex) {
      System.out.println(ex.getMessage());
      return ResponseEntity.notFound().build();
    }
  }
}
