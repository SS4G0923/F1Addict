package com.f1addict.f1addictbackend.Util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Date;
import java.util.Map;

public class JwtUtil {
	private static final SignatureAlgorithm signatureAlgorithm=SignatureAlgorithm.HS256;//指定加密算法
	private static final Long expire= (long) (60*60*1000);//设置有效时间
	private static final String secret="F1ADDICT_SECRET_KEY_F1ADDICT_SECRET_KEY";//设置密钥

	public String GenerateJwt(Map<String,Object> claims){
		Key signatureKey=new SecretKeySpec(secret.getBytes(),signatureAlgorithm.getJcaName());
		return Jwts.builder()
				.signWith(signatureKey,SignatureAlgorithm.HS256)//设置签名方式
				.addClaims(claims)//设置自定义消息
				.setExpiration(new Date(System.currentTimeMillis()+expire))//设置过期时间
				.compact();
	}

	public  Map<?,?> ParseJwt(String jwt){
		Key signatureKey=new SecretKeySpec(secret.getBytes(),signatureAlgorithm.getJcaName());
		Object body=Jwts.parserBuilder()
				.setSigningKey(signatureKey)
				.build()
				.parse(jwt)
				.getBody();
		return (Map<?,?>)body;

	}

}
