import {Schema, model, models} from 'mongoose';

interface IContact {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const contactSchema = new Schema<IContact>({
	name: String,
	email: String,
	subject: String,
	message: String,
});

export const Contact = models.Contact || model<IContact>('Contact', contactSchema, 'Contact');