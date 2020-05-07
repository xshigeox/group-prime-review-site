package com.launchacademy.giantleap.controllers.api.v1;

import com.launchacademy.giantleap.models.MarvelCharacter;
import com.launchacademy.giantleap.models.Review;
import com.launchacademy.giantleap.repositories.ReviewRepository;
import javax.validation.Valid;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewApiController {

  @Autowired
  private ReviewRepository reviewRepo;

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

 @PostMapping("/api/v1/new_review")
  public Review create(@RequestBody @Valid Review review, BindingResult bindingResult) {
   if (bindingResult.hasErrors()) {
     throw new InvalidCharacterIdException();
   } else {
     return reviewRepo.save(review);
   }
  }
}
