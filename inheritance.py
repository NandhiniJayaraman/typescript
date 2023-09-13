class parent:
    def __init__(self,a,b):
          self.a=a
          self.b=b
    def sum(self):
        return self.a+self.b
class child(parent):
        def __init__(self, a, b,c):
             super().__init__(a, b)
             self.c=c
        def new(self):
             return self.a+self.b+self.c     

p=parent(4,5)
a1=p.sum()
c=child(2,3,4)
b1=c.new()
print(a1,b1)