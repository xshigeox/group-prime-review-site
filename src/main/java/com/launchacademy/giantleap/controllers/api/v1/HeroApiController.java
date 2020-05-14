package com.launchacademy.giantleap.controllers.api.v1;

import com.launchacademy.giantleap.models.Hero;
import com.launchacademy.giantleap.repositories.HeroRepository;
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
public class HeroApiController {

  @Autowired
  private HeroRepository heroRepo;

  @Autowired
  private ReviewRepository reviewRepo;

  @NoArgsConstructor
  private class HeroNotFoundException extends RuntimeException {

  }

  @ControllerAdvice
  private class HeroNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(HeroNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String marvelCharacterNotFound(HeroNotFoundException ex) {
      return ex.getMessage();
    }
  }

  @NoArgsConstructor
  private class InvalidHeroException extends RuntimeException {

  }

  @ControllerAdvice
  private class InvalidHeroAdvice {

    @ResponseBody
    @ExceptionHandler(InvalidHeroException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    String invalidMarvelCharacter(InvalidHeroException ex) {
      return ex.getMessage();
    }
  }

  @GetMapping("/characters")
  public Iterable<Hero> getAllCharacters() {
    return heroRepo.findAllByOrderByName();
  }

  @GetMapping("/rankings")
  public Iterable<Hero> getAllByRanking() {
    return heroRepo.findAllByOrderByVoteDesc();
  }

  @GetMapping("/characters/{id}")

  public Hero getSingleCharacter(@PathVariable Integer id) {
    return heroRepo.findById(id).orElseThrow(HeroNotFoundException::new);
  }

  @PostMapping("/new")
  public Hero create(@RequestBody @Valid Hero hero,
      BindingResult bindingResult) {
    if (bindingResult.hasErrors()) {
      throw new InvalidHeroException();
    } else {
      return heroRepo.save(hero);
    }
  }

  @PutMapping("/edit_character/{id}")
  public Hero update(@RequestBody Hero newHero,
      @PathVariable Integer id) {
    return heroRepo.findById(id).map(hero -> {
      hero.setId(id);
      hero.setName(newHero.getName());
      hero.setAlias(newHero.getAlias());
      hero.setBio(newHero.getBio());
      hero.setDurability(newHero.getDurability());
      hero.setEnergy(newHero.getEnergy());
      hero.setFightingSkills(newHero.getFightingSkills());
      hero.setIntelligence(newHero.getIntelligence());
      hero.setSpeed(newHero.getSpeed());
      hero.setStrength(newHero.getStrength());
      hero.setHeight(newHero.getHeight());
      hero.setWeight(newHero.getWeight());
      hero.setGender(newHero.getGender());
      hero.setEyeColor(newHero.getEyeColor());
      hero.setHairColor(newHero.getHairColor());
      hero.setImgUrl(newHero.getImgUrl());
      hero.setVote(newHero.getVote());
      return heroRepo.save(hero);
    }).orElseThrow(HeroNotFoundException::new);
  }

  @PutMapping("/upvote/{id}")
  public Hero upvote(@RequestBody Hero newHero,
      @PathVariable Integer id) {
    return heroRepo.findById(id).map(hero -> {
      hero.setId(id);
      hero.setName(newHero.getName());
      hero.setAlias(newHero.getAlias());
      hero.setBio(newHero.getBio());
      hero.setDurability(newHero.getDurability());
      hero.setEnergy(newHero.getEnergy());
      hero.setFightingSkills(newHero.getFightingSkills());
      hero.setIntelligence(newHero.getIntelligence());
      hero.setSpeed(newHero.getSpeed());
      hero.setStrength(newHero.getStrength());
      hero.setHeight(newHero.getHeight());
      hero.setWeight(newHero.getWeight());
      hero.setGender(newHero.getGender());
      hero.setEyeColor(newHero.getEyeColor());
      hero.setHairColor(newHero.getHairColor());
      hero.setImgUrl(newHero.getImgUrl());
      hero.setVote(newHero.getVote() + 1);
      return heroRepo.save(hero);
    }).orElseThrow(HeroNotFoundException::new);
  }

  @PutMapping("/downvote/{id}")
  public Hero downvote(@RequestBody Hero newHero,
      @PathVariable Integer id) {
    return heroRepo.findById(id).map(hero -> {
      hero.setId(id);
      hero.setName(newHero.getName());
      hero.setAlias(newHero.getAlias());
      hero.setBio(newHero.getBio());
      hero.setDurability(newHero.getDurability());
      hero.setEnergy(newHero.getEnergy());
      hero.setFightingSkills(newHero.getFightingSkills());
      hero.setIntelligence(newHero.getIntelligence());
      hero.setSpeed(newHero.getSpeed());
      hero.setStrength(newHero.getStrength());
      hero.setHeight(newHero.getHeight());
      hero.setWeight(newHero.getWeight());
      hero.setGender(newHero.getGender());
      hero.setEyeColor(newHero.getEyeColor());
      hero.setHairColor(newHero.getHairColor());
      hero.setImgUrl(newHero.getImgUrl());
      hero.setVote(newHero.getVote() - 1);
      return heroRepo.save(hero);
    }).orElseThrow(HeroNotFoundException::new);
  }

  @DeleteMapping("/characters/delete/{id}")
  public ResponseEntity<Void> deleteCharacterById(@PathVariable Integer id) {
    try {

      heroRepo.deleteById(id);
      return ResponseEntity.ok().build();
    } catch (HeroNotFoundException ex) {
      System.out.println(ex.getMessage());
      return ResponseEntity.notFound().build();
    }
  }
}
