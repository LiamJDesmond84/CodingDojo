<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
	<div class="container d-flex justify-content-center align-items-center flex-column">
	<a href="/tags/new">Add a Tag</a>
	<a href="/answers/new">Add an Answer</a>
	<a href="/questions/new">Add an Question</a>

	
<div class="container d-flex justify-content-center align-items-center flex-column">
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Question</th>

				</tr>
			</thead>
			<tbody>
			<c:forEach items="${questions}" var="x">
				<tr>
					<td><a href="/questions/show/${x.id}">${x.newQuestion}</a></td>

			</c:forEach>
			</tbody>
		</table>
		
	</div>
	
</div>
	
</body>
</html>