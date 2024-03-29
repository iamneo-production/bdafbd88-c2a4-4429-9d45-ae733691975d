using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;


namespace Webapi
{
    internal class DataAccessLayer
    {
        SqlConnection con = new SqlConnection("User ID =sa;password=examlyMssql@123;server=localhost;Database=cookhiring;trusted_connection=false;Persist Security Info =False;Encrypt=False");
        SqlCommand cmd = null;
        SqlDataAdapter adapter = null;
        SqlDataReader dr = null;
        internal string SaveUser(UserModel user)
        {
            cmd = new SqlCommand("select * from UserModel where Email = '" + user.Email + "'", con);
            con.Open();
            dr = cmd.ExecuteReader();

            if (dr.HasRows)
            {
                con.Close();
                return "false";
            }
            else
            {
                con.Close();
                cmd = new SqlCommand("insert into UserModel Values('" + user.Email + "','" + user.Password + "','" + user.username + "'," +
                    "'" + user.mobileNumber + "','"+user.userRole+"') ", con);
                con.Open();
                int rowsaffected = cmd.ExecuteNonQuery();
                con.Close();
                if (rowsaffected > 0)
                {
                    return "true";
                }
                else
                {
                    return "false";
                }
            }
        }

        public List<UserModel> getProfile()
        {
            List<UserModel> hiring = new List<UserModel>();

            using (SqlConnection con = new SqlConnection("User ID =sa;password=examlyMssql@123;server=localhost;Database=cookhiring;trusted_connection=false;Persist Security Info =False;Encrypt=False"))
            {
                con.Open();

                string query = "SELECT * FROM UserModel";
                using (SqlCommand cmd = new SqlCommand(query, con))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            UserModel hire = new UserModel
                            {
                               
                                Email = reader["Email"].ToString(),
                                username = reader["username"].ToString(),
                                
                            };

                            hiring.Add(hire);
                        }
                    }
                }
            }

            return hiring;
        }

        public List<UserModel> getJobs()
        {
            List<UserModel> hiring = new List<UserModel>();

            using (SqlConnection con = new SqlConnection("User ID =sa;password=examlyMssql@123;server=localhost;Database=cookhiring;trusted_connection=false;Persist Security Info =False;Encrypt=False"))
            {
                con.Open();

                string query = "SELECT * FROM UserModel";
                using (SqlCommand cmd = new SqlCommand(query, con))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            UserModel hire = new UserModel
                            {
                               
                                Email = reader["Email"].ToString(),
                                username = reader["username"].ToString(),
                                
                            };

                            hiring.Add(hire);
                        }
                    }
                }
            }

            return hiring;
        }

    public List<UserModel> getAlljobs()
        {
            List<UserModel> hiring = new List<UserModel>();

            using (SqlConnection con = new SqlConnection("User ID =sa;password=examlyMssql@123;server=localhost;Database=cookhiring;trusted_connection=false;Persist Security Info =False;Encrypt=False"))
            {
                con.Open();

                string query = "SELECT * FROM UserModel";
                using (SqlCommand cmd = new SqlCommand(query, con))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            UserModel hire = new UserModel
                            {
                               
                                Email = reader["Email"].ToString(),
                                username = reader["username"].ToString(),
                                
                            };

                            hiring.Add(hire);
                        }
                    }
                }
            }

            return hiring;
        }

    public List<UserModel> dashboard()
        {
            List<UserModel> hiring = new List<UserModel>();

            using (SqlConnection con = new SqlConnection("User ID =sa;password=examlyMssql@123;server=localhost;Database=cookhiring;trusted_connection=false;Persist Security Info =False;Encrypt=False"))
            {
                con.Open();

                string query = "SELECT * FROM UserModel";
                using (SqlCommand cmd = new SqlCommand(query, con))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            UserModel hire = new UserModel
                            {
                               
                                Email = reader["Email"].ToString(),
                                username = reader["username"].ToString(),
                                
                            };

                            hiring.Add(hire);
                        }
                    }
                }
            }

            return hiring;
        }


    public List<UserModel> getAppliedJobs()
        {
            List<UserModel> hiring = new List<UserModel>();

            using (SqlConnection con = new SqlConnection("User ID =sa;password=examlyMssql@123;server=localhost;Database=cookhiring;trusted_connection=false;Persist Security Info =False;Encrypt=False"))
            {
                con.Open();

                string query = "SELECT * FROM UserModel";
                using (SqlCommand cmd = new SqlCommand(query, con))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            UserModel hire = new UserModel
                            {
                               
                                Email = reader["Email"].ToString(),
                                username = reader["username"].ToString(),
                                
                            };

                            hiring.Add(hire);
                        }
                    }
                }
            }

            return hiring;
        }


        


    }
}
