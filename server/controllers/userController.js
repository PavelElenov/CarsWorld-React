const { editUser } = require("../services/userService");
const createToken = require("../utils/createToken");

const router = require("express").Router();

router.patch("/:id", async (req, res) => {
    const user = await editUser(req.params.id, req.body);
   
    res.status(200).json(createToken(user));
});

module.exports = router;