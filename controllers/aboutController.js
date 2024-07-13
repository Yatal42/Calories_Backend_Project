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
            id: 312496821,
            email: 'gilllev1994@gmail.com'
        }
    ]);
};