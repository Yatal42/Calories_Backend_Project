// Controller to get details about the developers
exports.getAbout = (req, res) => {
    res.send([
        {
            firstname: 'Tal',
            lastname: 'Yaakobi',
            id: 315788653,
            email: 'taltal2345@gmail.com'
        },
        {
            firstname: 'Gil',
            lastname: 'Levkovitch',
            id: 654321,
            email: 'gil.lev@joindaisy.com'
        }
    ]);
};