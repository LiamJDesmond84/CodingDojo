<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<form action="/Pets/showCat" method="post" >
	<label>Name: </label>
	<input type="text" name="name" />
	<label>Breed: </label>
	<input type="text" name="breed" />
	<label>Weight: </label>
	<input type="text" name="weight" />
	<button>Submit</button>
</form>

<form action="/Pets/showDog" method="post" >
	<label>Name: </label>
	<input type="text" name="name" />
	<label>Breed: </label>
	<input type="text" name="breed" />
	<label>Weight: </label>
	<input type="text" name="weight" />
	<button>Submit</button>
</form>
</body>
</html>