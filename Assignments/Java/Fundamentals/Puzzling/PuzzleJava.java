import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;


public class PuzzleJava {
    



        

    Random randMachine = new Random();

    // randMachine.setSeed(35679);

    public ArrayList<Integer> getTenRolls() {
        ArrayList<Integer> roll = new ArrayList<Integer>();

        roll.add(randMachine.nextInt(1, 21));
        roll.add(randMachine.nextInt(1, 21));
        roll.add(randMachine.nextInt(1, 21));
        roll.add(randMachine.nextInt(1, 21));
        roll.add(randMachine.nextInt(1, 21));
        roll.add(randMachine.nextInt(1, 21));
        roll.add(randMachine.nextInt(1, 21));
        roll.add(randMachine.nextInt(1, 21));
        roll.add(randMachine.nextInt(1, 21));
        roll.add(randMachine.nextInt(1, 21));
        return roll;
    }

    public String getRandomLetter() {
        String[] letters = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};
        int rand = randMachine.nextInt(1, 26);

        String randomLetter = letters[rand];
        return randomLetter;
    }

    public String generatePassword() {

        String password = "";

        for(int i = 0; i < 8; i++) {
            password = password + getRandomLetter();
        }
        return password;
    }

    public ArrayList<String> getNewPasswordSet(int length) {

        ArrayList<String> newPassword = new ArrayList<String>();
        for(int i = 0; i < length; i++) {
            newPassword.add(generatePassword());
        }
        return newPassword;

    }

    public int[] shuffleArray(int[] array) {
        int rand = randMachine.nextInt(0 + 1);
        int[] stuff;
        stuff = new int[array.length];
        for (int i = array.length - 1; i > 0; i--)
        {
        int index = rand;

        int a = array[index];
        array[index] = array[i];
        array[i] = a;
        stuff[rand] = a;

    }
        return stuff;
    }
}
