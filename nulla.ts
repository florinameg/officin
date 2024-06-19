interface GeoData {
  lat: number;
  lon: number;
  altitude: number;
  accuracy: number;
}

class GeoLocation {
  private geoData: GeoData;

  constructor(geoData: GeoData) {
    this.geoData = geoData;
  }

  getLatitude(): number {
    return this.geoData.lat;
  }

  getLongitude(): number {
    return this.geoData.lon;
  }

  getAltitude(): number {
    return this.geoData.altitude;
  }

  getAccuracy(): number {
    return this.geoData.accuracy;
  }
}

// Example usage:
const geoData: GeoData = {
  lat: 37.7749,
  lon: -122.4194,
  altitude: 50,
  accuracy: 10
};

const geoLocation = new GeoLocation(geoData);
console.log(geoLocation.getLatitude()); // Output: 37.7749
console.log(geoLocation.getLongitude()); // Output: -122.4194
console.log(geoLocation.getAltitude()); // Output: 50
console.log(geoLocation.getAccuracy()); // Output: 10
