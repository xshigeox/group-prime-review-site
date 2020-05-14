package com.launchacademy.giantleap.seeders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainSeeder implements CommandLineRunner {

  @Autowired
  private HeroSeeder heroSeeder;

  @Autowired
  private ReviewSeeder reviewSeeder;

  @Override
  public void run(String... args) throws Exception {

    heroSeeder.seed();
    reviewSeeder.seed();
  }
}
