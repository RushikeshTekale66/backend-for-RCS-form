const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
    profile:{
        type:String
    },
    fullName: {
        type: String
    },
    description: {
        type: String
    },
    heroImage: {
        type: String
    },
    logo: {
        type: String,
    },
    hexCode: {
        type: String
    },
    useCase: {
        type: String
    },
    traUseCase: {
        type: String
    },
    number: {
        type: Number
    },
    numberLabel: {
        type: String
    },
    email: {
        type: String
    },
    emailLabel: {
        type: String
    },
    website: {
        type: String
    },
    websiteLabel: {
        type: String
    },
    rcsInfo: {
        type: String
    },
    termsUrl: {
        type: String
    },
    privacyUrl: {
        type: String
    },
    rcsNumber: {
        type: String
    },
    aggName: {
        type: String
    },
    brandName: {
        type: String
    },
    brandNameLegal: {
        type: String
    },
    pocAgent: {
        type: String
    }
})

const formDataModel = mongoose.model("formData", formDataSchema);

module.exports = formDataModel;