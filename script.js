function calcularProyecciones() {
	// Obtener los valores de los inputs de cada empleado
	let salario1 = document.getElementById("salario1").value;
	let incremento1 = document.getElementById("incremento1").value;
	let anios1 = document.getElementById("anios1").value;

	let salario2 = document.getElementById("salario2").value;
	let incremento2 = document.getElementById("incremento2").value;
	let anios2 = document.getElementById("anios2").value;

	// Repetir para los otros empleados

	// Calcular la proyección de salario para cada empleado
	let proyeccion1 = calcularProyeccion(salario1, incremento1, anios1);
	let proyeccion2 = calcularProyeccion(salario2, incremento2, anios2);

	// Actualizar las celdas de proyección de salario para cada empleado
	document.getElementById("proyeccion1").innerText = proyeccion1;
	document.getElementById("proyeccion2").innerText = proyeccion2;

	// Repetir para los otros empleados
}

function calcularProyeccion(salario, incremento, anios) {
    // Convertir los valores a números
    salario = parseFloat(salario);
    incremento = parseFloat(incremento);
    anios = parseInt(anios);
  
    // Calcular la proyección de salario usando la fórmula
    let proyeccion = salario * Math.pow((1 + (incremento / 100)), anios);
  
    // Redondear el resultado a 2 decimales
    proyeccion = proyeccion.toFixed(2);
  
    return proyeccion;
  }
  
