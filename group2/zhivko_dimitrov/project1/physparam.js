function ShootPhys(velocity, angleGrad) {
    var ACCELERATION = 1.62519;
    this.angle = (Math.PI / 180) * angleGrad;
    this.velX = velocity * Math.cos(this.angle);
    this.velY = velocity * Math.sin(this.angle);
    this.stime = this.velY / ACCELERATION;
    this.spaceX = this.velX * 2 * this.stime;
    this.spaceY = this.velY * this.stime;
    //this.vertexX = this.spaceX;
    //this.vertexY = this.spaceY;
    //this.igrek0 = 0;
    //this.hiks0 = 0;
    //this.aconst = (this.igrek0 - this.vertexY) / Math.pow((this.hiks0 - this.vertexX), 2);
    this.height = this.spaceY;
    this.width = this.spaceX;
}