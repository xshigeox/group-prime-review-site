package com.launchacademy.giantleap.controllers.api.v1;

import com.launchacademy.giantleap.models.MarvelCharacter;
import com.launchacademy.giantleap.repositories.MarvelCharacterRepository;
import com.launchacademy.giantleap.repositories.ReviewRepository;
import javax.validation.Valid;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class MarvelCharacterApiController {

  @Autowired
  private MarvelCharacterRepository marvelCharacterRepo;

  @Autowired
  private ReviewRepository reviewRepo;

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

  @NoArgsConstructor
  private class InvalidMarvelCharacterException extends RuntimeException {

  }

  @ControllerAdvice
  private class InvalidMarvelCharacterAdvice {

    @ResponseBody
    @ExceptionHandler(InvalidMarvelCharacterException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    String invalidMarvelCharacter(InvalidMarvelCharacterException ex) {
      return ex.getMessage();
    }
  }

  @GetMapping("/characters")
  public Iterable<MarvelCharacter> getAllCharacters() {
    return marvelCharacterRepo.findAllByOrderByName();
  }

  @GetMapping("/characters/{id}")
  public MarvelCharacter getSingleCharacter(@PathVariable Integer id) {
    return marvelCharacterRepo.findById(id).orElseThrow(MarvelCharacterNotFoundException::new);
  }

  @PostMapping("/new")
  public MarvelCharacter create(@RequestBody @Valid MarvelCharacter marvelCharacter,
      BindingResult bindingResult) {
    if (bindingResult.hasErrors()) {
      throw new InvalidMarvelCharacterException();
    } else {
      return marvelCharacterRepo.save(marvelCharacter);
    }
  }

  @PutMapping("/edit_character/{id}")
  public MarvelCharacter update(@RequestBody MarvelCharacter newMarvelCharacter,
      @PathVariable Integer id) {
    return marvelCharacterRepo.findById(id).map(marvelCharacter -> {
      marvelCharacter.setId(id);
      marvelCharacter.setName(newMarvelCharacter.getName());
      marvelCharacter.setAlias(newMarvelCharacter.getAlias());
      marvelCharacter.setBio(newMarvelCharacter.getBio());
      marvelCharacter.setDurability(newMarvelCharacter.getDurability());
      marvelCharacter.setEnergy(newMarvelCharacter.getEnergy());
      marvelCharacter.setFightingSkills(newMarvelCharacter.getFightingSkills());
      marvelCharacter.setIntelligence(newMarvelCharacter.getIntelligence());
      marvelCharacter.setSpeed(newMarvelCharacter.getSpeed());
      marvelCharacter.setStrength(newMarvelCharacter.getStrength());
      marvelCharacter.setHeight(newMarvelCharacter.getHeight());
      marvelCharacter.setWeight(newMarvelCharacter.getWeight());
      marvelCharacter.setGender(newMarvelCharacter.getGender());
      marvelCharacter.setEyeColor(newMarvelCharacter.getEyeColor());
      marvelCharacter.setHairColor(newMarvelCharacter.getHairColor());
      marvelCharacter.setImgUrl(newMarvelCharacter.getImgUrl());
      marvelCharacter.setVote(newMarvelCharacter.getVote());
      return marvelCharacterRepo.save(marvelCharacter);
    }).orElseThrow(MarvelCharacterNotFoundException::new);
  }

  @PutMapping("/upvote/{id}")
  public MarvelCharacter upvote(@RequestBody MarvelCharacter newMarvelCharacter, @PathVariable Integer id) {
    return marvelCharacterRepo.findById(id).map(marvelCharacter -> {
      marvelCharacter.setId(id);
      marvelCharacter.setName(newMarvelCharacter.getName());
      marvelCharacter.setAlias(newMarvelCharacter.getAlias());
      marvelCharacter.setBio(newMarvelCharacter.getBio());
      marvelCharacter.setDurability(newMarvelCharacter.getDurability());
      marvelCharacter.setEnergy(newMarvelCharacter.getEnergy());
      marvelCharacter.setFightingSkills(newMarvelCharacter.getFightingSkills());
      marvelCharacter.setIntelligence(newMarvelCharacter.getIntelligence());
      marvelCharacter.setSpeed(newMarvelCharacter.getSpeed());
      marvelCharacter.setStrength(newMarvelCharacter.getStrength());
      marvelCharacter.setHeight(newMarvelCharacter.getHeight());
      marvelCharacter.setWeight(newMarvelCharacter.getWeight());
      marvelCharacter.setGender(newMarvelCharacter.getGender());
      marvelCharacter.setEyeColor(newMarvelCharacter.getEyeColor());
      marvelCharacter.setHairColor(newMarvelCharacter.getHairColor());
      marvelCharacter.setImgUrl(newMarvelCharacter.getImgUrl());
      marvelCharacter.setVote(newMarvelCharacter.getVote() + 1);
      return marvelCharacterRepo.save(marvelCharacter);
    }).orElseThrow(MarvelCharacterNotFoundException::new);
  }

  @PutMapping("/downvote/{id}")
  public MarvelCharacter downvote(@RequestBody MarvelCharacter newMarvelCharacter, @PathVariable Integer id) {
    return marvelCharacterRepo.findById(id).map(marvelCharacter -> {
      marvelCharacter.setId(id);
      marvelCharacter.setName(newMarvelCharacter.getName());
      marvelCharacter.setAlias(newMarvelCharacter.getAlias());
      marvelCharacter.setBio(newMarvelCharacter.getBio());
      marvelCharacter.setDurability(newMarvelCharacter.getDurability());
      marvelCharacter.setEnergy(newMarvelCharacter.getEnergy());
      marvelCharacter.setFightingSkills(newMarvelCharacter.getFightingSkills());
      marvelCharacter.setIntelligence(newMarvelCharacter.getIntelligence());
      marvelCharacter.setSpeed(newMarvelCharacter.getSpeed());
      marvelCharacter.setStrength(newMarvelCharacter.getStrength());
      marvelCharacter.setHeight(newMarvelCharacter.getHeight());
      marvelCharacter.setWeight(newMarvelCharacter.getWeight());
      marvelCharacter.setGender(newMarvelCharacter.getGender());
      marvelCharacter.setEyeColor(newMarvelCharacter.getEyeColor());
      marvelCharacter.setHairColor(newMarvelCharacter.getHairColor());
      marvelCharacter.setImgUrl(newMarvelCharacter.getImgUrl());
      marvelCharacter.setVote(newMarvelCharacter.getVote() - 1);
      return marvelCharacterRepo.save(marvelCharacter);
    }).orElseThrow(MarvelCharacterNotFoundException::new);
  }

  @DeleteMapping("/characters/delete/{id}")
  public ResponseEntity<Void> deleteCharacterById(@PathVariable Integer id) {
    try {

      marvelCharacterRepo.deleteById(id);
      return ResponseEntity.ok().build();
    } catch (MarvelCharacterNotFoundException ex) {
      System.out.println(ex.getMessage());
      return ResponseEntity.notFound().build();
    }
  }
}
