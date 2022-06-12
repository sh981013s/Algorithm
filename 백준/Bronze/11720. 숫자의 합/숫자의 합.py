N = input()
tot_num = input()
sum = 0

tot_num = list(tot_num)

for i in range(len(tot_num)):
    sum += int(tot_num[i])

print(sum)