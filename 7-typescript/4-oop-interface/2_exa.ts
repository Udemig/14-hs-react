// interface ile person nensnesinin tipini tanımlayalım
interface IAddress {
  country: string;
  city: string;
  street: string;
}

interface IEducation {
  school: string;
  degree: string;
  startDate: Date;
  endDate: Date;
}

interface IJob {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
}

interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
  age: number;

  address: IAddress;
  education: IEducation;
  job: IJob[];
}

// api'dan aşağıdaki gibi bir nesne gelidi
const person: IPerson = {
  id: "1",
  firstName: "Ali",
  lastName: "Kaya",
  age: 34,

  address: {
    country: "USA",
    city: "Los Angeles",
    street: "123 Main St.",
  },

  education: {
    school: "University of LA",
    degree: "Bachelor",
    startDate: new Date("2010-09-01"),
    endDate: new Date("2014-09-01"),
  },

  job: [
    {
      company: "Google",
      position: "Software Engineer",
      startDate: new Date("2014-11-14"),
      endDate: new Date("2017-04-25"),
    },
  ],
};

// adres güncelleme fonksiyonu
const updateAddress = (newAddress: IAddress): void => {
  person.address = newAddress;
};
