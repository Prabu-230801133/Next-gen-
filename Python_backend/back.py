# print("hi")
# a=25
# print(a)
# print(a*2)
# import math as m
# print(m.sqrt(a))
# print(m.factorial(5))
# print(m.pi)
# print(m.e)
# print(m.log(a))
# print(m.sin(m.pi/2))
# b=5.67
# print(round(b))
# print(m.ceil(b))
# print(m.floor(b))
# print(m.pow(a,2))

# print("Hello, World!")
# str="Falcon"
# print("string = ",str)
# print("first character =  ",str[0])
# print("upper case = ",str.upper())
# print("lower case = ",str.lower())
# print("replaced string = ",str.replace("F","B"))
# print("length of string = ",len(str))
# print("substring = ",str[1:4])
# print("reverse string = ",str[::-1])
# print("split string = ",str.split("a"))
# print("Is str alphabet?  ",str.isalpha())
# print("count of 'o' = ",str.count("o"))
# print("find 'c' = ",str.find("c"))
# print("concatenation = ",str + " Bird")
# print("formatted string = {} is a {}".format(str, "bird"))
# print(f"f-string = {str} is a bird")
# print("find 'lc' = ",str.find("lc"),end="\n\n")

# print("First problem solution:")
# name="Harsha vardan"
# for i in name:
#     if(name.index(i)%2==1):
#         print(i.upper(),end="")
#     else:
#         print(i.lower(),end="")
# print("\n")

# print("Second problem solution:")
# print(" - ".join(["hello"]*5))

print("list")
list1=["Tukker","Flip","Lucky","Vodka","Ben"]
list2=["Tata","Ferari","Lambo","VolksWagen","BMW"]    
print("Using zip function:")
for car in zip(list1,list2):
    print(car)

print("\nset")
#using set
set1={"apple","banana","cherry"}
set2={"sweet","pudding","cake"}
for item in zip(set1,set2):
    print(item)

#using tuple
print("\ntuple")

tuple1=("A","B","C")
tuple2=("Anaconda","Bear","Cat")        
for item in zip(tuple1,tuple2):
    print(item)

#using dictionary
print("\ndictionary")
dict1={"name":"Vishnu->","name2":"michael->","name3":"shaachin->"}
dict2={"city":"Tanjore","city2":"karaikal","city3":"Mumbai"}
for i,j in zip(dict1,dict2):
    print(dict1[i],end=" ")
    print(dict2[j])