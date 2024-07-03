export const roles = [
  {
    uz: "O'quvchi",
    en: "Student",
    role: "student",
    register: true,
  },
  {
    uz: "Ota-ona",
    en: "Parents",
    role: "parents",
    register: true,
  },
  {
    uz: "Rahbar",
    en: "Leader teacher",
    role: "leader_teacher",
    register: true,
  },
  {
    uz: "O'qituvchi",
    en: "Teacher",
    role: "teacher",
    register: true,
  },
  {
    uz: "Asosiy o'qituvchi",
    en: "Main teacher",
    role: "main_teacher",
    register: false,
  },
  {
    uz: "Uslubiy birlashma",
    en: "Methodological association",
    role: "methodological",
    register: true,
  },
  {
    uz: "Direktor",
    en: "Director",
    role: "director",
    register: true,
  },
  {
    uz: "Admin",
    en: "Admin",
    role: "admin",
    register: true,
  },
];

export const role_checker = {
  student: ["name", "surname", "region", "district", "school_number", "class"],
  parents: ["name", "surname", "region", "district"],

  leader_teacher: [
    "name",
    "surname",
    "region",
    "district",
    "school_number",
    "class",
  ],

  teacher: [
    "name",
    "surname",
    "region",
    "district",
    "school_number",
    "subjects",
    "class",
  ],
  methodological: [
    "name",
    "surname",
    "region",
    "district",
    "school_number",
    "subjects",
  ],
  director: ["name", "surname", "region", "district", "school_number"],
  admin: ["name", "surname", "secret_key"],
};

export const uz_names = {
  name: "Ism",
  surname: "Familiya",
  region: "Viloyat",
  district: "Tuman",
  school_number: "Maktab",
  subjects: "Fan",
  class: "Sinf",
  secret_key: "Maxfiy kalit",
};
