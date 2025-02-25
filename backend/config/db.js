import mongoose from "mongoose";


export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://LakshitJoshi:rkon198@foodappstripecluster.cmw2h.mongodb.net/Food_app_stripe').then(()=>console.log("DB Connected")));
}
