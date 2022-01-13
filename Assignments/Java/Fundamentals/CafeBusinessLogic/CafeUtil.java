import java.util.ArrayList;

// package Bootcamp.Java.Fundamentals.CafeBusinessLogic;



public class CafeUtil {
    

    public void militaryHoursTest(int num) {
        for (int i = 0; i < num; i++) {
            System.out.println(i);
        }
    }

    public void coffeeNotification(int num) {
        for (int i = 0; i < num; i++) {
            String breakTime = String.format("It's " + i + ":00 hours, do you need a coffee break?");
            System.out.println(breakTime);
        }
    }

    public void specialsAlert() {
        for (int i = 6; i < 16; i++) {
            if (i % 3 == 0) {
                    System.out.println("Buy one get one free for the next 15 minutes!");
                }
            else 
                {
                    System.out.println("Stay tuned for deals announced throughout the day.");
            }
        }
    }

    public int leadsAtDay10(int num) {
        int x = 0;
        for (int i = 1; i < num; i++) {
            x += i;
        }
        return x;
    }

    public void displayMenu(String[] menu) {
        for(String item: menu){
            System.out.println(item);
        }
    }

    public double getOrderTotal(double[] value) {
        double total = 0;
        for(double price: value){
            total += price;
        }
        return total;
    }

    public double getHighestPrice(double[] value) {
        double total = 0;
        for(double price: value){
            if (price > total) {
                total =+ price;
            }
        }
        return total;
    }
    
    public ArrayList<String> getRaffleWinners(String[] customers) {
        ArrayList<String> winners = new ArrayList<String>();
        for (int x = -1; x < customers.length; x+=4){
            if (x > 0) {
                winners.add(customers[x]);
            }
        }
        return winners;
    }
}
