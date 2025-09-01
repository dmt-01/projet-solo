import { z } from "zod";

export const announcementSchema = z.object({
  title: z
    .string()
    .min(3, "Le titre de l'annonce dois contenir au moins 10 caractères"),
  desciption: z
    .string()
    .min(
      20,
      "La description de l'annonce dois contenir au moins 20 caractères"
    ),
  skills: z.string().transform((val) => val.split(",")),
  mission_type: z
    .array(z.enum(["CDI", "CDD", "Freelance"]))
    .min(1, "Vous devez choisir au moins un type de mission"),
  start_date: z.coerce
    .date()
    .refine((val) => !!val, { message: "La date est obligatoire" }),
    salary: z.string().regex(/^\d+$/, "Le salaire doit être un nombre"),
    salary_unit: z.enum(["heure", "jour", "mois", "an"]),
    password: z.string().min(6, "Mot de passe trop court"),
});

// import { z } from "zod";

// export const announcementSchema = z.object({
//   title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
//   description: z.string().min(10, "La description est trop courte"),
//   skills: z.string().transform((val) => val.split(",")),
//   mission_type: z.enum(["CDI", "CDD", "Freelance"], {
//     required_error: "Le type de mission est obligatoire",
//   }),
//   start_date: z.string().optional(), // tu peux utiliser z.date() si tu transformes avant
//   salary: z.string().regex(/^\d+$/, "Le salaire doit être un nombre"),
//   salary_unit: z.enum(["heure", "jour", "mois", "an"]),
//   password: z.string().min(6, "Mot de passe trop court"),
// });
