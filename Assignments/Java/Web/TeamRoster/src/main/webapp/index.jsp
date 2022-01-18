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
	<h1>Team Roster</h1>
	<a href="/TeamRoster/Teams">New Team</a>
	<table>
		<tr>
			<th>Team</th>
			<th>Players</th>
			<th>Actions</th>
		</tr>
		<c:forEach var = "team" items="${teams}" varStatus="loop">
		<tr>
			<td>id: <c:out value="${loop.index}"/></td>
			<td><c:out value="${team.getTeam_name()}"/></td>
		    <td><c:out value="${team.getPlayers().size()}"/></td>
		    <td>
		    	<form action="Teams">
		    		<input type="hidden" name="id" value="${loop.index}">
					<input type="submit" value="Details">
		    	</form>		
				<form action="DeleteTeam" id="delete-team" method="post">
					<input type="hidden" name="id" value="${loop.index}">
					<input type="submit" value="Delete">
				</form>
		    </td>
		</tr>
		</c:forEach>
	</table>
</body>
</html>