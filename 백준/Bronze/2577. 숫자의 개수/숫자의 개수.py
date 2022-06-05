a = int(input())
b = int(input())
c = int(input())

product = a*b*c

product = list(str(product))

for i in range(10):
    print(product.count(str(i)))