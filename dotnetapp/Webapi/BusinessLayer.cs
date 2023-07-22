namespace Webapi
{
    internal class BusinessLayer
    {
        DataAccessLayer dal = new DataAccessLayer();
        public string SaveUser(UserModel user)
        {
            return (dal.SaveUser(user));
        }
         
        public List<UserModel> getProfile()
        {
            return dal.getProfile();
        }
    public List<UserModel> getAlljobs()
        {
            return dal.getAlljobs();
        }
    public List<UserModel> dashboard()
        {
            return dal.dashboard();
        }
    public List<UserModel> getJobs()
        {
            return dal.getJobs();
        }
    public List<UserModel> getAppliedJobs()
        {
            return dal.getAppliedJobs();
        }
    }

<<<<<<< HEAD
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> 68c33ef6a8d67ca4dd708c1bbe958082c80ab738
>>>>>>> 42a1df4aa7e60bdeac85759d215b4ca7fd16040d
>>>>>>> 7159bf44cc39b8d8af92fc9321edd24026ad0a45
>>>>>>> 46f7519582fbe2fdbe5b902d3bb9d8dfef0b9f34
=======

}

>>>>>>> be9cd8d03cd66e5e86919c4e8996ff1bd8456876
