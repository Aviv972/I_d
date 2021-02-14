keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
new_list = zip(keys,values)
print(tuple(new_list))


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

under3 = 0
over3 = 10
over12 = 15

for member in family:
  if family[member] < 3:
    print(member + " " + format(under3))
  elif 12 > family[member] > 3:
    print(member + " " + format(over3)) 
  else:
    print(member + " " + format(over12)) 

cost = family["rick"] + family["beth"] + family["morty"] + family["summer"]
print(cost)

# brand =[ 
# {name: "zara", 
# creation_date: 1975,
# creator_name: "Amancio Ortega Gaona"},
# {type_of_clothes: [men, women, children, home]}, 
# {international_competitors: [Gap, H&M, Benetton]}, 
# {number_stores: 7000},
# {major_color:'France':'blue', 'Spain':'red', 'US':'pink','green'},
# ]

# print(brand)

def caesar_encrypt(realText, step):
	outText = []
	cryptText = []
	
	uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

	for eachLetter in realText:
		if eachLetter in uppercase:
			index = uppercase.index(eachLetter)
			crypting = (index + step) % 26
			cryptText.append(crypting)
			newLetter = uppercase[crypting]
			outText.append(newLetter)
		elif eachLetter in lowercase:
			index = lowercase.index(eachLetter)
			crypting = (index + step) % 26
			cryptText.append(crypting)
			newLetter = lowercase[crypting]
			outText.append(newLetter)
	return outText

code = caesar_encrypt('abc', 3)
print(code)
