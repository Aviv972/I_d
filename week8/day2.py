class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def older(self):
        if cat1.age > cat2.age and cat1.age > cat3.age:
            print(f"The oldest cat is {cat1.name} , and is {cat1.age} years old.")
        elif cat2.age > cat1.age and cat2.age > cat3.age:
            print(f"The oldest cat is {cat2.name} , and is {cat2.age} years old.")
        else:
            print(f"The oldest cat is {cat3.name} , and is {cat3.age} years old.")

cat1 = Cat("Tim",3)
cat2 = Cat("Tam",4)
cat3 = Cat("Gam",5)

cat1.older()

class Dog:
    def __init__(self, name, hight):
        self.name = name
        self.hight = hight

    def bark(self):
        print("goes woof!")

    def jump(self):
        
        print(f"jumps {self.hight * 2} cm high!")

davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("Teacup", 20)

def bigger():
    if davids_dog > sarahs_dog:
        print(davids_dog)
    else:
        print(sarahs_dog)

print(bigger)

davids_dog.bark()
davids_dog.jump()
sarahs_dog.bark()
sarahs_dog.jump()


class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()

class Zooz:
    def __init__(self, name):
        self.name = name
        self.animals = []
       
    
    def add_animal(self):
        for new in self.animals:
            if new in self.animals:
                continue
            else:
                self.animals.append(new)
    
    def get_animals(self):
        print(self.animals)

            


        