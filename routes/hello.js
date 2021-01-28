
/*
 * GET home page.
 */

exports.view = function(req, res) {
  let nameToShow = req.params.userName;
  console.log("nameToShow: " + nameToShow);
  res.render('index', {
  	'name': nameToShow,
  });
};
