package com.example.calculadorabackend.Controller;

import com.example.calculadorabackend.exception.OperacionInvalidaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation. GetMapping;
import org.springframework.web.bind.annotation. RequestMapping;
import org.springframework.web.bind.annotation. RequestParam;
import org.springframework.web.bind.annotation. RestController;

import com.example.calculadorabackend.Service.CalculadoraService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping ("/api/calculadora")

public class CalculadoraController {

    @Autowired
    private CalculadoraService calculadoraService;
    private final List<String> historial = new ArrayList<>();

    public CalculadoraController(CalculadoraService calculadoraService) {
        this.calculadoraService = calculadoraService;
    }
    @GetMapping("/suma")
    public double suma(@RequestParam double a, @RequestParam double b) {
        double resultado = calculadoraService.sumar(a, b);
        historial.add(a + " + " + b + " = " + resultado);
        return resultado;
    }

    @GetMapping("/resta")
    public double resta(@RequestParam double a, @RequestParam double b) {
        double resultado = calculadoraService.restar(a, b);
        historial.add(a + " - " + b + " = " + resultado);
        return resultado;
    }

    @GetMapping("/multiplicacion")
    public double multiplicacion(@RequestParam double a, @RequestParam double b) {
        double resultado = calculadoraService.multiplicar(a, b);
        historial.add(a + " * " + b + " = " + resultado);
        return resultado;
    }

    @GetMapping("/division")
    public double division(@RequestParam double a, @RequestParam double b) {
        if (b == 0) {
            throw new OperacionInvalidaException("No se puede dividir por cero.");
        }
        double resultado = calculadoraService.dividir(a, b);
        historial.add(a + " / " + b + " = " + resultado);
        return resultado;
    }

    @GetMapping("/historial")
    public List<String> getHistorial() {
        return historial.size() > 10 ? historial.subList(historial.size() - 10, historial.size()) : historial;
    }
}
    


    
