const { Router } = require("express");
const { signup,verifyOTP } = require("../controllers/auth");
const router = Router();

router.post("/signup", signup);
router.post("/verify_otp", verifyOTP);
module.exports = router;
