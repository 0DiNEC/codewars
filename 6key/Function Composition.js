const compose = (f,g) => (...x) => f(g(...x));