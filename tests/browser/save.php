<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>CKeditor5 Browser Test</title>
	<link rel="stylesheet" href="content.css">
	<link rel="stylesheet" href="demo.css">
	<link rel="stylesheet" href="node_modules/@highlightjs/cdn-assets/styles/default.min.css">
	<script src="node_modules/@highlightjs/cdn-assets/highlight.min.js"></script>
</head>
<body>
	<h1>CKeditor5 Browser Test</h1>
	<a href="index.html">Back to CKEditor 5</a><br>

	<hr>

	Raw content:<br>
	<textarea style="width: 90%;" rows="30">
	<?php print_r($_REQUEST['content']); ?>
	</textarea>

	<hr>

	Print into HTML:<br>
	<?php echo $_REQUEST['content']; ?>


	<script>hljs.highlightAll();</script>
</body>
</html>
