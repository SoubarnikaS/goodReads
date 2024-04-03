package com.soubarnika.goodreads.controller;

import com.soubarnika.goodreads.dto.UserDTO;
import com.soubarnika.goodreads.entity.Books;
import com.soubarnika.goodreads.entity.Users;
import com.soubarnika.goodreads.exception.GoodReadsException;
import com.soubarnika.goodreads.service.BookService;
import com.soubarnika.goodreads.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
import java.util.List;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class GoodReadsController {

    @Autowired
    UserService userService;

    @Autowired
    BookService bookService;

    @GetMapping("checkService")
    public String checkService() {
        return "Service is up and Running!!!!";
    }

    @PostMapping("registerUser")
    public ResponseEntity<Boolean> registerUser(@RequestBody Users user) {
        try {
            userService.register(user);
        } catch (GoodReadsException e) {
            if (e.getMessage().equals("UniqueError")) {
                return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return ResponseEntity.ok(true);
    }

    @PostMapping("loginUser")
    public ResponseEntity<Boolean> loginUser(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.login(userDTO));
    }


    @PostMapping("addBookDetails")
    public ResponseEntity<Boolean> addBookDetails(@RequestBody Books book){
        log.info(book.toString());
        return ResponseEntity.ok(bookService.addBookDetails(book));
    }

    @GetMapping("fetchBookDetails")
    public ResponseEntity<List <Books> > fetchBookDetails(){
            return ResponseEntity.ok(bookService.fetchBookDetails());

    }

    @PutMapping("updateBookDetails")
    public ResponseEntity<Boolean> updateBookDetails(@RequestBody Books book){
        log.info(book.toString());
        return ResponseEntity.ok(bookService.addBookDetails(book));
    }

    @PatchMapping("updatePassword/{email}")
    public ResponseEntity<Boolean> updatePassword(@PathVariable String email,@RequestParam String password){
        try{
            return ResponseEntity.ok(userService.updatePassword(email,password));
        }
        catch(Exception e){
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(false);
        }
    }

    @DeleteMapping("deleteBookDetails/{bookName}")
    public ResponseEntity<Boolean> deleteBookDetails(@PathVariable String bookName){
        try{
            return ResponseEntity.ok(bookService.deleteBook(bookName));
        }
        catch(Exception e){
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(false);
        }

    }




}
