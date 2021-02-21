my_fav_numbers = {3,6,9,12,18}

my_fav_numbers.add(15)
my_fav_numbers.add(21)
print(my_fav_numbers)
my_fav_numbers.remove(21)
print(my_fav_numbers)

friend_fav_numbers = {2,4,6,8,10,12}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

x = range(20)
for n in x:
  print(n)

m = range(5)
for n in m:
  new_list = []
  new_list.append(n + 0.5)
  print(new_list)

basket = ["Banana", "Apples", "Oranges", "Blueberries"];
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.clear()
print(basket)

input("Choose a name")

name = "Aviv"
input("Choose a name")

while input != name:
  print("try again")
  if input == "Aviv":
    break
  