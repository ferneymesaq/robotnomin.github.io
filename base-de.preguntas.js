let baseDePreguntas = [
    {
        pregunta: "¿Qué es nomina?",
        imagen: "https://uploadgerencie.com/imagenes/deducciones-de-nomina.png",
        respuesta: "Es un registro financiero",
        distractores:["Beneficios adicionales que la empresa debe pagar a sus colaboradores","Es un pago que se realiza a los trabajadores que tienen un sueldo de hasta dos salarios mínimos mensuales","Es una forma de premio que se da al trabajador, en forma de pago o aumento del valor a pagar, por un determinado propósito"],
    },
   
    {
        pregunta: "¿Qué son los soportes contables?",
        respuesta: "Documentos que sirven de base para registrar las operaciones comerciales de una empresa",
        distractores:["Documentos que muestran los salarios de los trabajadores","Documentos que ayudan a las empresas a tener un control","Todas son verdaderas"],
    },

    {
        pregunta: "¿Qué es una persona natural y jurídica?",
        respuesta: "Una persona física y una persona con una ficción legal",
        distractores:["Dos sujetos incluidos dentro de una sociedad","Dos entidades que están legalmente sustituida ante el estado","A y B son falsas"],
    }, 
    
    {
        pregunta: "¿Qué es un software contable?",
        respuesta: "Un programa informático que sistematiza las tareas de una empresa",
        distractores:["A y B son verdaderas","Una hoja Excel","Documentos para financiar la nomina"],
    },
        
    {
        pregunta: "¿Cuáles son los recargos de las horas extras?",
        respuesta: "25%, 75%, 100%, 150%",
        distractores:["15%, 20%, 25%, 30%","50%, 60%, 70%, 80%","30%, 35%, 40%, 45%"],
    },

    {
        pregunta: "¿Qué comprende la nómina?",
        respuesta: "Horas extras, auxilio de transporte, bonificaciones, deducciones, salud y pensión",
        distractores:["B y C son correctas","Hora extras, salario en especie","Solo las prestaciones sociales"],
    },
  
    {
        pregunta: "¿Qué es un salario integral?",
        respuesta: "Forma de pago que incluye salario básico y prestaciones sociales",
        distractores:["Es donde no se le descuenta salud y pensión","Es donde no se le pagan hora extra","Aquel que además de salario no incluye las prestaciones sociales"],
    },
   
    {
        pregunta: "¿Qué son las prestaciones sociales?",
        respuesta: "Beneficios que se le da a cada colaborador",
        distractores:["Un conjunto de normas","Son bonificaciones","A y C son correctas"],
    },
    
    {
        pregunta: "¿En cuánto está el salario mínimo y el auxilio de transporte?",
        respuesta: "1.160.000 y 140.606",
        distractores:["1.230.000 y 340.000","1.120.000 y 250.000","1.340.000 y 150.000"],
    },
  
    {
        pregunta: "¿Cuáles son las actividades económicas?",
        respuesta: "Comercial, servicio, industrial",
        distractores:["Primaria, secundaria, terciaria","Cultivar, errar, ensamblar","Ganadería, pesca, agricultura"],
    },

    {
        pregunta: "¿Qué es una empresa?",
        respuesta: "Entidad pública o privada que brinda algún servicio",
        distractores:["Solo entidades privadas que ofrecen servicios","Aquellas que no brindan servicios económicos","Solo entidades públicas que están constituidas ante el estado"],
    },
    
    {
        pregunta: "¿Qué es el auxilio de transporte?",
        respuesta: "Subsidio que da el empleador para ayudar a movilizarse por su trabajo",
        distractores:["Pago que le hace el empleador por hacer horas extras","Cantidad que se le da a un colaborador por vender más productos","Suma de dinero que se le da cada dos meses a un colaborador"],
    },
    
    {
        pregunta: "¿Qué son las novedades?",
        respuesta: "Informe que los empleadores utilizan para reportar cambios en los datos de contrato",
        distractores:["Requisitos que tiene que tener una empresa","Archivos que se guardan en la empresa para reportar los contratos","A y C son correctas"],
    },
    
    {
        pregunta: "¿Cuántos soportes contables existen?",
        respuesta: "10",
        distractores:["5","9","8"],
    },

    {
        pregunta: "¿Qué son las horas extras?",
        respuesta: "Horas que el trabajador ejerce después de su jornada laboral",
        distractores:["Horas que el empleador exige a un colaborador","Aquellas que se le obligan a un colaborador realizar","Horas que no se tiene que pagar"],
    },
   
    {
        pregunta: "¿Cuáles son los recargos del ARL?",
        respuesta: "0.522%,1.044%, 2436%, 4.3500%, 6.960%",
        distractores:["0.3456%, 5.901%, 8.456%, 10.809%, 12.123%","0,522%, 1,56%, 4.467%, 6.203%, 8.098%","1.589%, 1.009%, 7.456%, 9.201%, 11.567%"],
    },

    {
        pregunta: "¿A que tiene derecho un colaborador?",
        respuesta: "Salario, aportes a seguridad social (salud, pensión, riesgos laborales), prestaciones sociales (prima de servicios, cesantías, intereses a las cesantías), vacaciones.",
        distractores:["Horas extras, bonificaciones, primas","Salud, factura, recibo de caja","Salario y deducciones"],
    },
    
    {
        pregunta: "Tipos de contratos",
        respuesta: "Laboral o de trabajo, contrato privado o civil, contrato mercantil y contrato público o administrativo",
        distractores:["Contrato por señas y contrato por observaciones","Solo existe contrato por prestaciones sociales","Solo existen contratos verbales"],
    },

    {
        pregunta: "¿Cuáles son las prestaciones sociales?",
        respuesta: "Primas, cesantías, intereses a las cesantías, vacaciones",
        distractores:["Horas extras, salud pensión","ARL, caja de compensación","Factura, cheque, recibo de caja"],
    },
    
    {
        pregunta: "¿Qué es un salario?",
        respuesta: "Una contraprestación que recibe el trabajador a cambio de la labor realizadas",
        distractores:["Dinero que paga el colaborador","Una jornada laboral","Alimentación del trabajador"],
    },
    
    {
        pregunta: "¿Qué es un auxilio de rodamiento?",
        respuesta: "Pago que se le da al colaborador por el uso del vehículo en las labores de la empresa",
        distractores:["Sueldo que se le da a un colaborador cuando pierde a un familiar","El valor del combustible","Primas, cesantías, vacaciones"],
    },
    
    {
        pregunta: "¿Qué son las apropiaciones?",
        respuesta: "Son valores que da la empresa además del pago de los empleados",
        distractores:["Es una vigencia fiscal","Recursos financieros","Recibo de contabilidad"],
    },

    {
        pregunta: "¿Que son las bonificaciones?",
        respuesta: "Cantidad de dinero que se agrega a el salario",
        distractores:["Precio de una casa","Descuento que se hace a la nómina","Beneficios laborales"],
    },

];