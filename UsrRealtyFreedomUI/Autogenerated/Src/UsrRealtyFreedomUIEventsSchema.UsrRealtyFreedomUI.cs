namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyFreedomUIEventsSchema

	/// <exclude/>
	public class UsrRealtyFreedomUIEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyFreedomUIEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyFreedomUIEventsSchema(UsrRealtyFreedomUIEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("bec73378-8693-44bc-b6b6-38fefa3f728d");
			Name = "UsrRealtyFreedomUIEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("cd51791e-3505-457f-8e89-8a7095351073");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,203,110,219,48,16,188,235,43,22,66,14,18,96,16,201,53,110,3,212,142,83,24,8,210,34,150,115,41,122,160,169,181,194,130,15,129,164,156,186,133,255,189,75,209,110,45,219,69,187,39,105,57,59,59,51,88,195,53,250,150,11,132,10,157,227,222,174,3,155,90,179,150,77,231,120,144,214,100,63,51,160,234,188,52,13,44,182,62,160,30,31,117,142,167,180,182,230,111,111,14,217,204,4,25,36,250,255,128,176,217,6,77,216,35,191,244,221,109,223,122,148,36,192,160,43,22,226,21,53,127,34,245,240,30,242,165,119,207,200,85,216,62,56,196,218,234,229,60,47,191,246,195,109,183,82,82,128,80,220,123,72,152,11,116,112,11,19,238,241,194,75,79,146,34,56,162,179,27,210,45,107,132,141,149,53,124,50,115,227,209,5,50,84,216,213,55,20,1,60,154,26,221,8,18,227,4,215,228,174,231,253,224,26,15,88,254,38,252,67,29,107,69,34,216,49,221,129,7,203,241,0,152,120,193,245,134,40,129,34,53,202,132,31,98,107,20,82,115,5,173,147,34,166,149,134,216,71,12,213,182,197,122,106,85,167,205,11,87,29,190,219,67,239,138,152,232,231,136,95,46,238,243,147,221,114,13,69,226,186,131,155,235,67,149,3,204,208,86,44,100,115,63,229,70,160,194,154,68,4,215,225,56,59,67,249,224,226,89,208,77,122,222,96,133,186,85,60,68,209,6,223,224,209,10,174,228,15,190,82,184,232,113,197,222,202,146,226,162,163,53,148,60,93,44,123,70,111,59,39,8,100,29,177,140,224,108,77,172,11,71,147,174,46,31,65,126,182,202,179,62,161,185,175,172,157,200,38,253,229,37,171,236,94,74,249,79,55,228,34,53,216,131,117,154,135,226,196,37,173,189,97,215,147,171,211,188,99,133,87,103,223,250,16,102,223,5,182,209,230,97,252,4,189,203,134,95,187,108,247,11,208,22,214,213,228,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("f5438911-07ac-0074-5f03-1df56a4290d3"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("cd51791e-3505-457f-8e89-8a7095351073"),
				CreatedInSchemaUId = new Guid("bec73378-8693-44bc-b6b6-38fefa3f728d"),
				ModifiedInSchemaUId = new Guid("bec73378-8693-44bc-b6b6-38fefa3f728d")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("bec73378-8693-44bc-b6b6-38fefa3f728d"));
		}

		#endregion

	}

	#endregion

}

