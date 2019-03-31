import pgzrun
import math

WIDTH = 800
HEIGHT = 600

def drawaxies():
    osX = [ (800, 300) , (0, 300)]
    osY = [ (400, 600) , (400, 0) ]
   
    screen.draw.line(osX [0], osX [1], 'white')
    screen.draw.line(osY [0], osY [1], 'white')
    nextX = 0
    nextY = 0
    for x in range(80):
        nextX = nextX+10
        screen.draw.line((nextX, 297),(nextX, 303),'white')
    for x in range(60):
        nextY = nextY+10
        screen.draw.line((397, nextY),(403, nextY), 'white')
        
        
        
def grid():
    nextX = 0
    nextY = 0
    for x in range(80):
        nextX = nextX+10
        screen.draw.line((nextX, 0),(nextX, 600),(20,20,20))
    for y in range(60):
        nextY = nextY+10
        screen.draw.line((0, nextY),(800, nextY), (20,20,20))

    
def drawPointXY(x,y,color):
    c = x*10 + 400
    d = 300 - y*10
    screen.draw.line((c, d),(c, d), (color))
    
def draw():
    screen.clear()
    grid()
    drawaxies()
    for x in range (-4000,4000,1):
        X = (x/100)
        Y = X**2 + 3*X
        drawPointXY(X,Y, 'green')
        Y = 2*math.sin(X)
        drawPointXY(X,Y, 'blue')
        Y = 4*math.tan(X)
        drawPointXY(X,Y, 'red')
    
    
    

pgzrun.go()