<!DOCTYPE HTML>
<!--
	Alpha by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Christopher J. Palmer</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<!--[if lte IE 8]><script src="css/ie/html5shiv.js"></script><![endif]-->
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery.dropotron.min.js"></script>
		<script src="js/jquery.scrollgress.min.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-layers.min.js"></script>
		<script src="js/init.js"></script>
		<noscript>
			<link rel="stylesheet" href="css/skel.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-wide.css" />
		</noscript>
		<!--[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css" /><![endif]-->
		<style>
			.majorsubhead
			{font-weight: 300;
			font-size: 1.25em;
			line-height: 1.5em;
			letter-spacing: -0.035em;
			color: #646464;}
		</style>
	</head>
	<body class="landing">

		<!-- Header -->
			<header id="header" class="alt">
				
				<h1><img src="images/cjp.jpg" style="height:24px;width:24px;height: 32px;width: 32px;margin-top: 8px;"><a href="index.php" style="vertical-align:top;margin-left:8px;">Christopher J. Palmer</a></h1>

				<nav id="nav">
					<ul>
						<li><a href="#top">Home</a></li>
						<li><a href="#research">Research</a>
							<ul>
								<li><a href="#publications">Publications</a></li>
								<li><a href="#workingpapers">Working Papers</a></li>
								<li><a href="#worksinprogress">Works in Progress</a></li>
							</ul>
						</li>
						<li><a href="http://www.haas.berkeley.edu/groups/online_marketing/facultyCV/palmer_christopher.pdf">CV (PDF)</a></li>
						<li><a href="#teaching">Teaching</a></li>
						<li><a href="#data">Data</a></li>
					</ul>
				</nav>
			</header>

		<!-- Banner -->
			<section id="banner">
				<div class="headerphotodiv"><div><h2>Christopher J. Palmer</h2>
				<p>
					Assistant Professor<br>
					Haas School of Business<br>
					University of California at Berkeley
				</p></div>
				<div class="headerphoto"><img src="images/cjp.jpg"></div>
				</div>
			</section>
		<!-- Main -->
			<section id="main" class="container">
				<section class="box special features">
					<div class="features-row">
						<section>
							<span class="icon major fa-phone accent2"></span>
							<h3>Contact Information</h3>
							<p><?php include("includes/contact.php"); ?></p>
						</section>
						<section>
							<span class="icon major fa-group accent3"></span>
							<h3>Support Staff</h3>
							<p><?php include("includes/supportingstaff.php"); ?></p>
						</section>
					</div>
					<div class="features-row">
						<section>
							<span class="icon major fa-clock-o accent4"></span>
							<h3>Office Hours</h3>
							<p><?php include("includes/officehours.php"); ?></p>
						</section>
						<section>
							<span class="icon major fa-chain accent5"></span>
							<h3>Links</h3>
							<p><?php include("includes/links.php"); ?></p>
						</section>
					</div>
				</section>
				<div class="row" id="research">
					<div class="6u" style="width:33%">

						<section class="box special research" id="publications">
							<span class="image featured"><img src="images/publications.jpg" alt="" /></span>
							<h3>Publications</h3>
							<p><?php include("includes/publications.php"); ?></p>
						</section>
						
					</div>
					<div class="6u" style="width:33%">

						<section class="box special research" id="workingpapers">
							<span class="image featured"><img src="images/workingpapers.jpg" alt="" /></span>
							<h3>Working Papers</h3>
							<p><?php include("includes/workingpapers.php"); ?></p>
						</section>

					</div>
					<div class="6u" style="width:33%">

						<section class="box special research" id="worksinprogress">
							<span class="image featured"><img src="images/worksinprogress.jpg" alt="" /></span>
							<h3>Works in Progress</h3>
							<p><?php include("includes/worksinprogress.php"); ?></p>
						</section>

					</div>
				</div>
				<div class="row">
					<div class="6u">

						<section class="box special bottompart" id="teaching">
							<span class="image featured"><img src="images/teaching.jpg" alt="" /></span>
							<h3>Teaching</h3>
							<p><?php include("includes/teaching.php"); ?></p>
						</section>
						
					</div>
					<div class="6u">

						<section class="box special bottompart" id="data">
							<span class="image featured"><img src="images/data.jpg" alt="" /></span>
							<h3>Data</h3>
							<p><?php include("includes/teaching.php"); ?></p>
						</section>

					</div>
				</div>

			</section>
		<!-- Footer -->
			<footer id="footer">
				<ul class="copyright">
					<li>Copyright &copy; <?php date_default_timezone_set('America/Los_Angeles'); echo date("Y") ?> Christopher J. Palmer</li>
				</ul>
			</footer>

	</body>
</html>