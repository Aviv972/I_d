import random

class Character():
    def __init__(self, name, life, attack):
        self.name = name
        self.life = life
        self.attack = attack
        

    def basic_attack(self, other):
        self.life = 20
        other.life = 20
        if random.randint(0,1) == 0:
            return other.life - 10 
        elif random.randint(0,1) == 1:
            return self.life - 10
        elif self.life == 0:
            print(f'{self.name} is dead') 
        elif other.life == 0:
            print(f'{other.name} is dead') 


class Druid(Character):
    def __init__(self, name, life, attack):
       super().__init__(name,life,attack)

    def meditate(self):
        print(self.life + 10)
        print(self.attack - 2)

    def animal_help(self):
        print(self.attack + 5)
    
    def fight(self,other):
        other.life = other.life * 0.75 
        other.attack = other.attack * 0.75
        print(f'{other.life} and {other.attack}')


class Warrior(Character):
    def __init__(self, name, life, attack):
       super().__init__(name,life,attack)

    def brawl(self,other):
        other.life = other.life - self.attack * 2 
        self.life = self.life - self.attack * 0.5
        print(f'{other.life} and {self.life}')

    def train(self):
        self.life + 10
        self.attack + 2
        print(f'{self.life} and {self.attack}')

    def roar(self,other):
        other.attack = other.attack - 3 


aviv = Druid("Aviv", 20, 10)
tom = Druid("Tom", 20, 8)

aviv = Warrior("Aviv", 30, 10)
tom = Warrior("Tom", 30, 15)




        






    
