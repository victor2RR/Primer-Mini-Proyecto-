package com.example.calculadorabackend.Service;

import org.springframework.stereotype.Service;

@Service

public class CalculadoraService {
    public double sumar(double a, double b) {
        return a + b;
    }

    public double restar(double a, double b) {
        return a - b;
    }

    public double multiplicar(double a, double b) {
        return a * b;
    }

    public double dividir(double a, double b) {
        return a / b;
    }
}
   
 
  
   
    
  
