num1 = 42#variable declaration
num2 = 2.3#variable declaration
boolean = True#boolean #variable declaration
string = 'Hello World'#variable declaration
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']#initialize list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}#initialize dictionary
fruit = ('blueberry', 'strawberry', 'banana')#initialize tuple
print(type(fruit))#log statement
print(pizza_toppings[1])#log statement
pizza_toppings.append('Mushrooms')#add value
print(person['name'])#log statement
person['name'] = 'George'#change value
person['eye_color'] = 'blue'#change value
print(fruit[2])#log statement

if num1 > 45:#if statement
    print("It's greater")#log statement
else:#else statement
    print("It's lower")#log statement

if len(string) < 5:#if statement
    print("It's a short word!")#log statement
elif len(string) > 15:#elif statement
    print("It's a long word!")#log statement
else:#else statement
    print("Just right!")#log statement

for x in range(5):#for loop
    print(x)#log statement
for x in range(2,5):#for loop
    print(x)#log statement
for x in range(2,10,3):#for loop
    print(x)#log statement
x = 0#variable declaration
while(x < 5):#while loop
    print(x)#log statement
    x += 1#increment

pizza_toppings.pop()#Delete value
pizza_toppings.pop(1)#Delete value

print(person)#log statement
person.pop('eye_color')#Delete value
print(person)#log statement

for topping in pizza_toppings:#for loop
    if topping == 'Pepperoni':#if statement
        continue#function continue
    print('After 1st if statement')#log statement
    if topping == 'Olives':#if statement
        break#function break

def print_hello_ten_times():#function parameter
    for num in range(10):#for loop
        print('Hello')#log statement

print_hello_ten_times()#function parameter

def print_hello_x_times(x):#function parameter
    for num in range(x):#for loop
        print('Hello')#log statement

print_hello_x_times(4)#function argument

def print_hello_x_or_ten_times(x = 10):#function parameter
    for num in range(x):#for loop
        print('Hello')#log statement

print_hello_x_or_ten_times()#function argument
print_hello_x_or_ten_times(4)#function argument


"""
Bonus section
"""

# print(num3)NameError: name <variable name> is not defined
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])KeyError: 'favorite_team'
# print(pizza_toppings[7])IndexError: list index out of range
#   print(boolean)NameError: name <variable name> is not defined
# fruit.append('raspberry') #add value
# fruit.pop(1)AttributeError: #delete value