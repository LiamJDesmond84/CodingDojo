package com.liam.web.pets.controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.liam.web.pets.models.Cat;


/**
 * Servlet implementation class showCat
 */
@WebServlet("/showCat")
public class showCat extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public showCat() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// Process Request:
		String name = request.getParameter("name");
        String breed = request.getParameter("breed");
        int weight = Integer.parseInt(request.getParameter("weight"));
        // Create model
        Cat cat = new Cat(name, breed, weight);
        // Set Model for view
        request.setAttribute("cat", cat);
        // Let view handle the request
        RequestDispatcher view = request.getRequestDispatcher("/cats.jsp");
        view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
