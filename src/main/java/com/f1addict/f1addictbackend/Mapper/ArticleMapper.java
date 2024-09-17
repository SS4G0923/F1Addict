package com.f1addict.f1addictbackend.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.f1addict.f1addictbackend.Entity.Article;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ArticleMapper extends BaseMapper<Article> {
}
