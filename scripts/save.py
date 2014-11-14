#!/usr/bin/env python
from db_conn import DBConn
import MySQLdb
from subprocess import *
from datetime import *
import time
import serial

db1 = DBConn()
arduino=serial.Serial('/dev/ttyACM0',baudrate=9600, timeout = 5.0)
arduino.open()
values=0
varaux=0
i=0


while True: 
#freq=arduino.write(12) -- Esta linea se activa para enviar una lectura a el #codigo arduino para que lea desde el puerto serial
#y hay que modificar el .ino tambien para no lea desde
#el potenciometro sino desde el puerto serial
		db = MySQLdb.connect(host="localhost", user="root", passwd="1001", db="aysiaysi")
		cursor = db.cursor()
		cursor.execute("SELECT potenciometro FROM potenciometro ORDER BY fecha DESC LIMIT 0,1")
		for row in cursor:
   			pot=row[0]
   		cursor.close()
   		arduino.write(pot)
   		print "pot: "+row[0]
		
		#time.sleep(0.5)
		print (i+1)
		values = arduino.readline()
		if values != varaux:
			query = "INSERT INTO lecturas (lectura) VALUES (%s)"
			db1.ejecutar(query, values)
			#cursor.execute("INSERT INTO lecturas (lectura) VALUES (%s)", (values))
			#cur.execute("insert into personas (apellido) values (%(apellido)s)" , {"apellido":"D'agostino"})			
			print "lectura: " + values;
		else:
			print 'Mismo registro'		
			print "Misma lectura: " + values; 
		varaux=values
arduino.close()

