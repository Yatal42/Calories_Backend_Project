// Controller to get details about the developers
exports.getAbout = (req, res) => {
    res.json([
        {
            firstname: 'Tal1',
            lastname: 'Yaakobi',
            email: 'taltal2345@gmail.com'
        },
        {
            firstname: 'Gil',
            lastname: 'Levkovitch',
            email: 'gilllev1994@gmail.com'
        }
    ]);
};