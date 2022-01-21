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
		<h2>Your Name: </h2>
		<p><c:out value="${name}"/></p>
		<h2>Dojo Location: </h2>
		<p><c:out value="${location}"/></p>
		<h2>Favorite Language: </h2>
		<p><c:out value="${language}"/></p>
		<h2>Comments: </h2>
		<p><c:out value="${comment}"/></p>
	</div>
</body>
</html>