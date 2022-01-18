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
	<h1>${team.getTeam_name()}</h1>
	<form action="Players">
		<input type="hidden" name="id" value="${id}">
		<input type="submit" value="New Player">
	</form>
	<table>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Age</th>
			<th>Actions</th>
		</tr>
		<c:forEach var = "player" items="${team.getPlayers()}" varStatus="loop">
		<tr>
			<td>id: <c:out value="${loop.index}"/></td>
			<td><c:out value="${player.getFirstName()}"/></td>
		    <td><c:out value="${player.getLastName()}"/></td>
		    <td><c:out value="${player.getAge()}"/></td>
		    <td>
				<form action="DeletePlayer" id="delete-player" method="post">
					<input type="hidden" name="teamid" value="${id}">
					<input type="hidden" name="playerid" value="${loop.index}">
					<input type="submit" value="Delete">
				</form>
		    </td>
		</tr>
		</c:forEach>
	</table>
</body>
</html>