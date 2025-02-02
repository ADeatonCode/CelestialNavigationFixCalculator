// Define global variables and objects

// Basic Trig Functions 

function cos(angle) {
    return Math.cos(angle * Math.PI / 180);
}

function sin(angle) {
    return Math.sin(angle * Math.PI / 180);
}

function cos(angle) {
    return Math.cos(angle * Math.PI / 180);
}
function tan(angle) {
    return Math.tan(angle * Math.PI / 180);
}

// Basic Inverse Trig Functions

function acs(xx) {
    return Math.acos(xx) * 180 / Math.PI;
}

function asin(yy) {
    return Math.asin(yy) * 180 / Math.PI;
}

function atan(zz) {
    return Math.atan(zz) * 180 / Math.PI;
}

// Advanced Trig Functions

function cot(angle) {
    return 1 / (tan(angle));
}

function sec(angle) {
    return 1 / (cos(angle));
}

// Celestial Navigation Functions

function dOffset(Ho,Hc) {
    return Ho - Hc;
}

function PA(HP, COS, LAT) {
    return HP * Cos(HA)*(1-(sin(Lat))**2/298.25);
}

function SD(HP, Ha) {
    return .2724 * HP * (1-sin(Ha)/230);
}

function R(Ha, PressureMb, TemperatureC) {
    let R0 = -0.0167/tan(Ha + 7.31/(Ha + 4.4));
    let f = .28 * PresureMb / (TemperatureC +273)
    return R0*f;
}

function Ho(Hs,IC, corrDip, corrAlt) {
    if (moon) {
        return Ha + R + PA + SD * LimbSgn(UL);
    } else {
        return Hs + IC + corrDip + R;
    }
}

function hC(lat,dec,lha) {
    return asin(sin(lat)*sin(dec)+cos(lat)*cos(dec)*cos(lha));
}

function limbSgn(UL) {
    if (UL) {
        return -1;
    }
    if (!UL) {
        return 1;
    }
    return 0;
}
function zN(lat,dec,lha,hC) {
        let z=acs((sin(dec)-sin(lat)*sin(hC))/(cos(lat)*cos(hC)));
        if (lha===0) {
            z=180;
        }
        if (lha>0) {
            z=360-z;
        }
        return z;
}

function hAC(fhC) {
    let fHac = .0167/tan(fhC+8.62/(fhC+4.4))+fhC;
    return fHac;
}

// functions for calculating running fix...

function rOffA(Azm) {
    for (let i = 0; i <5; i++) {
        let A = A + cos(Az)**2;
        return A;
    }
}

function rOffB(Azm) {
    for (let i = 0; i < 5; i++) {
        let B = B + cos(Az)*sin(Az);
        return B;
    }
}

function rOffC(Azm) { 
    for (let i = 0; i < 5; i++) {
        let C = C + sin(Az)**2;
        return C;
    }
}

function rOffD(Azm, P1, P2) {
    for (let i=0; i<5; i++) {
        let D =+ cos(Az) * (P1 + P2);
        return D;
    }
}

function roffG(A,C,B) {
    return A * C - B**2;
}

function rOffE(AZ,P1,P2) {
    for (let i=0; i<5; i++) {
        let E =+ cos(AZ) * (P1+P2);
        return E;
    }
}

function getDayOfYear(date) {
    
    // Create a new date object for the first day of the year
    const start = new Date(date.getFullYear(), 0, 0);
    
    // Calculate the difference in milliseconds
    const diff = date - start;
    
    // Convert milliseconds to days
    const oneDay = 1000 * 60 * 60 * 24;
    
    // Calculate the day of the year
    const day = Math.floor(diff / oneDay);
    return day;
}

// Other functions

function abs(num) {
    return Math.abs(num);
}

function int(num) {
    return parseInt(num);
}

function sgn(num) {
    return Math.sign(num);
}
// Rounding interval function

function roundInterval(NumberToRound,Interval) {
    if (NumberToRound < 0)  { 
        return int(abs(NumberToRound) / Interval + .5) *Interval*-1;
    }else {        
        return int(NumberToRound / Interval + .5)* Interval;
    }
}

function timeHM(time) {
    let hours = int(time);
    let minutes = int((time - hours) * 60);
    return `${hours < 10? '0' + hours : hours}:${minutes < 10? '0' + minutes : minutes}`;
}

const navData = {
    HeightOfEye: null,
    InstrumentCorrection: null,
    Temperature: null,
    PressureMb: null,
    dateFix: null,
    timeFix: null,
    latitude: null,
    longitude: null,
};

const sightObject = {
    SightDate: null,
    SightTime: null,
    SightObject: null,
    AltitudeSextant: null,
    AltitudeObserved: null,
    Declination: null,
    d: null,
    GHA: null,
    v: null,
    Declination: null,
    Azimuth: null,
    distanceOffset: null
};



