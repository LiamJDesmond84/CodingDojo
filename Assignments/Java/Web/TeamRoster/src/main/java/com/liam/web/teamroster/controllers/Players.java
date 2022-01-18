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

import com.liam.web.teamroster.models.Player;
import com.liam.web.teamroster.models.Team;

/**
 * Servlet implementation class Players
 */
@WebServlet("/Players")
public class Players extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Players() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id = Integer.parseInt(request.getParameter("id"));
		HttpSession session = request.getSession();
		ArrayList<Team>teams = new ArrayList<Team>();
		teams = (ArrayList<Team>)session.getAttribute("teams");	
		request.setAttribute("id", request.getParameter("id"));
		request.setAttribute("team", teams.get(id));
		RequestDispatcher view = request.getRequestDispatcher("NewPlayer.jsp");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	@SuppressWarnings("unchecked")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id = Integer.parseInt(request.getParameter("id"));
		HttpSession session = request.getSession();
		
		ArrayList<Team>teams = new ArrayList<Team>();
		teams = (ArrayList<Team>)session.getAttribute("teams");	
		String firstName = request.getParameter("firstName");
		String lastName = request.getParameter("lastName");
        int age = Integer.parseInt(request.getParameter("age"));
        
        Player player = new Player(firstName, lastName, age);
        teams.get(id).addPlayer(player);
        response.sendRedirect("/TeamRoster/Teams?id="+request.getParameter("id"));
	}

}
