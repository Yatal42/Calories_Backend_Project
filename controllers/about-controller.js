/*
  Students:

  - 315788653 -  Tal Yaakobi
  - 312496821 -  Gil Levkovitch
*/

// Controller to get details about the developers
exports.getAbout = (req, res) => {
    res.json([
        {
            firstname: 'Tal1',
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