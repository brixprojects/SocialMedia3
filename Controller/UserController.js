import UserModel from "../Models/userModel.js";


// get a User
export const getUser = async(req, res)=>{
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);

        if(user)
     { 
         const {password, ...otherDetails} = user._doc

            res.status(200).json(otherDetails)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};


// update a user 
export const  updateUser = async (req, res) => {
    const id = req.params.id
    const {currentUserId, currentUserAdminStatus, password} = req.body

    if(id===currentUserId)
}