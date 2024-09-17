package com.f1addict.f1addictbackend.Service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.f1addict.f1addictbackend.Entity.Article;
import com.f1addict.f1addictbackend.Mapper.ArticleMapper;
import com.f1addict.f1addictbackend.Service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl extends ServiceImpl<ArticleMapper, Article> implements ArticleService {

	@Autowired
	ArticleMapper articleMapper;

	@Override
	public List<Article> selectAll() {
		return articleMapper.selectList(null);
	}
}
