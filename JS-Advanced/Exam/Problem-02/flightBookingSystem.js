class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName =agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        
        let flightObject = {
            flightNumber,
            destination,
            departureTime,
            price
        }

        if (this.flights.length === 0) {
            this.flights.push(flightObject);
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }

        for (const el of this.flights) {
            if (el.flightNumber === flightNumber) {
                return `Flight ${flightNumber} to ${destination} is already available.`;
            }else {
                this.flights.push(flightObject);
                return `Flight ${flightNumber} to ${destination} has been added to the system.`
            }
        }   
    }

    bookFlight(passengerName, flightNumber) {

        let bookFlightObject = {
            passengerName,
            flightNumber,
        }

        let message = '';

        for (const el of this.flights) {
            if (el.flightNumber === flightNumber) {
                this.bookings.push(bookFlightObject);
                this.bookingsCount++;
                message = `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
                return message;                
            }else {
                message = `Flight ${flightNumber} is not available for booking.`
            }
        }

        return message;
    }

    cancelBooking(passengerName, flightNumber) {

        for (const el of this.bookings) {
            if(el.flightNumber === flightNumber && el.passengerName === passengerName) {
                this.bookings.splice(el, 1);
            }else {
                let error = throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
                return error;
            }
        }

    }


}


const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.bookFlight("Charlie", "CC303"));
