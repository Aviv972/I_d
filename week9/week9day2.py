# x = abs(3+5j)
# print(x)
# y = int(3.5)
# print(y)

class Currency():
    def __init__(self, cuurency, x):
        self.cuurency = cuurency
        self.x = int(x)
        

    def print_currency(self):
        if self.cuurency == 'dollar':
            print(f'{self.x} {self.cuurency}')
        else:
            print(f'{self.x} {self.cuurency}')
    
    def cal(self,other):
        if self.cuurency == 'dollar' and other.cuurency == 'dollar':
             print(self.x + other.x)
        elif self.cuurency == 'shekel' and other.cuurency == 'shekel':
            print(self.x + other.x)
        else:
            print("error")






c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c4 = Currency('shekel', 1)
c3 = Currency('shekel', 10)

c1.print_currency()
c4.print_currency()
c1.cal(c2)
c3.cal(c4)
c3.cal(c1)

