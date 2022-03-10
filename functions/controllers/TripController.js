

const getTrips = async (req, res) => {
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
};

const create = async (req, res) => {
    res.end('When a Post request is made, then this '
    + 'is the response sent to the client!');
};

const updateTrip = async (req, res) => {
    res.end('When a PUT request is made, then this '
            + 'is the response sent to the client!');
};

const deleteTrip = async (req, res) => {
    res.end('When a DELETE request is made, then this '
            + 'is the response sent to the client!');
};

module.exports = {create, getTrips, updateTrip, deleteTrip};