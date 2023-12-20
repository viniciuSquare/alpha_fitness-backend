import { PrismaService } from "../src/services/prisma.service";

export function SeedUser() {
  const service = new PrismaService();

  service.user.createMany({
    data: [
      {
        name: "Klebinho157",
        email: "email@hotmail.com",
        dateOfBirth: new Date("2001-02-08"),
        height: 172
      },
      {
        name: "FaganoteForadaLei",
        email: "email2@hotmail.com",
        dateOfBirth: new Date("1999-07-30"),
        height: 180
      },
      {
        name: "QuatroLados",
        email: "email3@hotmail.com",
        dateOfBirth: new Date("2000-04-04"),
        height: 194,
        imageUrl: 'https://github.com/viniciuSquare.png'
      }
    ]
  }).finally(()=> console.log('Users Created'))
}