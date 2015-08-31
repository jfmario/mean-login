
import random, sys

length = 16

if len ( sys.argv  ) > 1:
    length = int ( sys.argv [ 1 ] )
    
key = ''

for x in range (0, length):
    nextChar = random.randint ( 33, 126 )
    while nextChar == 92:
        nextChar = random.randint ( 33, 126 )
    key += chr ( nextChar )
    
print ( key )