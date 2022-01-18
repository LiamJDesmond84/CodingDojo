package com.liam.web.teamroster.controllers;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.liam.web.teamroster.models.Team;

/**
 * Servlet implementation class Teams
 */
@WebServlet("/Teams")
public class Teams extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Teams() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	@SuppressWarnings("unchecked")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher view;
		if(request.getParameter("id") == null) {
			view = request.getRequestDispatcher("NewTeam.jsp");
		}else {
			HttpSession session = request.getSession();
			ArrayList<Team>teams = new ArrayList<Team>();
			teams = (ArrayList<Team>)session.getAttribute("teams");	
			request.setAttribute("team", teams.get(Integer.parseInt(request.getParameter("id"))));
			request.setAttribute("id", request.getParameter("id"));
			view = request.getRequestDispatcher("TeamInfo.jsp");
		}
		
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	@SuppressWarnings("unchecked")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		HttpSession session = request.getSession();
		Team team = new Team(request.getParameter("team_name"));
		ArrayList<Team>teams = new ArrayList<Team>();
		if(session.getAttribute("teams") != null) {		
			teams = (ArrayList<Team>)session.getAttribute("teams");	
		}
		teams.add(team);
		session.setAttribute("teams", teams);
		response.sendRedirect("/TeamRoster/Home");
	}

}
