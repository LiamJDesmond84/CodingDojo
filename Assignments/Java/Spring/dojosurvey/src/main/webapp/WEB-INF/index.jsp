<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
	<div class="container d-flex justify-content-center flex-column align-items-center">
	
	<form class="d-flex flex-column align-items-center" action="/result" method="POST">
		<label>Your Name: </label>
		<input type="text" name="name">
		
		<label>Dojo Location: </label>
		<select name="location">
			<option value="san jose">San Jose</option>
			<option value="san jose">Burbank</option>
			<option value="san jose">Seattle</option>
		</select>
		
		<label>Favorite Language: </label>
		<select name="language">
			<option value="python">Python</option>
			<option value="java">Java</option>
			<option value="javascript">JavaScript</option>
		</select>
		
		<label>Comment (optional): </label>
		<textarea rows="5" cols="15" name="comment"></textarea>
		<button>Submit</button>
	</form>
	
	</div>
	
</body>
</html>