package com.launchacademy.giantleap.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

@Entity
@Table(name = "heroes")
@Setter
@Getter
@NoArgsConstructor
public class Hero {

  @Id
  @SequenceGenerator(name = "hero_generator", sequenceName = "heroes_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hero_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @OneToMany(mappedBy = "hero", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
  @JsonIgnoreProperties("hero")
  private List<Review> reviews;

  @NotEmpty
  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "alias")
  private String alias = "Unknown";

  @NotEmpty
  @Column(name = "bio", nullable = false)
  private String bio;

  @NotEmpty
  @Column(name = "img_url", nullable = false)
  private String imgUrl;

  @Range(min = 1, max = 7)
  @NotNull
  @Column(name = "durability", nullable = false)
  private Integer durability;

  @Range(min = 1, max = 7)
  @NotNull
  @Column(name = "energy", nullable = false)
  private Integer energy;

  @Range(min = 1, max = 7)
  @NotNull
  @Column(name = "fighting_skills", nullable = false)
  private Integer fightingSkills;

  @Range(min = 1, max = 7)
  @NotNull
  @Column(name = "intelligence", nullable = false)
  private Integer intelligence;

  @Range(min = 1, max = 7)
  @NotNull
  @Column(name = "speed", nullable = false)
  private Integer speed;

  @Range(min = 1, max = 7)
  @NotNull
  @Column(name = "strength", nullable = false)
  private Integer strength;

  @Column(name = "height")
  private Double height;

  @Column(name = "weight")
  private Integer weight;

  @Column(name = "gender")
  private String gender;

  @Column(name = "eye_color")
  private String eyeColor;

  @Column(name = "hair_color")
  private String hairColor;

  @Column(name = "vote")
  private Integer vote = 0;
}
