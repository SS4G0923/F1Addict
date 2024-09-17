package com.f1addict.f1addictbackend.Service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.f1addict.f1addictbackend.Entity.Article;

import java.util.List;

public interface ArticleService extends IService<Article> {

	List<Article> selectAll();
}
