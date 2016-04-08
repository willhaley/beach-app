<?php 

	if ( $tides = @file_get_contents( 'https://www.worldtides.info/api?extremes&lat=34.3538323&lon=-77.6428886&key=6f535570-09f1-4aac-88bd-48d5dbb3e124' ) ){
		echo "asdf\n";
		$tides = 'var tides = ' . $tides;
		file_put_contents( '/home/pi/projects/beach-app/dist/tides.js', $tides );	
	
	}
	

	if ( $weather = @file_get_contents( 'https://api.forecast.io/forecast/4b087fe12683c3b471c85c74499920d5/34.3538323,-77.6428886' ) ){
		echo "asdf\n";
		$weather = 'var weather = ' . $weather;
		file_put_contents( '/home/pi/projects/beach-app/dist/weather.js', $weather );	
	
	}
