import { IMailServerProvider } from "../IMailServerProvider";
import nodemailer from "nodemailer";

export class MailProvider implements IMailServerProvider {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });
    }

    async sendMail(options: any): Promise<void> {
        this.transporter.sendMail(options);        
    }

}
    