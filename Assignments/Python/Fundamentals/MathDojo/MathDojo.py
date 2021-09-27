class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, *nums):
        for x in nums:
            self.result += x
        return self

    def subtract(self, *nums):
        for x in nums:
            self.result -= x
        return self
    def result(self):
        print(self.result)
        
# create an instance:
md = MathDojo()
# to test:
x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)	# should print 5
# run each of the methods a few more times and check the result!