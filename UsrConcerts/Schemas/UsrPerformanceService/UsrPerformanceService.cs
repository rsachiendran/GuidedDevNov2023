namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;
    using System.Data;
    using Terrasoft.Common;
    using Terrasoft.Core.Entities;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class PerformanceService : BaseService, IReadOnlySessionState
    {

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
            ResponseFormat = WebMessageFormat.Json)]
        public int GetTotalDurationByCode(string code)
        {
            int total = 0;
            var columnName = "";
            var query = new Select(UserConnection);
            columnName = "UsrDuration";
            query.Column("UsrPerformances", "UsrDuration");
            query.From("UsrPerformances");
            query.LeftOuterJoin("UsrConcerts").On("UsrConcerts", "Id").IsEqual("UsrPerformances", "UsrParentConcertId");
            query.Where("UsrConcerts", "UsrCode").IsEqual(Column.Parameter(code));
                //.And("UsrPerformances", "UsrGameResultId").IsNotEqual(Column.Parameter(Guid.Empty));

            using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection())
            {
                using (IDataReader dataReader = query.ExecuteReader(dbExecutor))
                {
                    while (dataReader.Read())
                    {
                        if (!(UserConnection.DBTypeConverter.DBValueToInt(dataReader.GetColumnValue(columnName))).Equals(DBNull.Value))
                        {
                            total += UserConnection.DBTypeConverter.DBValueToInt(dataReader.GetColumnValue(columnName));
                        }

                    }
                }
            }

            return total == 0 ? -1 : total;
        }

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]

        public string GetExample()
        {
            return "OK!";
        }

    }
}