tx.executeSql('DROP TABLE IF EXISTS instalaciones');


var sql = "CREATE TABLE IF NOT EXISTS instalaciones ( "+
		"id INTEGER, " +
		"instalacion INTEGER, " +
		"temporada INTEGER, " +
		"nave VARCHAR(50), " +
		"codigo VARCHAR(50), " +
		"fuente VARCHAR(50), " +
		"contenedor INTEGER, " +
		"parcelas INTEGER, " +
		"estratos INTEGER, " +
		"especies VARCHAR(50), " +
		"unique (_id, Instalacion), ";
		
	tx.executeSql(sql);
	
	tx.executeSql("INSERT INTO instalaciones (id,instalacion,temporada,nave,codigo,fuente,contenedorparcelas,estratos,especies,unique) VALUES (1,134,2015,10-A,27 B1,T,56,0,4312,TC)");

	
	tx.executeSql('DROP TABLE IF EXISTS mediciones');
	
	var sql = "CREATE TABLE IF NOT EXISTS mediciones ( "+
		"_id INTEGER PRIMARY KEY AUTOINCREMENT,"+
		"fecha DATE, "+
		"temporada INTEGER,"+
		"instalacion INTEGER, "+
		"nave VARCHAR(50),"+ 
		"codigo VARCHAR(50),"+
		"fuente VARCHAR(10),"+
		"contenedor INTEGER, "+
		"estratos INTEGER, "+
		"especie varchar(10),"+ 
		"parcelas INTEGER, "+
		"parcela INTEGER,"+
		"muertos INTEGER ,"+
		"plantas INTEGER,"+
		"planta INTEGER, "+
		"altura FLOAT,"+
		"diametro FLOAT,";
		
	tx.executeSql(sql);
	tx.executeSql("INSERT INTO mediciones (id,fecha,temporada,instalacion,nave,codigo,fuente,contenedor,estratos,especie,parcelas,parcela,muertos,plantas,planta,altura,diametro) VALUES (1,2014-08-26,2015,79,7-A,27 T,T,88,7392,TC,5,1,28,8,1,4.5,2)");