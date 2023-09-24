interface SendMailOptions {
    from: string;
    to: string;
    subject: string;
    html: string;
}

export interface IMailServerProvider {
    sendMail(options: SendMailOptions): Promise<void>;
}