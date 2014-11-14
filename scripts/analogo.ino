int POT; //declara variavel
int som; // variavel som para o alarme


void setup(){
Serial.begin(9600);
pinMode(A0, INPUT);// entrada A0
}


void loop(){
POT = analogRead(A0);
Serial.println(som);
delay(100);
som = map(POT,10, 1023, 20, 200); // toca o som com uma frequencia que
//varia de 100 a 1000 Hz de acordo com a distancia:
tone(9, som, 10000);
}