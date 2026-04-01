def switch(value):
    match value:
        case 1|7:
            return "Ra-One"
        case 2:
            return "Two.two.Two...."
        case 3:
            return "Three da dei!!!"
        case _:
            return "Other na minors da"  
print(switch(7))