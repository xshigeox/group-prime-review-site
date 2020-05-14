package com.launchacademy.giantleap.seeders;

import com.launchacademy.giantleap.models.Hero;
import com.launchacademy.giantleap.repositories.HeroRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MarvelCharacterSeeder {

  @Autowired
  private HeroRepository characterRepo;

  public void seed() {
    List<Hero> heroes = new ArrayList<>();

    if (characterRepo.count() == 0) {
      Hero storm = new Hero();
      storm.setName("Ororo Monroe");
      storm.setAlias("Storm");
      storm.setBio(
          "Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.");
      storm.setDurability(6);
      storm.setEnergy(5);
      storm.setFightingSkills(4);
      storm.setIntelligence(2);
      storm.setSpeed(3);
      storm.setStrength(2);
      storm.setHeight(5.11);
      storm.setWeight(145);
      storm.setGender("Female");
      storm.setEyeColor("Brown");
      storm.setHairColor("White");
      storm.setImgUrl("https://terrigen-cdn-dev.marvel.com/content/prod/1x/storm_apoc.jpg");
      heroes.add(storm);

      Hero colleen = new Hero();
      colleen.setName("Colleen Wing");
      colleen.setAlias("Unknown");
      colleen.setBio(
          "Colleen Wing was raised in Japan by her grandfather Kanji Ozawa, who taught her the ways of a samurai, in which she became highly skilled, after which she teamed up with Misty Knight at the behest of Tony Stark as a new Heroes for Hire tasked with capturing superhumans who have not registered.");
      colleen.setDurability(2);
      colleen.setEnergy(1);
      colleen.setFightingSkills(6);
      colleen.setIntelligence(2);
      colleen.setSpeed(2);
      colleen.setStrength(2);
      colleen.setHeight(5.9);
      colleen.setWeight(135);
      colleen.setGender("Female");
      colleen.setEyeColor("Blue");
      colleen.setHairColor("Dark Red");
      colleen.setImgUrl("https://i.annihil.us/u/prod/marvel/i/mg/8/e0/52740e24bddb4.jpg");
      heroes.add(colleen);

      Hero jane = new Hero();
      jane.setName("Jane Foster");
      jane.setAlias("Thor Goddess of Thunder");
      jane.setBio(
          "After Thor (Odinson) was deemed no longer worthy of wielding Mjolnir, Jane Foster was telepathically drawn to the Moon where Mjolnir lay in wait. Upon lifting the hammer, Jane underwent a physical transformation and took on the powers of Thor.");
      jane.setDurability(6);
      jane.setEnergy(6);
      jane.setFightingSkills(4);
      jane.setIntelligence(2);
      jane.setSpeed(7);
      jane.setStrength(7);
      jane.setHeight(5.3);
      jane.setWeight(118);
      jane.setGender("Female");
      jane.setEyeColor("Blue");
      jane.setHairColor("Blond");
      jane.setImgUrl("https://terrigen-cdn-dev.marvel.com/content/prod/1x/246tjf_com_crd_01.jpg");
      heroes.add(jane);

      Hero doom = new Hero();
      doom.setName("Victor Von Doom");
      doom.setAlias("Doctor Doom");
      doom.setBio(
          "With scientific genius, an unquenchable lust for power, and a towering ego, Victor Von Doom has forged himself into one of the world’s greatest villains.");
      doom.setDurability(6);
      doom.setEnergy(6);
      doom.setFightingSkills(4);
      doom.setIntelligence(6);
      doom.setSpeed(5);
      doom.setStrength(4);
      doom.setHeight(6.7);
      doom.setWeight(415);
      doom.setGender("Male");
      doom.setEyeColor("Brown");
      doom.setHairColor("Brown");
      doom.setImgUrl("https://terrigen-cdn-dev.marvel.com/content/prod/1x/057drd_com_crd_01.jpg");
      heroes.add(doom);

      Hero pool = new Hero();
      pool.setName("Wade Wilson");
      pool.setAlias("Deadpool");
      pool.setBio(
          "Welcome to the Deadpool character bio, nerds! I mean...True Believers! Brought to you by me, myself, and I: the fabulous Deadpool! I could have let some smelly pencil-pushing intern spell out my life story for you, but you deserve better.");
      pool.setDurability(4);
      pool.setEnergy(1);
      pool.setFightingSkills(6);
      pool.setIntelligence(2);
      pool.setSpeed(7);
      pool.setStrength(4);
      pool.setHeight(6.2);
      pool.setWeight(210);
      pool.setGender("Male");
      pool.setEyeColor("Brown");
      pool.setHairColor("Bald, originally brown");
      pool.setImgUrl("https://terrigen-cdn-dev.marvel.com/content/prod/1x/036dpl_com_crd_01.jpg");
      heroes.add(pool);

      Hero task = new Hero();
      task.setName("Anthony Masters");
      task.setAlias("Taskmaster");
      task.setBio(
          "The Taskmaster is a skilled tactician, adept at martial arts thanks to his photographic reflexes, and a career criminal who trains hench-thugs for terrorist organizations and crimi");
      task.setDurability(2);
      task.setEnergy(1);
      task.setFightingSkills(7);
      task.setIntelligence(4);
      task.setSpeed(2);
      task.setStrength(3);
      task.setHeight(6.2);
      task.setWeight(220);
      task.setGender("Male");
      task.setEyeColor("Unrevealed");
      task.setHairColor("Brown");
      task.setImgUrl("https://terrigen-cdn-dev.marvel.com/content/prod/1x/173tsk_com_crd_02.jpg");
      heroes.add(task);

      Hero groot = new Hero();
      groot.setName("Groot");
      groot.setAlias("Unknown");
      groot.setBio(
          "Hailing from the Branch Worlds’ Planet X, Groot is part of a species called Groot, so his name is also the title of his taxonomic classification. From the time he was a sapling, Groot was destined to protect the rights of the downtrodden. He campaigned for the Undergrowth, anthropomorphic animals and fungi who helped maintain Planet X’s ecosystem by performing menial tasks. Groot’s noble campaign drew the rancor of the other Groots and he ended up leaving his home world.");
      groot.setDurability(4);
      groot.setEnergy(3);
      groot.setFightingSkills(4);
      groot.setIntelligence(3);
      groot.setSpeed(3);
      groot.setStrength(7);
      groot.setHeight(23.0);
      groot.setWeight(8200);
      groot.setGender("Male");
      groot.setEyeColor("Yellow");
      groot.setHairColor("None");
      groot
          .setImgUrl(
              "https://www.superherodb.com/pictures2/portraits/10/050/10017.jpg?v=1398979218");
      heroes.add(groot);

      Hero wanda = new Hero();
      wanda.setName("Wanda Maximoff");
      wanda.setAlias("Scarlet Witch");
      wanda.setBio(
          "A powerful mutant sorceress, Wanda Maximoff has been a master of the mystical arts for both the X-Men and the Avengers.");
      wanda.setDurability(2);
      wanda.setEnergy(6);
      wanda.setFightingSkills(3);
      wanda.setIntelligence(3);
      wanda.setSpeed(2);
      wanda.setStrength(2);
      wanda.setHeight(5.7);
      wanda.setWeight(132);
      wanda.setGender("Female");
      wanda.setEyeColor("Blue");
      wanda.setHairColor("Auburn");
      wanda.setImgUrl(
          "https://www.superherodb.com/pictures2/portraits/11/050/13086.jpg?v=1537276379");
      heroes.add(wanda);

      for (Hero hero : heroes) {
        characterRepo.save(hero);
      }
    }
  }
}
