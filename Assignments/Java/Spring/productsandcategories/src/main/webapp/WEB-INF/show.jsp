<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
	<a href="/">Dashboard</a>
<div class="container d-flex justify-content-center align-items-center flex-column">
	<h3>Name:</h3>
	<p>${product.name}</p>
	<h3>Description</h3>
	<p>${product.description}</p>
	<h3>Price:</h3>
	<p>${product.price}</p>
	<h3>Categories</h3>
	<ol>
		<c:forEach items="${product.categories}" var="x">
		<li><a href="/categories/show/${x.id}">${x.name}</a></li>
		</c:forEach>
	</ol>


<div class="container d-flex justify-content-center align-items-center flex-column">

	<form action="/addSerfToMain/${product.id}" method="POST">

		<select name="category_id">
			<c:forEach var="x" items="${categories}">
	    		<option value="${x.id}">${x.name}</option>
			</c:forEach>
		</select>
		<br/>

		<button>Add Product</button>
	</form>
</div>
</div>


</body>
</html>