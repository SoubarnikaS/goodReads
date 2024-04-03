package com.soubarnika.goodreads.service.impl;

import com.soubarnika.goodreads.entity.Books;
import com.soubarnika.goodreads.repository.BookRepository;
import com.soubarnika.goodreads.service.BookService;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@Transactional
public class BookServiceImpl implements BookService {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    Books book;

    @Override
    public boolean addBookDetails(Books book) {
        bookRepository.save(book);
        return true;
    }

    @Override
    public List<Books> fetchBookDetails() {
        return bookRepository.findAll();
    }

    @Override
    public Boolean deleteBook(String bookName) {
         book = bookRepository.findByBookName(bookName);
        if(book == null)
            return false;
        else{
            bookRepository.deleteByBookName(bookName);
            return true;
        }
    }

//    @Override
//    public Boolean updateBookDetails(Books book) {
//        book = bookRepository.findByBookName((book.getBookName()));
//    }


}
