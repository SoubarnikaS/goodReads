package com.soubarnika.goodreads.entity;
import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Component
public class Users {
    @Id //Must have: Primary key annotation
    @GeneratedValue(strategy= GenerationType.AUTO) //Makes spring auto generate your id value, no need to provide value while creating object
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique=true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

}
