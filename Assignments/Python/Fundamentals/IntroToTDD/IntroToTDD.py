import unittest

def reverseList(arr):
    for i in range(int(len(arr)/2)):
        arr[i], arr[len(arr)-i-1] = arr[len(arr)-i-1], arr[i]
    return arr
    # return arr.reverse()
    # print(arr)

class reverseListTests(unittest.TestCase):
    def testOne(self):
        self.assertEqual(reverseList([1,2,3,4,5,6]),[6,5,4,3,2,1])
    def testTwo(self):
        self.assertEqual(reverseList([4,5,6]),[6,5,4])
    def testThree(self):
        self.assertEqual(reverseList([9,2,4,8]),[8,4,2,9])
    def testFour(self):
        self.assertEqual(reverseList([7,3,9]),[9,3,7])
    def setUp(self):
        print("running setUp")
    def tearDown(self):
        print("running tearDown tasks")


x = "radar"

def isPalindrome(x):
    return x == x[::-1]

yes = isPalindrome(x)
if yes:
    print("Yes")
else:
    print("No")

isPalindrome(x)

class isPalindromeTestCase(unittest.TestCase):
    def testOne(self):
        self.assertTrue(isPalindrome("radar"))
    def testTwo(self):
        self.assertTrue(isPalindrome("eye"))
    def testThree(self):
        self.assertTrue(isPalindrome("civic"))
    def testFour(self):
        self.assertTrue(isPalindrome("level"))
    def testFive(self):
        self.assertTrue(isPalindrome("madam"))
    def testSix(self):
        self.assertTrue(isPalindrome("refer"))

    def setUp(self):
        print("running setUp")
    def tearDown(self):
        print("running tearDown tasks")



if __name__ == '__main__':
    unittest.main() # this runs our tests