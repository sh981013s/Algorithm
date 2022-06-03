x_axis = int(input())
y_axis = int(input())

if x_axis > 0 and y_axis > 0 :
    print("1")
elif x_axis < 0 and y_axis > 0 :
    print("2")
elif x_axis < 0 and y_axis < 0 :
    print("3")
elif x_axis > 0 and y_axis < 0 :
    print("4")    