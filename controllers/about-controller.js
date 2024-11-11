
exports.getAbout = (req, res) => {
    res.json([
        {
            firstname: 'Tal',
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