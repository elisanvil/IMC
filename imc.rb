#Calculo del indice de masa corporal

print "--> Ingrese su estatura (cm): " 
estatura = Integer(gets.chomp)

print "--> Ingrese su peso (kg): " 
peso = Float(gets.chomp)

imc = peso / (Float(estatura)/100)**2 

print "\n---------------------------------------------\n"

if imc <= 15
    print "Su IMC es: ", imc.round(2), " - Severamente bajo peso\n" 
elsif imc > 15 && imc <= 16 
    print "Su IMC es: ", imc.round(2), " - Muy bajo peso\n"
elsif imc > 16 && imc <= 18.5 
    print "Su IMC es: ", imc.round(2), " - Bajo peso\n"
elsif imc > 18.5 && imc <= 25 
    print "Su IMC es: ", imc.round(2), " - Peso saludable\n"
elsif imc > 25 && imc <= 30 
    print "Su IMC es: ", imc.round(2), " - Sobrepeso\n"
elsif imc > 30 && imc <= 35 
    print "Su IMC es: ", imc.round(2), " - Moderadamente obeso\n"
elsif imc > 35 && imc <= 40 
    print "Su IMC es: ", imc.round(2), " - Severamente obeso\n"
elsif imc > 40 && imc <= 45 
    print "Su IMC es: ", imc.round(2), " - Muy severamente obeso\n"
elsif imc > 45 && imc <= 50 
    print "Su IMC es: ", imc.round(2), " - Mórbidamente obeso\n"
elsif imc > 50 && imc <= 60 
    print "Su IMC es: ", imc.round(2), " - Super obeso\n"
elsif imc > 60 
    print "Su IMC es: ", imc.round(2), " - Hiper obeso\n"
end 

print "---------------------------------------------\n"
