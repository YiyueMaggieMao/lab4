exports.viewProject = function(req, res) {
    console.log("In viewProject");
    let name = req.params.name;
    console.log("name: " + name);
    res.render("project", {
        "projectName": name
    });
}