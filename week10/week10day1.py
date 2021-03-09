import random
import string


# def hello():
#     print("Hello World")

# def new():
#     print(10)

# x = 10
# y = 5
# z = 2

# def add():
#    new =  x + y
#    print(new)

# def sub():
#     new = x - y
#     print(new)
# print(sub)

# def mul():
#     new = x * y
#     print(new)

# def div():
#     new = x/y
#     print(new)

# print("Welcome to our special calculator where no result is under 0")
# print("Choose an operation:")
# print("a) Add")
# print("b) Substract")
# print("c) Multiply")
# print("d) Divide")
 
# user_choice = input("> ") # a, b, c, or d
 
# number1 = int(input("Please give me a number: "))
# number2 = int(input("Please give me another number: "))

def btw0_100():
    first = int(input("Please choose me a number: "))
    assert 1 <= first <= 100
    second = random.randint(1, 100)
    if second == first:
        print("Wow")
    else:
        print("Try again")
 
def rondomletter():
    new = []
    while len(new) <= 5:
        new.append(random.choice(string.ascii_letters))
    print(new)    


