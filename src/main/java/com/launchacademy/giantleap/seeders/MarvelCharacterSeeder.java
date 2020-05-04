package com.launchacademy.giantleap.seeders;

import com.launchacademy.giantleap.models.MarvelCharacter;
import com.launchacademy.giantleap.repositories.MarvelCharacterRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MarvelCharacterSeeder {

  @Autowired
  private MarvelCharacterRepository characterRepo;

  public void seed() {
    List<MarvelCharacter> marvelCharacters = new ArrayList<>();

    if (characterRepo.count() == 0) {
      MarvelCharacter storm = new MarvelCharacter();
      storm.setName("Ororo Monroe (Storm)");
      storm.setBio(
          "Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.");
      storm.setDurability(6);
      storm.setEnergy(6);
      storm.setFightingSkills(6);
      storm.setIntelligence(6);
      storm.setSpeed(6);
      storm.setStrength(5);
      storm.setHeight(5.8);
      storm.setGender("Female");
      storm.setEyeColor("Brown");
      storm.setHairColor("White");
      storm.setImgUrl("https://terrigen-cdn-dev.marvel.com/content/prod/1x/storm_apoc.jpg");
      marvelCharacters.add(storm);

      MarvelCharacter colleen = new MarvelCharacter();
      colleen.setName("Colleen Wing");
      colleen.setBio(
          "Colleen Wing was raised in Japan by her grandfather Kanji Ozawa, who taught her the ways of a samurai, in which she became highly skilled, after which she teamed up with Misty Knight at the behest of Tony Stark as a new Heroes for Hire tasked with capturing superhumans who have not registered.");
      colleen.setDurability(2);
      colleen.setEnergy(1);
      colleen.setFightingSkills(6);
      colleen.setIntelligence(2);
      colleen.setSpeed(2);
      colleen.setStrength(2);
      colleen.setHeight(5.9);
      colleen.setGender("Female");
      colleen.setEyeColor("Blue");
      colleen.setHairColor("Dark Red");
      colleen.setImgUrl("https://i.annihil.us/u/prod/marvel/i/mg/8/e0/52740e24bddb4.jpg");
      marvelCharacters.add(colleen);

      MarvelCharacter jane = new MarvelCharacter();
      jane.setName("Jane Foster (Thor Goddess of Thunder");
      jane.setBio(
          "After Thor (Odinson) was deemed no longer worthy of wielding Mjolnir, Jane Foster was telepathically drawn to the Moon where Mjolnir lay in wait. Upon lifting the hammer, Jane underwent a physical transformation and took on the powers of Thor.");
      jane.setDurability(6);
      jane.setEnergy(6);
      jane.setFightingSkills(4);
      jane.setIntelligence(2);
      jane.setSpeed(7);
      jane.setStrength(7);
      jane.setHeight(5.7);
      jane.setGender("Female");
      jane.setEyeColor("Blue");
      jane.setHairColor("Blond");
      jane.setImgUrl("https://terrigen-cdn-dev.marvel.com/content/prod/1x/246tjf_com_crd_01.jpg");
      marvelCharacters.add(jane);

      MarvelCharacter doom = new MarvelCharacter();
      doom.setName("Victor Von Doom (Doctor Doom)");
      doom.setBio(
          "With scientific genius, an unquenchable lust for power, and a towering ego, Victor Von Doom has forged himself into one of the world’s greatest villains.");
      doom.setDurability(6);
      doom.setEnergy(6);
      doom.setFightingSkills(4);
      doom.setIntelligence(6);
      doom.setSpeed(5);
      doom.setStrength(4);
      doom.setHeight(6.2);
      doom.setGender("Male");
      doom.setEyeColor("Brown");
      doom.setHairColor("Brown");
      doom.setImgUrl("https://terrigen-cdn-dev.marvel.com/content/prod/1x/057drd_com_crd_01.jpg");
      marvelCharacters.add(doom);

      MarvelCharacter pool = new MarvelCharacter();
      pool.setName("Wade Wilson (Deadpool)");
      pool.setBio(
          "Welcome to the Deadpool character bio, nerds! I mean...True Believers! Brought to you by me, myself, and I: the fabulous Deadpool! I could have let some smelly pencil-pushing intern spell out my life story for you, but you deserve better.");
      pool.setDurability(4);
      pool.setEnergy(1);
      pool.setFightingSkills(6);
      pool.setIntelligence(2);
      pool.setSpeed(7);
      pool.setStrength(4);
      pool.setHeight(6.2);
      pool.setGender("Male");
      pool.setEyeColor("Brown");
      pool.setHairColor("Bald, originally brown");
      pool.setImgUrl("https://terrigen-cdn-dev.marvel.com/content/prod/1x/036dpl_com_crd_01.jpg");
      marvelCharacters.add(pool);

      MarvelCharacter task = new MarvelCharacter();
      task.setName("Anthony Masters (Taskmaster)");
      task.setBio(
          "The Taskmaster is a skilled tactician, adept at martial arts thanks to his photographic reflexes, and a career criminal who trains hench-thugs for terrorist organizations and crimi");
      task.setDurability(2);
      task.setEnergy(1);
      task.setFightingSkills(7);
      task.setIntelligence(4);
      task.setSpeed(2);
      task.setStrength(3);
      task.setHeight(6.2);
      task.setGender("Male");
      task.setEyeColor("Unrevealed");
      task.setHairColor("Brown");
      task.setImgUrl("https://terrigen-cdn-dev.marvel.com/content/prod/1x/173tsk_com_crd_02.jpg");
      marvelCharacters.add(task);

      for (MarvelCharacter marvelCharacter : marvelCharacters) {
        characterRepo.save(marvelCharacter);
      }
    }
  }
}
