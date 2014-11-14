int POT_A; //potenciometro Analogo
int POT_D; //Potenciometro Digital
int som; // variavel som para o alarme
int longitud=4;
char cifra[11];
int estado=0;
int salida=0;
int boton=2;
int ledPin=13;
void setup(){
Serial.begin(9600);
pinMode(A0, INPUT);// entrada A0
pinMode(boton, INPUT);   

}

void loop(){
//POT_A = analogRead(A0);
//POT_D = Serial.read();
estado=digitalRead(boton);

if(estado==HIGH){
  salida = 1-salida;
  }

if(salida==1){
  //encender LED para saber que estamos en 1 (Contro DIGITAL)
   digitalWrite(ledPin, HIGH);
   for(int i=0;i<longitud;i++)
      {
      cifra[i]=Serial.read();
      }
    POT_D=atoi(cifra);
    Serial.println(som);
    delay(100);
    som = map(POT_D,10, 1023, 20, 300); // toca o som com uma frequencia que
    //varia de 100 a 1000 Hz de acordo com a distancia:
    tone(9, som, 10000);
    //delay(500);
  }
  else{
     digitalWrite(ledPin, LOW);
   //Apagamos el LED para saber que es 0 (Control ANALOGO)
    POT_A = analogRead(A0);
    Serial.println(som);
    delay(100);
    som = map(POT_A,10, 1023, 20, 300); // toca o som com uma frequencia que
    //varia de 100 a 1000 Hz de acordo com a distancia:
    tone(9, som, 10000);
  }
}