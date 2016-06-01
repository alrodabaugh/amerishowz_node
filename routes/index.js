exports.index = function(req, res){
  res.render('default', {
    title: 'Home',
    classname: 'home'
  });
}

exports.opportunity = function(req, res){
  res.render('default', {
    title: 'Opportunity',
    classname: 'opportunity'
  });
}
