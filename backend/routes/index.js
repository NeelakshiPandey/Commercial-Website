const express =require('express')

const router =express.Router()


const userSignUpController=require("../controller/userSignUp")
const userSignInController=require("../controller/userSignIn")
const userDetailsController=require("../controller/userDetails")
const authToken=require("../middleware/authToken")
const userLogout=require("../controller/userLogout")
const allUsers=require('../controller/allUsers')
const updateUser=require('../controller/updateUser')



router.post('/signup',userSignUpController)
router.post('/signin',userSignInController)
router.get('/user-details',authToken,userDetailsController)
router.get("/userLogout",userLogout)





// admin panel
router.get("/all-user",authToken,allUsers)
router.put("/update-user",updateUser)

module.exports=router