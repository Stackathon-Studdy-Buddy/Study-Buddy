const router =require('express').Router();

module.exports=router;
router.get('/', (req, res) => {
  // Return success response
  return res.status(200).json("hey celia");
});
