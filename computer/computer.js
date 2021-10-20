/* 3.  Implement a class named 'Computer' with the following properties and functions: 
      Properties: 
        make: string 
        model: string 
        driveCapacity: number 
        batteryPercent: number 
        status: boolean (true = on, false = off)

      Functions: 
        constructor() --> should take 3 arguments: make, model, capacity and set the arguments to their 
                         respective properties of the computer class (this.make, this.model, this.driveCapacity) 
         
        getBatteryPercent() --> should return a string value of the batteryPercent property followed by a percent symbol 
         
        getStatus() --> should return the string value of the status property, 'ON' if the computer 
                        is on, 'OFF' if the computer is off

 */

class Computer {
    constructor(make, model, driveCapacity, batteryPercent = 100, status = false) {
        this.make = make
        this.model = model
        this.driveCapacity = driveCapacity
        this.batteryPercent = batteryPercent
        this.status = status
    }
    getBatteryPercent() {
        return this.batteryPercent + "%"
    }
    getStatus() {
        if (this.status === true) {
            return "ON"
        }
        else {
            this.status = false
            return "OFF"
        }
    }
}