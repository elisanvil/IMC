;;Funcion para calcular el indice de masa corporal
(defn imc [peso altura] 
  (/ peso (* altura altura)))

;;Funcion principal del programa
(defn test-imc []
  (println "Ingrese su peso en kg: ") 
  (let [peso (read-string (read-line))]
       
  (println "Ingrese su altura en m: ") 
  (let [altura (read-string (read-line))] 
  
  (let [valor (imc peso altura)]
    ;;(println valor)
    (cond (< valor 15)
      (println "Tu IMC es " valor "- Severamente bajo peso") 
      (< valor 16)
      (println "Tu IMC es " valor "- Muy bajo peso")
      (< valor 18.5)
      (println "Tu IMC es " valor "- Bajo peso")
      (< valor 25)
      (println "Tu IMC es " valor "- Peso saludable")
      (< valor 30)
      (println "Tu IMC es " valor "- Sobrepeso")
      (< valor 35)
      (println "Tu IMC es " valor "- Moderadamente obeso")
      (< valor 40)
      (println "Tu IMC es " valor "- Severamente obeso")
      (< valor 45)
      (println "Tu IMC es " valor "- Muy severamente obeso")
      (< valor 50)
      (println "Tu IMC es " valor "- Morbidamente obeso")
      (< valor 60)
      (println "Tu IMC es " valor "- Super obeso")
      (> valor 60)
      (println "Tu IMC es " valor "- Hiper obeso")
      :else (println "Intente otra vez"))))))
  
  (test-imc)