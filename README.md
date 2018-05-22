# Warpgrid
Warpgrid is a simple grid-based game using a pair of dice and a pencil to escape a series of six 6x6 warpgrid game regions.


Story:

In the far future, you have equipped a piece of experimental technology called a warpsuit, intended to allow its
user a means of teleporting through space. However, after trying to use it for the first time, you find yourself 
in a strange grid-like prison, outside of space and time. By traveling from portal to portal through a series of 
six grids, your suit will absorb energy from the fabric of the grid-world, and allow you to warp back home. 
However, you must navigate carefully through each portal while avoiding tears in the fabric of space.


Rules:

1. The goal of the game is for the player to traverse from the top left warpgrid through 6 total warpgrids to the bottom right warpgrid, where escaping from there indicates the player has left the grid world and the game is won. The elements of the game that appear during gameplay are drawn in by the player in pencil, and pair of dice is required to play.
2. The UI elements in the game region are the following: the main 6 x 6 grid is the warpgrid; the 4 grid regions on the left side are the charge tank, where each subregion is a phase charge made up of 12 smaller charge cells; the 6 cells on the right side are the warpdrive meter, where each subcell is a warp cell.
3. The main actors in the warpgrid are the following: a portal for entering and exiting each warpgrid, represented by a circular spiral, and distortions of three different levels, where level 1 is represented by a circle, level 2 is a half-shaded circle, and level 3 is a fully shaded circle. The player is indicated by a level 1 distortion with a verticle center line.
4. Roll a pair of dice twice to begin your turn in a new warpgrid. For each roll, the die that lands more left and right of each other represent x & y respectively on the grid.
5. Draw a portal at these locations to represent the in and out portals for the current warpgrid. The x & y values represent coordinates on the warpgrid, where the top left corner is (1,1), and the bottom right (6,6).
6. For each warp cell in the warpdrive meter, roll the dice before each turn, including the warp-in turn. The x & y values of the dice represent the absolute position of a cell where the distortion will increase, except on portal cells. After the distortion field round ends, erase the in portal and draw the player marker.
7. Roll the dice pair. The (x,y) pair they represent indicates how far you can move in x & y from your current location. Movement in the x and y direction indicate distinct moves, so the order matters whether you move in x or y first.
8. Whenever a wall is encountered, the player may warp past it to the wall on the opposite side of the warpgrid and continue moving. The player may also ricochet off the wall in the opposite direction and continue, increasing distortion on the wall cell if not landing there.
9. Draw a level 1 distortion where you land after each distinct move and a level 2 distortion where you started after the first move each turn. After using both dice, draw a player marker and begin a new turn.
10. In general, initiating a new movement from a space, including ricochets, will cause the distortion at a cell to increase in level from 0 up to 3. Passing a level 2 distortion will transform it into a level 3 distortion.
11. Fill in a charge cell for each space moved in the warpgrid as you move, unless all available charge cells are full.
12. Anytime a level 2 distortion appears, remove 1 charge cell. Anytime a level 3 distortion appears, remove 4 charge cells.
13. When you have a full phase charge in your charge tank, you may clear them and perform a phase by moving 1 space from your current location in the direction that you just moved in, x or y. More phase charges can be used to increase the distance traveled by 1 each.
14. To enter a portal, you must land on it at the end of a movement, including intermediate die moves and phases. Entering an out portal restarts play in the next grid from left to right, top to bottom.
15. Each time the player enters a new warpgrid, fill in another warp cell. This causes a new set of 4 charge cells becomes available to the player. 
16. The game will end if you land on or are standing on a level 2 distortion at the beginning of your next turn, or if you pass through a level 3 distortion.
17. The distortion field can increase distortion on the player location, andwill cause you to lose if they are not avoided. A phase charge can be used as soon as this occurs to move the player to safety before continuing the distortion found.
