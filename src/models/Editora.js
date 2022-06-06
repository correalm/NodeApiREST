import mongoose from "mongoose";

const publishingCompanySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  country: { type: String },
});

const publishingCompany = mongoose.model(
  "publishingCompany",
  publishingCompanySchema
);
// 629aa94b34fe857cd20872bd

export default publishingCompany;
