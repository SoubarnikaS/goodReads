package com.soubarnika.goodreads.service;

import com.soubarnika.goodreads.entity.Books;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface BookService{

    public boolean addBookDetails(Books book);
    public List<Books> fetchBookDetails();

    Boolean deleteBook(String bookName);
}