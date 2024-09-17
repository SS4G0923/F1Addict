package com.f1addict.f1addictbackend.Controller;

import com.f1addict.f1addictbackend.Common.R;
import com.f1addict.f1addictbackend.Entity.Article;
import com.f1addict.f1addictbackend.Service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/article")
@CrossOrigin("*")
public class ArticleController {

	@Autowired
	ArticleService articleService;

	@GetMapping("/list")
	public R<List<Article>> listAll(){
		List<Article> list = articleService.selectAll();
		return R.success(list);
	}
}
