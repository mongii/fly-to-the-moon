    class Position{
        constructor(xPos, yPos, face, xLimit, yLimit) {
            this.xPosPrev = xPos;
            this.yPosPrev = yPos;
            this.facePrev = face;
            this.xPos = xPos;
            this.yPos = yPos;
            this.face = face;
            this.xLimit = xLimit;
            this.yLimit = yLimit;
        }

        place(x, y, face) {
        	var intX = parseInt(x, 10);
        	var intY = parseInt(y, 10);

            if (this.checkPosition(intX,intY)) {
            	this.savePreviousPosition();
                this.xPos = intX;
                this.yPos = intY;
                this.face = face;
            }
            return this.getCurrentPosition();
        }

        savePreviousPosition() {
            this.xPosPrev = this.xPos;
            this.yPosPrev = this.yPos;
            this.facePrev = this.face;
        }


        left() {
            switch(this.face){
                case NORTH:
                    this.savePreviousPosition();
                    this.face = WEST;
                    break;
                case SOUTH:
                    this.savePreviousPosition();
                    this.face = EAST;
                    break;
                case EAST:
                    this.savePreviousPosition();
                    this.face = NORTH;
                    break;
                case WEST:
                    this.savePreviousPosition();
                    this.face = SOUTH;
                    break;
            }
            return this.getCurrentPosition();
        }

        right() {
            switch(this.face){
                case NORTH:
                    this.savePreviousPosition();
                    this.face = EAST;
                    break;
                case SOUTH:
                    this.savePreviousPosition();
                    this.face = WEST;
                    break;
                case EAST:
                    this.savePreviousPosition();
                    this.face = SOUTH;
                    break;
                case WEST:
                    this.savePreviousPosition();
                    this.face = NORTH;
                    break;
            }
            return this.getCurrentPosition();
        }
        move() {
            var newX;
            var newY;
            switch(this.face){
                case NORTH:
                    newY = this.yPos + 1;
                    newX = this.xPos;
                    if(this.checkPosition(newX,newY)) {
                        this.savePreviousPosition();
                        this.xPos = newX;
                        this.yPos = newY;
                    }
                    break;
                case SOUTH:
                    newY = this.yPos - 1;
                    newX = this.xPos;
                    if(this.checkPosition(newX,newY)) {
                        this.savePreviousPosition();
                        this.xPos = newX;
                        this.yPos = newY;
                    }
                    break;
                case EAST:
                    newX = this.xPos + 1;
                    newY = this.yPos;
                    if(this.checkPosition(newX,newY)) {
                        this.savePreviousPosition();
                        this.xPos = newX;
                        this.yPos = newY;
                    }
                    break;
                case WEST:
                    newX = this.xPos - 1;
                    newY = this.yPos;
                    if(this.checkPosition(newX,newY)) {
                        this.savePreviousPosition();
                        this.xPos = newX;
                        this.yPos = newY;
                    }
                    break;
            }
            return this.getCurrentPosition();
        }

        getCurrentPosition() {
            return {
                xPosPrev: this.xPosPrev,
                yPosPrev: this.yPosPrev,
                facePrev: this.facePrev,
                
                xPos: this.xPos,
                yPos: this.yPos,
                face: this.face
            }
        }

        checkPosition(x, y)
        {
            return (x <= this.xLimit && x >= 0 && y >= 0 && y <= this.yLimit);
        }

        report() {
            console.log("====");
            console.log(this.xPosPrev+" "+this.yPosPrev+" "+this.facePrev);
            console.log(this.xPos+" "+this.yPos+" "+this.face);
            console.log("====");
            var robot = new Robot (); 
        }
    }