import IParseMailTempleteDTO from 'shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailContac {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContac;
  from?: IMailContac;
  subject: string;
  templeteData: IParseMailTempleteDTO;
}
