<?php
/*header('Content-type: text/calendar; charset=utf-8');
header('Content-Disposition: inline; filename=tvshows.ics');
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past*/
$iCalFile=file_get_contents('http://www.tvrage.com/myical.php?tid=56094&hash=4064bb62c9cf0937a08ef719331e975c');
$explodedIcalFile=explode(PHP_EOL,$iCalFile);
$count=0;
foreach($explodedIcalFile as $var)
{
	// echo $count.' ';
	$position=strpos($var, 'UID:');
	if ($position!==false)
	{
		echo substr_replace($var, 'UID:'.md5($var.$count).'jason', $position);
	}
	else
	{
		echo $var;
	}
	echo "\n\r";
	$count=$count+1;
}

//echo $explodedIcalFile[1];*/
//echo $iCalFile;Í

?>