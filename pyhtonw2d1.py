import random

# def math(a,b):
#   x = a + b
#   y = a - b
#   print(x,y)

# print(math(5,7))

# def display_message():
#   print("I dont like this day")
  
# print(display_message())

# def favorite_book(title):
#   print("One of my favorite books is" + " " + title)

# print(favorite_book("start with why"))

# def describe_city(city, country):
#   print(city + " " + "is in" + " "+ country)

# print(describe_city("Tel Aviv", "Israel"))

new_f = random.uniform(1,100)
def rund(new_f,b):
  new_x = random.uniform(new_f,b)
  if new_x == new_f:
    print("success")
  else:
    print("fail",new_f, new_x)

print(rund(new_f,34))


def make_shirt(size, text):
  print("summarizing the" + " " + size + " " + "of the shirt and the" + text)


print(make_shirt("L", "I love Python"))
print(make_shirt("M", "I love Python"))  


names = ['Mike', 'Aik', 'Pike', 'Tike']


def make_great():
  new_names = []
  for name in names:
    name =  name + " " +"the Great"
    new_names.append(name)
    print(new_names)
    

###Day3##

def get_age():
  user_input_year = input('What year you were born?')
  user_input_gender = input('Are you M/F')
  try:
	  int(user_input_year)
  except ValueError:
	  print("thats not a number")
  try:
	  str(user_input_gender)
  except ValueError:
	  print("thats not a Letter")
  cal_m = 2021 - int(user_input_year)
  cal_f = 2021 - int(user_input_year)
  # if cal_m >= 67:
  #   return True
  # if user_input_gender in ['M','F']:
  #   True
  if user_input_gender == 'F'and cal_f >= 62:
    print("you can quit")
  elif user_input_gender == 'M'and cal_m >= 67:
    print("you can quit")
  else:
    print("go back to work")


print(get_age())


####daily challenge 17.2.2021##

try:
  num1 = int(input("Choose a number: "))
  num2 = int(input("Choose a second numbr: "))

  resulte = num1/num2
  print(resulte)

except ZeroDivisionError:
    print("Cannot divide by zero")

