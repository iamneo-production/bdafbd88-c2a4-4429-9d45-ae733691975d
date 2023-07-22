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
}
=======
}
>>>>>>> 68c33ef6a8d67ca4dd708c1bbe958082c80ab738
