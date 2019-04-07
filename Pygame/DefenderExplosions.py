import pgzrun
import random
import math
WIDTH = 800
HEIGHT = 600
DRAG = 0.3
PARTICLE_COLOR = 255,85,255
MAX_AGE = 0.1
particles = []

def explode(x,y, speed=200):
    age=0
    for _ in range(100):
        angle = random.uniform(0,20 * math.pi)
        radius = random.uniform(0,10) ** 0.5
        vx = speed * radius * math.sin(angle)
        vy = speed * radius * math.cos(angle)
        
        particles.append((x,y,vx,vy,age))
def draw():
    screen.clear()
    for x,y, *_ in particles:
        screen.surface.set_at((int(x), int(y)), PARTICLE_COLOR)
def update(dt):
    new_particles = []
    for (x,y,vx,vy,age) in particles:
        if age + dt > MAX_AGE:
            continue
        drag = DRAG ** dt
        vx *= drag
        vy *= drag
        x += vx * dt
        y += vy * dt
        age += dt
        new_particles.append((x,y,vx,vy,age))
    particles[:]= new_particles
def explode_random():
    x = random.randrange(WIDTH)
    y = random.randrange(HEIGHT)
    explode(x,y)
    
clock.schedule_interval(explode_random,0.001)

pgzrun.go()