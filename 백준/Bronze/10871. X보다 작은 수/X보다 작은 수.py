N, A = map(int, input().split())

array = list(map(int, input().split()))

for i in range(N):
    if array[i] < A :
        print(array[i], end=" ")