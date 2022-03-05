A = int(input())

B = int(input())

C = int(input())

result = str(A * B * C)

for single in range(10):
    print(result.count(str(single)))

