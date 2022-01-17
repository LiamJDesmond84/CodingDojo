package com.liam.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
		String firstName = request.getParameter("firstName");
		String lastName = request.getParameter("lastName");
		String language = request.getParameter("language");
		String homeTown = request.getParameter("homeTown");
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        if (request.getParameter("firstName") != null && request.getParameter("lastName") != null) {
        	out.write("<h1>Welcome, " + firstName + "  " + lastName + "</h1>");
        }
        else {
        	out.write("<h1>Welcome, " + null + "  " + null + "</h1>");
        }
        if (request.getParameter("language") != null) {
        	out.write("<p>Your favorite language is: " + language + "</p>");
        }
        else {
        	out.write("<p>Your favorite language is: " + null + "</p>");
        }
        if (request.getParameter("homeTown") != null) {
            out.write("<p>Your hometown is: " + homeTown + "</p>");
        }
        else {
        	out.write("<p>Your hometown is: " + null + "</p>");
        }

	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
