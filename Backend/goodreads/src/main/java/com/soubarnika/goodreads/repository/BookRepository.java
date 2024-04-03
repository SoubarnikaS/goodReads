package com.soubarnika.goodreads.repository;

import com.soubarnika.goodreads.entity.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Books, Long> {
    public Books findByBookName(String bookName);

    void deleteByBookName(String bookName);
}
