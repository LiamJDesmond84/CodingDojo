package Bootcamp.Java.OOP.ProjectClass;

public class Project {
    
    private String name;

    private String description;

    private double initialCost;

    public Project() {

    }

    public Project(String name) {
        this.name = name;
    }

    public Project(String name, String description, double initialCost) {
        this.name = name;
        this.description = description;
        this.initialCost = initialCost;
    }

    public void getClassType(String name) {
        System.out.println(this.getClass().getSimpleName());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getInitialCost() {
        return initialCost;
    }

    public void setInitialCost(double initialCost) {
        this.initialCost = initialCost;
    }

    public void elevatorPitch() {
        System.out.println(name + "(" + initialCost + "): " + description);
    }


}

