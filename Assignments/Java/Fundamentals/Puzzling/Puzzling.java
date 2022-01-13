import java.util.ArrayList;

public class Puzzling {
    public static void main(String[] args) {
        PuzzleJava generator = new PuzzleJava();
        ArrayList<Integer> randomRolls = generator.getTenRolls();
        System.out.println(randomRolls);
        
        generator.getTenRolls();
        String x = generator.getRandomLetter();
        System.out.println(x);

        String y = generator.generatePassword();
        System.out.println(y);

        ArrayList<String> z = new ArrayList<String>();

        z = generator.getNewPasswordSet(9);

        System.out.println(z);

        int[] array = {1,2,3,4,5,5,6,7};

        int[] a = generator.shuffleArray(array);
        System.out.println(a);


    }
}

