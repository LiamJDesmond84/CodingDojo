package Bootcamp.Java.OOP.ProjectClass;

public class ProjectTest {
    public static void main(String[] args) {

        Project a = new Project();
        Project b = new Project("Alpha");
        Project c = new Project("Omega", "Destroys Everything", 4.99);

        a.getClassType("a");

        String x = b.getName();
        System.out.println(x);

        c.elevatorPitch();


    }
}
