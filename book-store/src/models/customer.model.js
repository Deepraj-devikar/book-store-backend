import { Schema, model } from 'mongoose';

const customerSchema = new Schema(
  {
    userID: {
      type: String
    },
    addresses: [{
      name: {
        type: String
      },
      phoneNumber: {
        type: String
      },
      addressType: {
        type: String,
      },
      fullAddress: {
        type: String,
      },
      city: {
        type: String,
      },
      landmark: {
        type: String
      },
      state: {
        type: String,
      },
      pinCode: {
        type: String
      },
      locality: {
        type: String
      }
    }]
  },
  {
    timestamps: true
  }
);

export default model('Customer', customerSchema);
