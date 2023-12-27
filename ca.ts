
export interface IBank {
    id: string | null;
    name: string | null;
}

export interface ICompany {
    id: string | null;
    name:  string | null;
    bin: number | null;
    bik: number | null;
    iik: number | null;
    bank: IBank | null;
    address:  string | null;
    url:  string | null;
    bussiness:  string | null;
    phone:  string | null;
    email:  string | null;
    director:  string | null;
    accountant:  string | null;
    contact:  string | null;
    contactPhone:  string | null;
    contactEmail:  string | null;
    contactPosition:  string | null;
}

export class Company implements ICompany {
    id: string | null;
    name: string;
    bin: number | null;
    bik: number | null;
    iik: number | null;
    bank: IBank | null;
    address: string | null;
    url: string | null;
    bussiness: string | null;
    phone: string | null;
    email: string | null;
    director: string | null;
    accountant: string | null;
    contact: string | null;
    contactPhone: string | null;
    contactEmail: string | null;
    contactPosition: string | null;
  constructor(user: ICompany | undefined) {
    this.id = user?.id || null;
    this.name = '';
    this.bin = 0;
    this.bik = 0;
    this.iik = 0;
    this.bank = {id: '', name: ''};
    this.address = '';
    this.url = '';
    this.bussiness = '';
    this.phone = '';
    this.email = '';
    this.director = '';
    this.accountant = '';
    this.contact = '';
    this.contactPhone = '';
    this.contactEmail = '';
    this.contactPosition = '';
  }
}   


basic-typestotal-typescript
Basic Types

string, number and boolean are all basic types.

Learn More | Mark as Learned
null-keywordtotal-typescript
Null keyword

This is the null keyword. It's a way to represent the type of null.

Learn More | Mark as Learned

No quick fixes available

