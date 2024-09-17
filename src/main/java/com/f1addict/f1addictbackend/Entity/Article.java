package com.f1addict.f1addictbackend.Entity;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Article {

	String title;
	String content;
	String category;
	String tags;
	LocalDateTime publishTime;
	LocalDateTime updateTime;
}
