export const ADD_SCANNED_SERIAL = 'ADD_SCANNED_SERIAL';

export const addScannedSerial = serial => ({
    type: ADD_SCANNED_SERIAL,
    serial,
});