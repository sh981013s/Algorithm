hr, min = map(int, input().split())

def fourty_five(x, y):
    if x >= 0 and y >= 45 :
        print("{} {}".format(x, y-45))
    elif y < 45 : 
        if x > 0:
            y = 60-(45-y)
            print("{} {}".format(x-1,y))
        else:
            x = 23
            y = 60-(45-y)
            print("{} {}".format(x,y))




fourty_five(hr,min)