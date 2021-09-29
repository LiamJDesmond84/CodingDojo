import functools
from functools import reduce

map1 = [1,2,3]
find1 = [1,2,3,4,5,6]
filter1 = [1,2,3,4,5,6]
reject1 = [1,2,3,4,5,6]

class Underscore:
    def map(self, iterable, callback):
        x = (list(map(callback, iterable)))
        print(x)
        return self
    def find(self, iterable, callback):
        y = iterable.sort(key = callback) #TODO Doesn't work with given lambda function
        print(y)
        return self
    def filter(self, iterable, callback):
        z = (list(filter(callback, iterable)))
        print(z)
        return self
    def reject(self, iterable, callback):
        a = (list(map(callback, iterable))) #TODO Doesn't work with given lambda function
        print(a)
        return self


_ = Underscore()
print(_.map(map1, lambda x: x*2))
print(_.find(find1,lambda x: x>4))
print(_.filter(filter1, lambda x: x%2==0))
print(_.reject(reject1, lambda x: x%2==0))


# _.map([1,2,3], lambda x: x*2) # should return [2,4,6]
# _.find([1,2,3,4,5,6], lambda x: x>4) # should return the first value that is greater than 4
# _.filter([1,2,3,4,5,6], lambda x: x%2==0) # should return [2,4,6]
# _.reject([1,2,3,4,5,6], lambda x: x%2==0) # should return [1,3,5]


# my_arr = [1,2,3,4,5]
# print(list(map(lambda x: x ** 2, my_arr))) # invoke map, pass in a lambda as the first argument
