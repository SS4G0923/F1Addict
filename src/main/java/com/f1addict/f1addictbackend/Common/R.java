package com.f1addict.f1addictbackend.Common;

import lombok.Data;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

@Data
public class R<T> {
    private int code;
    private String message;
    private T data;

    public R() {
    }

    public R(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public R(int code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public static <T> R<T> success() {
        return new R<T>(200, "success");
    }

    public static <T> R<T> success(T data) {
        return new R<T>(200, "success", data);
    }

    public static <T> R<T> error() {
        return new R<T>(500, "error");
    }

    public static <T> R<T> error(String message) {
        return new R<T>(500, message);
    }

    public static <T> R<T> error(int code, String message) {
        return new R<T>(code, message);
    }
}
