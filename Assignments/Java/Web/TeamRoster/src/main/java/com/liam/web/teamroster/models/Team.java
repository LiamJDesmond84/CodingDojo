package com.liam.web.teamroster.models;

import java.util.ArrayList;
import java.util.List;

public class Team {
	
	private String team_name;
	
	private List<Player> players;

	public Team() {

	}

	public Team(String name) {
		this.team_name = name;
		this.players = new ArrayList<Player>();
	}



	public String getTeam_name() {
		return team_name;
	}

	public void setTeam_name(String team_name) {
		this.team_name = team_name;
	}
	
	

	public List<Player> getPlayers() {
		return players;
	}

	public void setPlayers(List<Player> players) {
		this.players = players;
	}

	public void addPlayer(Player p) {
		this.players.add(p);
	}
	
	public void removePlayer(Player p) {
		this.players.remove(p);
	}
		
	}


