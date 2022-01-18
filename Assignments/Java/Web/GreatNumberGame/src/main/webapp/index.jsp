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

<h2>Take a Guess</h2>

<div>
<p>Your Guess: <c:out value="${guess}"/></p>
<c:choose>
    <c:when test="${result > guess}">
    <div style="background-color: yellow; height: 30; width: 30">
        <p>Too low!</p>
        <br />
    </div>
    </c:when>
    
    <c:when test="${result < guess}">
    <div style="background-color: red; height: 30; width: 30">
        <p>Too High!</p>
        <br />
    </div>
    </c:when>
    
    <c:when test="${guess != null && guess == result}">
    <div style="background-color: green; height: 30; width: 30">
    	<p>You guessed right!</p>
        <p>Answer: <c:out value="${result}"/></p>
    </div>
    </c:when>
    
    <c:otherwise>
	null
    </c:otherwise>
</c:choose>
<p>Answer: <c:out value="${result}"/></p>
</div>

<form action="/GreatNumberGame/Home" method="post">
<input type="number" name="guess">
<button>Submit</button>
</form>

<form action="/GreatNumberGame/Redirect" method="post">
<input type="hidden" name="reset">
<button>Reset</button>
</form>

</body>
</html>