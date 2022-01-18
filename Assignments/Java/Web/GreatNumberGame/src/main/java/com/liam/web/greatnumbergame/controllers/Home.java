package com.liam.web.greatnumbergame.controllers;

import java.io.IOException;
import java.util.Random;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Home
 */
@WebServlet("/Home")
public class Home extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Home() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		

		if(session.getAttribute("result") == null) {
			Random r = new Random();
			int low = 1;
			int high = 100;
	        int result = r.nextInt(high-low) + low;

	        session.setAttribute("result", result);

			
		}

	        int guess = Integer.parseInt(request.getParameter("guess"));
	        
	        
	        session.setAttribute("guess", guess);

	        RequestDispatcher view = request.getRequestDispatcher("index.jsp");
	        view.forward(request, response);
			doGet(request, response);
			

		

		

	}

}
