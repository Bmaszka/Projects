import pgzrun


WIDTH = 800
HEIGHT = 600

def triangle(w1,w2,w3):
    screen.draw.line(w1,w2, 'red')
    screen.draw.line(w3,w2, 'red')
    screen.draw.line(w1,w3, 'red')
    
def draw():
    screen.clear()
    p1=(450, 200)
    p2=(500, 300)
    p3=(400, 300)
    screen.draw.circle(p3, 30, 'white')
    screen.draw.circle(p2, 30, 'white')
    screen.draw.circle(p1, 30, 'white')
    triangle (p1,p2,p3)
    triangle (p3,p2,p1)
    
             
    
     
        
        
    
    
pgzrun.go()    
    
                       