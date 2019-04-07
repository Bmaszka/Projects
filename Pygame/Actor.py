import pgzrun
WIDTH = 800
HEIGHT = 600

alien = Actor('alien', (100,100))

def draw():
    screen.clear()
    alien.draw()
    
pgzrun.go()    





