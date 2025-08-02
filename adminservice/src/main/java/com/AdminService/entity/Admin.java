package com.AdminService.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection =  "Admin")
public class Admin {
@Id
private String id;
private String mobileNumber;
private String userName;
private String password;
}