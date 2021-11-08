function authorize(permissionRoles) {
  return (req, res, next) => {
    const user = req.user;

    let allowed = false;
    user.roles.map((role) => {
      if (permissionRoles.includes(role)) allowed = true;
    });

    if (!allowed) {
      return res.status(403).send({ message: "Not authorized" });
    }

    return next();
  };
}
 module.exports=authorize