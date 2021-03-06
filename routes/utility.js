// middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    // if not logged in, redirect to login form
    res.redirect('/vender');
}

function isLoggedInCustomer(req, res, next) {

    if (req.session.email) {
        return next();
    }
    // if not logged in, redirect to login form
    res.redirect('/customer/login');
}

function isSelectedVan(req, res, next) {
    console.log(req.session.vanId)
    if (req.session.vanId) {

        return next();
    }
    // if not logged in, redirect to login form
    res.redirect('/customer');
}


// export the function so that we can use
// in other parts of our all
module.exports = {
    isLoggedIn,
    isLoggedInCustomer,
    isSelectedVan
}