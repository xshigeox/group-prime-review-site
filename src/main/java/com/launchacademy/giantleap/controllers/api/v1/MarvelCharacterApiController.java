package com.launchacademy.giantleap.controllers.api.v1;

import com.launchacademy.giantleap.models.MarvelCharacter;
import com.launchacademy.giantleap.repositories.MarvelCharacterRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class MarvelCharacterApiController {

  @Autowired
  private MarvelCharacterRepository marvelCharacterRepo;

  @NoArgsConstructor
  private class MarvelCharacterNotFoundException extends RuntimeException {

  }

  @ControllerAdvice
  private class MarvelCharacterNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(MarvelCharacterNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String marvelCharacterNotFound(MarvelCharacterNotFoundException ex) {
      return ex.getMessage();
    }
  }

  @GetMapping("/characters")
  public Iterable<MarvelCharacter> getAllCharacters() {
    return marvelCharacterRepo.findAll();
  }

  @GetMapping("/characters/{id}")
  public MarvelCharacter getSingleCharacter(@PathVariable Integer id) {
    return marvelCharacterRepo.findById(id).orElseThrow(MarvelCharacterNotFoundException::new);
  }
}
