const std = @import("std");

const math = std.math;

export fn add(a: i32, b: i32) i32 {
    return a + b;
}

export fn pow(n: i32, p: i32) i32 {
    return math.pow(i32, n, p);
}
