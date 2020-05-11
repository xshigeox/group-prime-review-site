package com.launchacademy.giantleap.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.sql.Timestamp;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

@Entity
@Table(name = "reviews")
@Setter
@Getter
@NoArgsConstructor
public class Review {

  @Id
  @SequenceGenerator(name = "review_generator", sequenceName = "reviews_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @ManyToOne
  @JoinColumn(name = "character_id", nullable = false)
  @JsonIgnoreProperties("reviews")
  private MarvelCharacter marvelCharacter;

  @Range(min = 1, max = 5)
  @Column(name = "rating", nullable = false)
  private Integer rating;

  @Column(name = "review", nullable = false)
  private String review;

  @Column(name = "time_stamp")
  private Timestamp timestamp = new Timestamp(System.currentTimeMillis());

}
