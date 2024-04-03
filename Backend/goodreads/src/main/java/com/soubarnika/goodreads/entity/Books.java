package com.soubarnika.goodreads.entity;

import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.*;
import org.springframework.stereotype.Component;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Component
public class Books {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long bookId;

    @Column(unique = true, nullable = false)
    private String bookName;

    @Column(nullable = false, length = 2000000)
    private String bookDescription;

    @Column(nullable = false)
    private String bookImage;

    @Column(nullable = false)
    private int bookRating;

    @Column(nullable = false)
    private int bookGenre;


}
